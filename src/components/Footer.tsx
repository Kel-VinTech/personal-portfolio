import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const socialLinks = [
  { name: "FACEBOOK", href: "#" },
  { name: "INSTAGRAM", href: "#" },
  { name: "LINKEDIN", href: "#" },
  { name: "TWITTER", href: "#" },
];

const navLinks = [
  { name: "HOME", href: "#home" },
  { name: "ABOUT", href: "#about" },
  { name: "SERVICE", href: "#services" },
  { name: "PROJECT", href: "#projects" },
];

export const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Subscribe:", email);
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Social Links */}
          <div>
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-3"
              >
                {link.name}
                <ArrowUpRight className="w-3 h-3" />
              </a>
            ))}
          </div>

          {/* Navigation */}
          <div>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-sm text-foreground hover:text-primary transition-colors mb-3"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Newsletter */}
          <div className="md:col-span-2">
            <p className="text-sm text-muted-foreground mb-4">
              Sign up for my newsletter to get latest
              <br />
              insights and updates
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-2 bg-transparent border border-border text-foreground placeholder:text-muted-foreground text-sm focus:outline-none focus:border-primary transition-colors"
              />
              <motion.button
                type="submit"
                className="px-4 py-2 text-sm font-medium border border-foreground text-foreground hover:bg-foreground hover:text-background transition-all"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                • Subscribe
              </motion.button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Devfolio.
          </p>
          <div className="flex gap-8 text-xs text-muted-foreground">
            <a href="#" className="hover:text-foreground transition-colors">
              License
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Changelog
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Style Guide
            </a>
          </div>
        </div>
      </div>

      {/* Red banner marquee */}
      <div className="bg-primary py-4 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, index) => (
            <span
              key={index}
              className="font-display text-4xl md:text-6xl tracking-wider text-primary-foreground mx-8"
            >
              DEVFOLIO<sup className="text-xl">®</sup> -
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};
