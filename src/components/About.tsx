import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techTools = [
  { name: "React", icon: "⚛️" },
  { name: "TypeScript", icon: "TS" },
  { name: "Python", icon: "🐍" },
  { name: "TensorFlow", icon: "TF" },
  { name: "D3.js", icon: "D3" },
  { name: "Next.js", icon: "▲" },
  { name: "Pandas", icon: "🐼" },
  { name: "Node.js", icon: "⬢" },
  { name: "Tailwind", icon: "🎨" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "Scikit-learn", icon: "SK" },
  { name: "Plotly", icon: "📊" },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-background py-40" ref={ref}>
      <div className="container mx-auto px-6">
        {/* About content */}
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <span className="text-primary text-base md:text-lg font-bold uppercase tracking-widest">
              • ABOUT
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-9"
          >
            <h2 className="font-display text-2xl md:text-4xl lg:text-3xl font-bold leading-tight tracking-wide">
              <span className="text-foreground">
                I'M A FRONTEND ENGINEER & DATA SCIENTIST FOCUSED ON CREATING{" "}
              </span>
              <span className="text-muted-foreground">
                USER-CENTERED DIGITAL PRODUCTS THAT ARE FUNCTIONAL, ACCESSIBLE,
                AND VISUALLY ENGAGING. FROM WEB APPS TO COMPLEX DASHBOARDS, I
                TURN IDEAS INTO INTUITIVE, ENJOYABLE EXPERIENCES.
              </span>
            </h2>
          </motion.div>
        </div>

        {/* Tech Tools Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="overflow-hidden border-t border-border pt-8"
        >
          <div className="flex items-center gap-12 animate-marquee">
            {[...techTools, ...techTools].map((tool, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground whitespace-nowrap"
              >
                <span className="text-xl font-bold opacity-80">{tool.icon}</span>
                <span className="text-base font-black uppercase tracking-wider">{tool.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
