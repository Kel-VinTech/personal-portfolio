import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="bg-background py-24" ref={ref}>
      <div className="container mx-auto px-6">
        {/* About content */}
        <div className="grid md:grid-cols-12 gap-12">
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
      </div>
    </section>
  );
};
