import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const logoPartners = [
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
  "Logoipsum",
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-background py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* About content */}
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              • ABOUT
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="md:col-span-9"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl leading-tight tracking-wide">
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

        {/* Logo Partners Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="overflow-hidden border-t border-border pt-8"
        >
          <div className="flex items-center gap-16 animate-marquee">
            {[...logoPartners, ...logoPartners].map((logo, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-muted-foreground whitespace-nowrap"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="opacity-50"
                >
                  <circle cx="12" cy="12" r="10" />
                </svg>
                <span className="text-sm font-medium">{logo}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
