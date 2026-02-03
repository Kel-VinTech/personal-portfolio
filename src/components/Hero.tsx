import { motion } from "framer-motion";
import heroImage from "@/assets/hero-portrait.jpg";
import projectThumb from "@/assets/project-thumb.jpg";

const services = [
  "Frontend Development",
  "Data Science",
  "Ad Targeting",
  "Social Media",
];

// Tech logos for frontend and data science
const techLogos = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "TS" },
  { name: "Python", icon: "🐍" },
  { name: "TensorFlow", icon: "TF" },
  { name: "D3.js", icon: "D3" },
  { name: "Next.js", icon: "N" },
  { name: "Pandas", icon: "🐼" },
  { name: "Node.js", icon: "⬢" },
];

export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(0, 70%, 25%) 0%, hsl(0, 85%, 45%) 40%, hsl(15, 80%, 45%) 70%, hsl(0, 50%, 20%) 100%)",
      }}
    >
      {/* Top red line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/50" />
      
      {/* Hero Portrait - Centered */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          src={heroImage}
          alt="Creative portrait"
          className="h-full w-auto max-w-none object-cover opacity-90"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex flex-col">
        {/* Top content */}
        <div className="flex-1 flex items-start pt-32">
          <div className="flex justify-between w-full">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-xs"
            >
              <p className="text-foreground/90 text-sm leading-relaxed">
                I partner with brands to create digital
                <br />
                experiences that drive conversion and
                <br />
                command attention.
              </p>
            </motion.div>

            {/* Right services list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-right hidden md:block"
            >
              {services.map((service, index) => (
                <p
                  key={service}
                  className={`text-sm ${
                    index === 0 ? "text-foreground" : "text-foreground/60"
                  }`}
                >
                  {service}
                </p>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom - Big name */}
        <div className="pb-8">
          <div className="flex items-end justify-between gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-display text-[12vw] md:text-[10vw] leading-none tracking-tight text-foreground"
            >
              DEVFOLIO<sup className="text-[3vw] align-top">®</sup>
            </motion.h1>

            {/* Small project thumbnail */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="hidden md:block mb-4"
            >
              <div className="w-32 h-20 rounded overflow-hidden border border-foreground/20">
                <img
                  src={projectThumb}
                  alt="Featured project"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Tech Logos Marquee */}
      <div className="absolute bottom-0 left-0 right-0 bg-background/95 py-4 border-t border-border overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {[...techLogos, ...techLogos, ...techLogos].map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <span className="text-xl font-bold">{tech.icon}</span>
              <span className="text-sm font-medium uppercase tracking-wider">{tech.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
