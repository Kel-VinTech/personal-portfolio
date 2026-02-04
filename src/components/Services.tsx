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
    <section id="services" className="py-15 md:py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Services Header */}
        <div className="grid md:grid-cols-12 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="md:col-span-3"
          >
            <span className="text-primary text-base md:text-lg font-bold uppercase tracking-widest ">
              • SERVICES
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
                FROM CONCEPT TO CODE, I OFFER END-TO-END{" "}
              </span>
              <span className="text-muted-foreground">
                SERVICES THAT TRANSFORM IDEAS INTO HIGH-PERFORMING DIGITAL PRODUCTS. 
                WHETHER IT'S BUILDING INTERFACES OR ANALYZING DATA, I DELIVER SOLUTIONS 
                THAT DRIVE RESULTS.
              </span>
            </h2>
          </motion.div>
        </div>

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
                <h3 className="font-display text-3xl md:text-4xl lg:text-6xl font-black tracking-wide text-foreground group-hover:text-primary transition-colors text-left">
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
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <div className="md:col-span-7">
                    <div className="flex flex-wrap gap-3">
                      {service.features.map((feature) => (
                        <span
                          key={feature}
                          className="text-primary text-base flex items-center gap-1"
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
