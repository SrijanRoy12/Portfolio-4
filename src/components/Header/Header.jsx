import { useState } from 'react';
import { Link } from 'react-router-dom';
import bgImage from "../../Images/5040007.jpg";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="shadow bg-transparent  sticky top-0 z-50" style={{ backgroundImage: `url(${bgImage})` }}>
      <nav className="bg-none px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-2xl">
          <Link
            to="https://leetcode.com/u/guptarehan482/"
            className="flex items-center"
          >
            <div className="text-[#b2b1b1] font-bold text-2xl pt-2">
              REHAN GUPTA
            </div>
          </Link>

          {/* Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 ml-3 text-sm text-gray-400 rounded-lg lg:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
          >
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Nav Links */}
          <div
            className={`${
              isOpen ? 'block' : 'hidden'
            } w-full lg:flex lg:w-auto lg:order-1`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              {['home', 'about', 'contact', 'Projects'].map((section) => (
                <li key={section}>
                  <a
                    href={`#${section}`}
                    className="block py-2 pr-4 pl-3 duration-200 border-b text-[#F0F6FC] border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-[#58A6FF] lg:p-0"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  className="text-[#F0F6FC] hover:text-blue-400 border-2 border-blue-300 font-medium rounded-md text-sm px-4 lg:px-5 py-1 lg:py-2.5 mr-2 mt-2 lg:mt-0"
                >
                  Hire me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
