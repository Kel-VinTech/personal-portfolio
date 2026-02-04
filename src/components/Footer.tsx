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
                className="flex items-center gap-1 text-base font-bold text-muted-foreground hover:text-foreground transition-colors mb-3"
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
                className="block text-base font-bold text-foreground hover:text-primary transition-colors mb-3"
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
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Codeleven.
          </p>
          <div className="flex gap-8 text-sm text-muted-foreground">
            <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=info.kelvinleven@gmail.com&su=Website Inquiry&body=Hello Kelvin,"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Designed by  <span className="text-primary">Codeleven</span>
            </a>

 
          </div>
        </div>
      </div>

      {/* Red banner marquee */}
      {/* <div className="bg-primary py-8 overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee">
          {[...Array(4)].map((_, index) => (
            <span
              key={index}
              className="text-[400] md:text-6xl font-black tracking-wider mx-8"
            >
              CODELEVEN<sup className="text-xl">®</sup> -
            </span>
          ))}
        </div>
      </div> */}
       <div className="bg-primary py-6 overflow-hidden">
          <div className="flex w-max animate-[marquee_36s_linear_infinite] whitespace-nowrap">
            {Array.from({ length: 14 }).map((_, index) => (
              <span
                key={index}
                className="mx-8 font-black uppercase leading-none tracking-wide text-black text-[clamp(4.5rem,8vw,7rem)]"
              >
                CODELEVEN<sup className="text-[0.35em] align-super">®</sup> —
              </span>
            ))}
                </div>
      </div>


    </footer>
  );
};
