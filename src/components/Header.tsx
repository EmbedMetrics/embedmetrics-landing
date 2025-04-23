import { Link } from "react-router-dom";
import logo from "../assets/EmbedMetrics.svg";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm py-4 px-6 flex justify-between items-center text-sm">
      <Link to="/" className="flex items-center space-x-2">
        <img src={logo} alt="Logo" className="w-8 h-8" />
        <span className="font-semibold text-xl text-gray-900">
          EmbedMetrics
        </span>
      </Link>

      <nav className="text-base">
        <Link to="/" className="text-gray-700 hover:text-indigo-600 mr-6">
          Home
        </Link>
        <Link to="/blog" className="text-gray-700 hover:text-indigo-600">
          Blog
        </Link>
      </nav>
    </header>
  );
}
