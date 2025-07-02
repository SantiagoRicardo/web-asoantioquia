import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  return (
    <header className="sticky top-0 z-50 border-b border-green-100 shadow-lg bg-white/95 backdrop-blur-md">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/public/logo-asoantioquia.png"
              alt="Asoantioquia"
              className="w-auto h-12"
            />
            <span className="text-2xl font-bold text-transparent bg-gradient-to-r from-green-600 to-green-800 bg-clip-text">
              Asoantioquia
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden space-x-8 md:flex">
            <Link
              to="/"
              className="relative font-medium text-gray-700 transition-all duration-300 hover:text-green-600 group"
            >
              Inicio
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>

            <div className="relative">
              <button
                onClick={toggleDropdown}
                className="relative flex items-center font-medium text-gray-700 transition-all duration-300 hover:text-green-600 group"
              >
                ¿Quiénes somos?
                <ChevronDown
                  className={`ml-1 h-4 w-4 transition-transform duration-300 ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
              </button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 w-56 mt-2 overflow-hidden bg-white border border-green-100 shadow-xl top-full rounded-2xl"
                  >
                    <Link
                      to="/mision-vision"
                      className="block px-6 py-4 text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Misión y Visión
                    </Link>
                    <Link
                      to="/responsabilidad-social"
                      className="block px-6 py-4 text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Responsabilidad Social
                    </Link>
                    <Link
                      to="/valores"
                      className="block px-6 py-4 text-gray-700 transition-all duration-300 hover:bg-gradient-to-r hover:from-green-50 hover:to-green-100 hover:text-green-700"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Valores
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/servicios"
              className="relative font-medium text-gray-700 transition-all duration-300 hover:text-green-600 group"
            >
              Servicios
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/impacto"
              className="relative font-medium text-gray-700 transition-all duration-300 hover:text-green-600 group"
            >
              Impacto
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              to="/contacto"
              className="px-6 py-2 font-medium text-white transition-all duration-300 transform rounded-full shadow-lg bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 hover:scale-105 hover:shadow-xl"
            >
              Contacto
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="p-2 text-gray-700 transition-all duration-300 md:hidden rounded-xl hover:text-green-600 hover:bg-green-50"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden md:hidden"
            >
              <div className="py-6 mt-4 space-y-4 border-t border-green-100">
                <Link
                  to="/"
                  className="block px-4 py-2 font-medium text-gray-700 transition-all duration-300 rounded-lg hover:text-green-600 hover:bg-green-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Inicio
                </Link>
                <Link
                  to="/mision-vision"
                  className="block px-4 py-2 font-medium text-gray-700 transition-all duration-300 rounded-lg hover:text-green-600 hover:bg-green-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Misión y Visión
                </Link>
                <Link
                  to="/responsabilidad-social"
                  className="block px-4 py-2 font-medium text-gray-700 transition-all duration-300 rounded-lg hover:text-green-600 hover:bg-green-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Responsabilidad Social
                </Link>
                <Link
                  to="/valores"
                  className="block px-4 py-2 font-medium text-gray-700 transition-all duration-300 rounded-lg hover:text-green-600 hover:bg-green-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Valores
                </Link>
                <Link
                  to="/servicios"
                  className="block px-4 py-2 font-medium text-gray-700 transition-all duration-300 rounded-lg hover:text-green-600 hover:bg-green-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Servicios
                </Link>
                <Link
                  to="/impacto"
                  className="block px-4 py-2 font-medium text-gray-700 transition-all duration-300 rounded-lg hover:text-green-600 hover:bg-green-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Impacto
                </Link>
                <Link
                  to="/contacto"
                  className="block px-6 py-3 font-medium text-center text-white transition-all duration-300 rounded-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contacto
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
