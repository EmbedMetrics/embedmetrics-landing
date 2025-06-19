import React, { createContext, useContext, useState, useEffect } from "react";

const EarlyAccessContext = createContext<{ open: () => void }>({
  open: () => {},
});

export function EarlyAccessProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const open = () => setShowModal(true);
  const close = () => setShowModal(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    fetch("/", {
      method: "POST",
      body: data,
    })
      .then(() => {
        setIsSubmitted(true);
        setTimeout(() => setFadeOut(true), 2500);
        setTimeout(() => {
          setIsSubmitted(false);
          setFadeOut(false);
          setShowModal(false);
        }, 3000);
      })
      .catch(() => {
        alert("Oops! Something went wrong.");
      });
  };

  useEffect(() => {
    if (!showModal) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [showModal]);

  return (
    <EarlyAccessContext.Provider value={{ open }}>
      {children}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
        >
          <div className="bg-white p-8 rounded shadow-lg max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
              type="button"
              onClick={close}
              aria-label="Close"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-4">Get Early Access</h2>
            {isSubmitted ? (
              <p
                className={`text-gray-700 font-medium text-center transition-opacity duration-500 ${
                  fadeOut ? "opacity-0" : "opacity-100"
                }`}
              >
                Thanks! You're on the list. 🎉
              </p>
            ) : (
              <form
                name="early-access"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <input type="hidden" name="form-name" value="early-access" />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your email"
                  autoFocus
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input type="text" name="bot-field" className="hidden" />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition"
                >
                  Request Access
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </EarlyAccessContext.Provider>
  );
}

export function useEarlyAccess() {
  return useContext(EarlyAccessContext);
}
