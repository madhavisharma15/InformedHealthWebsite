import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/favicon.ico";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Consultation", path: "/consultation" },
    { name: "Workshops", path: "/workshops" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Blog", path: "/blog" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-15 my-2">
        <div className="flex justify-between items-center h-[80px] min-w-0">
          <div className="flex items-center space-x-3 ml-0 lg:ml-[-50px] min-w-0">
            <img src={logo} alt="Logo" className="h-16 w-auto flex-shrink-0" />
            <Link to="/" className="flex items-center space-x-2 min-w-0">
              <div className="font-heading font-bold text-xl md:text-2xl min-w-0">
                <span style={{ fontFamily: 'Anton, sans-serif' }} className="text-primary font-thin">Informed Health</span>
                <p className="text-xs font-normal text-muted-foreground whitespace-nowrap">Eat Well. Live Well. Be Healthy.</p>
              </div>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-1 mr-[-50px]">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-md text-md font-medium transition-colors duration-200 relative
                  ${isActive(item.path)
                    ? "text-primary after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-[3px] after:bg-primary after:rounded-full after:content-['']"
                    : "text-foreground hover:text-primary"}
                `}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-accent"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 relative
                      ${isActive(item.path)
                        ? "text-primary after:absolute after:left-4 after:right-4 after:-bottom-1 after:h-[3px] after:bg-primary after:rounded-full after:content-['']"
                        : "text-foreground hover:text-primary"}
                    `}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;
