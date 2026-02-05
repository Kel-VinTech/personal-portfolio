import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home", active: true },
  { name: "About", href: "#about" },
  { name: "Service", href: "#services" },
  { name: "Project", href: "#projects" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-background/95 backdrop-blur-sm" : ""
        }`}
    >
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-display text-2xl font-black tracking-wider text-foreground"
            whileHover={{ scale: 1.02 }}
          >
            CODELEVEN<sup className="text-xs">®</sup>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                className={`px-5 py-2 text-sm font-bold transition-all rounded-full ${link.active
                    ? "bg-foreground/10 text-foreground border border-foreground/20"
                    : "text-muted-foreground hover:text-foreground"
                  }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {link.active && <span className="mr-1 text-primary">•</span>}
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              className="ml-4 px-5 py-2 text-sm font-medium border border-foreground/30 text-foreground rounded-full hover:bg-foreground hover:text-background transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="mr-1">•</span> Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {/* <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 pb-4 bg-red-900"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="px-4 py-3 text-sm font-medium text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence> */}


        {/* Mobile Menu */}
          <AnimatePresence>
  {isMobileMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.25 }}
      className="md:hidden fixed top-16 inset-0 bg-black z-50 w-screen h-screen"
    >
      <div className="flex flex-col gap-8 px-8 py-10 text-center">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-xl font-bold text-white hover:text-red-500 transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {link.name}
          </a>
        ))}

        <a
          href="#contact"
          className="
            inline-flex  w-fit
            mx-auto
            items-center justify-center
            px-6 py-3
            text-sm font-bold text-white
            border border-white/80
            rounded-full
            hover:bg-white 
            transition-colors duration-200
            hover:text-red-500"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </a>
      </div>
    </motion.div>
  )}
          </AnimatePresence>




      </div>
    </motion.nav>
  );
};
