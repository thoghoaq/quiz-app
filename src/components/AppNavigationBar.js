import { useState } from "react";
import { Link } from "react-router-dom";

const AppNavigationBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex items-center justify-between">
        <ul className={`hidden md:flex space-x-4 ${isMenuOpen ? 'hidden' : ''}`}>
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Quiz
            </Link>
          </li>
          <li>
            <Link
              to="/quiz"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Other
            </Link>
          </li>
        </ul>
        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button
            type="button"
            className="text-white hover:text-gray-300 transition duration-300"
            onClick={toggleMenu}
          >
            {/* Replace with your preferred menu icon (e.g., hamburger icon) */}
            &#9776;
          </button>
        </div>
        {/* User Avatar */}
        <div className="flex items-center">
          <img
            src="path/to/user-avatar.jpg"
            alt="User Avatar"
            className="w-8 h-8 rounded-full object-cover"
          />
          <span className="text-white ml-2">Username</span>
        </div>
      </div>
      {/* Responsive Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-1/2 h-screen fixed left-0 bg-gray-800 z-50">
        <ul className="flex flex-col space-y-2">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300 block py-2 px-4"
              onClick={toggleMenu}
            >
              Quiz
            </Link>
          </li>
          <li>
            <Link
              to="/quiz"
              className="text-white hover:text-gray-300 transition duration-300 block py-2 px-4"
              onClick={toggleMenu}
            >
              Other
            </Link>
          </li>
        </ul>
      </div>
      )}
    </nav>
  );
};

export default AppNavigationBar;
