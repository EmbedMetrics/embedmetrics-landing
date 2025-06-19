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

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      close();
    }
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
          role="dialog"
          aria-modal="true"
          aria-labelledby="early-access-heading"
          style={{ backgroundColor: "rgba(0,0,0,0.3)" }}
          onClick={handleBackdropClick}
        >
          <div className="bg-white px-6 py-8 rounded-2xl shadow-xl max-w-md w-full relative">
            <button
              type="button"
              onClick={close}
              aria-label="Close"
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 rounded-full p-1 transition cursor-pointer"
            >
              <span className="sr-only">Close</span>×
            </button>
            <h2
              id="early-access-heading"
              className="text-xl font-bold mb-2 text-center"
            >
              Get Early Access
            </h2>
            <p className="text-gray-600 text-sm mb-4 text-center">
              Be first to try EmbedMetrics and get product news.
            </p>

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
                  type="text"
                  name="name"
                  autoFocus
                  placeholder="Name (optional)"
                  autoComplete="name"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Email"
                  autoComplete="email"
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
                <textarea
                  name="notes"
                  placeholder="Anything you'd like to share? (Optional)"
                  rows={2}
                  className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
                />
                <input type="text" name="bot-field" className="hidden" />
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-700 transition cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white focus:ring-offset-indigo-600 "
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
