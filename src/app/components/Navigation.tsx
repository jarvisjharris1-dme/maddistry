import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";
import logoImage from "figma:asset/709fb444f2ba2798e1997719f97e49e82ddc4c18.png";

export function Navigation() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/gallery", label: "Gallery" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 bg-[#FAFAF8]/95 backdrop-blur-md z-50 border-b border-gray-200/50"
    >
      <div className="max-w-[1800px] mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Desktop Navigation - Left Side */}
          <div className="hidden md:flex gap-12 flex-1 justify-end items-center">
            <Link
              to="/"
              className={`text-sm tracking-[0.15em] uppercase transition-colors ${
                isActive("/")
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className={`text-sm tracking-[0.15em] uppercase transition-colors ${
                isActive("/gallery")
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Gallery
            </Link>
          </div>

          {/* Logo - Center */}
          <Link to="/" className="flex items-center mx-12">
            <img
              src={logoImage}
              alt="Maddistry by Madison Harris"
              className="h-20 transition-transform duration-500 hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation - Right Side */}
          <div className="hidden md:flex gap-12 flex-1 items-center">
            <Link
              to="/about"
              className={`text-sm tracking-[0.15em] uppercase transition-colors ${
                isActive("/about")
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={`text-sm tracking-[0.15em] uppercase transition-colors ${
                isActive("/contact")
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-8 border-t border-gray-200"
          >
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-4 text-sm tracking-[0.15em] uppercase transition-colors ${
                  isActive(link.path)
                    ? "text-gray-900"
                    : "text-gray-500"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}