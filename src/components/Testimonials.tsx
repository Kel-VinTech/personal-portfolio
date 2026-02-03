import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    title: "A developer who truly understands users.",
    quote:
      "Working with them was a remarkable experience. Their ability to translate user needs into intuitive and clean designs is exceptional. They always think one step ahead and ensure every decision is backed by purpose. Our product became significantly easier to use after their redesign.",
    author: "Sarah Mitchell",
    role: "Product Manager",
    position: "left",
  },
  {
    id: 2,
    title: "Clear communication and flawless execution.",
    quote:
      "From the first meeting, it was clear that they bring clarity and structure to the design process. They delivered beautiful wireframes, prototypes, and a well-organized design system that made our development team's job much easier. Highly recommended!",
    author: "Daniel Lee",
    role: "Lead Developer",
    position: "right",
  },
  {
    id: 3,
    title: "A rare mix of creativity and problem-solving.",
    quote:
      "What impressed me most was their ability to turn complex features into simple, easy-to-understand flows. Their visuals are modern, clean, and perfectly aligned with our brand. They brought life to our dashboard and improved usability across the board.",
    author: "Priya Kumar",
    role: "UX Researcher",
    position: "center",
  },
  {
    id: 4,
    title: "Professional, fast, and extremely reliable.",
    quote:
      "They consistently delivered high-quality work on time. Their attention to detail and commitment to excellence made them an invaluable part of our team.",
    author: "Marcus Chen",
    role: "CTO",
    position: "right",
  },
];

export const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide text-foreground">
            CLIENT
            <br />
            FEEDBACK
          </h2>
        </motion.div>

        {/* Testimonials Grid - Scattered layout */}
        <div className="relative max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`mb-8 ${
                testimonial.position === "left"
                  ? "md:ml-0 md:mr-auto md:max-w-sm"
                  : testimonial.position === "right"
                  ? "md:ml-auto md:mr-0 md:max-w-sm"
                  : "md:mx-auto md:max-w-md"
              }`}
            >
              <div className="p-6 rounded-lg bg-card border border-border">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-3 h-3 fill-primary text-primary"
                    />
                  ))}
                </div>

                {/* Title */}
                <h3 className="font-medium text-foreground mb-3">
                  {testimonial.title}
                </h3>

                {/* Quote */}
                <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                  "{testimonial.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                    <span className="text-sm font-medium text-foreground">
                      {testimonial.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-primary">
                      {testimonial.author}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
