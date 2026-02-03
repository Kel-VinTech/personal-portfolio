import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Left side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-5xl md:text-6xl tracking-wide text-foreground mb-8">
              LET'S TALK
            </h2>

            <p className="text-muted-foreground text-sm uppercase tracking-wider mb-8">
              HAVE AN IDEA IN MIND? LET'S
              <br />
              CONNECT AND EXPLORE HOW I
              <br />
              CAN HELP BRING IT TO LIFE.
            </p>

            {/* Profile */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                <span className="text-sm font-medium text-foreground">JD</span>
              </div>
              <div>
                <p className="text-sm font-medium text-primary">JOHN DOE</p>
                <p className="text-xs text-muted-foreground">
                  Frontend Dev & Data Scientist
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <input
                type="text"
                placeholder="Your Name*"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-0 py-4 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <input
                type="email"
                placeholder="Your Email*"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-0 py-4 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                required
              />
            </div>

            <div>
              <textarea
                placeholder="Your Message*"
                rows={4}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-0 py-4 bg-transparent border-b border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              className="px-6 py-3 text-sm font-medium border border-foreground text-foreground rounded-full hover:bg-foreground hover:text-background transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              • Contact
            </motion.button>
          </motion.form>
        </div>

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-24 overflow-hidden"
        >
          <div className="flex whitespace-nowrap animate-marquee">
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center">
                {["DREAM", "DELIVERY", "CREATE", "INSPIRE", "DESIGN"].map(
                  (word, index) => (
                    <span
                      key={`${setIndex}-${index}`}
                      className="font-display text-3xl md:text-4xl tracking-wider mx-4 flex items-center gap-4"
                    >
                      {word}
                      <span className="text-primary text-2xl">✦</span>
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
          <div className="flex whitespace-nowrap animate-marquee mt-2" style={{ animationDirection: "reverse" }}>
            {[...Array(2)].map((_, setIndex) => (
              <div key={setIndex} className="flex items-center">
                {["DELIVERY", "CREATE", "INSPIRE", "DESIGN", "DREAM"].map(
                  (word, index) => (
                    <span
                      key={`${setIndex}-${index}`}
                      className="font-display text-3xl md:text-4xl tracking-wider mx-4 flex items-center gap-4"
                    >
                      {word}
                      <span className="text-primary text-2xl">✦</span>
                    </span>
                  )
                )}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Email */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground text-sm mb-2">
            Reach out if you're ready to make something amazing together.
          </p>
          <p className="font-display text-2xl md:text-3xl tracking-wider text-foreground">
            HELLO@DEVFOLIO.COM
          </p>
        </div>
      </div>
    </section>
  );
};
