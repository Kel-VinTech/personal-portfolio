import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUpRight } from "lucide-react";

const services = [
  {
    number: "01",
    title: "Web Development",
    description:
      "Custom React applications built with TypeScript, Next.js, and modern tooling. Responsive, accessible, and blazing fast.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind"],
  },
  {
    number: "02",
    title: "Data Analytics & Visualization",
    description:
      "Turn your data into stories. Interactive dashboards, predictive models, and insights that drive decisions.",
    tags: ["Python", "Pandas", "D3.js", "Tableau"],
  },
  {
    number: "03",
    title: "Performance Marketing",
    description:
      "Data-driven ad campaigns across Google, Meta, and LinkedIn. Precision targeting that maximizes your ROI.",
    tags: ["Google Ads", "Meta Ads", "Analytics", "A/B Testing"],
  },
  {
    number: "04",
    title: "Social Media Strategy",
    description:
      "End-to-end social management: content strategy, community building, influencer partnerships, and growth analytics.",
    tags: ["Content Strategy", "Community", "Growth", "Analytics"],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="text-primary text-sm uppercase tracking-widest font-medium">
              • Services
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
              What I <span className="gradient-text">Do</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-lg">
            A unique blend of technical expertise and marketing savvy to help
            your business grow.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="relative p-8 md:p-10 rounded-3xl card-gradient border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer overflow-hidden">
                {/* Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                  {/* Number */}
                  <span className="font-display text-6xl md:text-7xl font-bold text-border group-hover:text-primary/30 transition-colors duration-300">
                    {service.number}
                  </span>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4 mb-4">
                      <h3 className="font-display text-2xl md:text-3xl font-semibold group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <motion.div
                        className="p-3 rounded-full bg-secondary group-hover:bg-primary transition-colors"
                        whileHover={{ scale: 1.1 }}
                      >
                        <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary-foreground transition-colors" />
                      </motion.div>
                    </div>
                    <p className="text-muted-foreground mb-6 max-w-2xl">
                      {service.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {service.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium bg-secondary text-secondary-foreground rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
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
