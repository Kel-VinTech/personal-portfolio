import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Plus, X } from "lucide-react";

const services = [
  {
    id: 1,
    title: "FRONTEND DEVELOPMENT",
    description:
      "Building high-performance web applications with React, TypeScript, and modern frameworks that deliver exceptional user experiences.",
    features: [
      "React & TypeScript",
      "Performance optimization",
      "Component systems",
      "Responsive design",
      "Animation & motion",
    ],
  },
  {
    id: 2,
    title: "DATA SCIENCE",
    description:
      "Transforming complex data into actionable insights through advanced analytics, machine learning, and compelling visualizations.",
    features: [
      "Data analysis",
      "Machine learning",
      "Data visualization",
      "Predictive modeling",
      "Statistical analysis",
    ],
  },
  {
    id: 3,
    title: "AD TARGETING",
    description:
      "Creating data-driven advertising campaigns with precise audience targeting that maximize ROI and drive conversions.",
    features: [
      "Audience segmentation",
      "Campaign optimization",
      "A/B testing",
      "Conversion tracking",
      "ROI analysis",
    ],
  },
  {
    id: 4,
    title: "SOCIAL MEDIA",
    description:
      "Strategic social media management that builds brand presence, engages audiences, and drives measurable growth.",
    features: [
      "Content strategy",
      "Community management",
      "Analytics & reporting",
      "Influencer partnerships",
      "Growth optimization",
    ],
  },
];

export const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openService, setOpenService] = useState<number | null>(1);

  return (
    <section id="services" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Services Accordion */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="border-t border-border"
            >
              <button
                onClick={() =>
                  setOpenService(openService === service.id ? null : service.id)
                }
                className="w-full py-8 flex items-center justify-between group"
              >
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl tracking-wide text-foreground group-hover:text-primary transition-colors text-left">
                  {service.title}
                </h3>
                <div className="w-10 h-10 flex items-center justify-center">
                  {openService === service.id ? (
                    <X className="w-6 h-6 text-foreground" />
                  ) : (
                    <Plus className="w-6 h-6 text-foreground" />
                  )}
                </div>
              </button>

              {/* Expanded content */}
              <motion.div
                initial={false}
                animate={{
                  height: openService === service.id ? "auto" : 0,
                  opacity: openService === service.id ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pb-8 grid md:grid-cols-12 gap-8">
                  <div className="md:col-span-5">
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="md:col-span-7">
                    <div className="flex flex-wrap gap-3">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-primary text-sm flex items-center gap-1"
                        >
                          <span>+</span> {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};
