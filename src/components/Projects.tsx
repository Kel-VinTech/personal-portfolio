import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Analytics Dashboard",
    category: "Data Visualization",
    description: "Real-time analytics platform processing 1M+ daily events with predictive insights.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "D3.js", "Python"],
  },
  {
    title: "SaaS Marketing Platform",
    category: "Web Development",
    description: "Full-stack marketing automation tool with advanced audience segmentation.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    tags: ["Next.js", "TypeScript", "PostgreSQL"],
  },
  {
    title: "Social Growth Campaign",
    category: "Social Media",
    description: "Grew client's Instagram from 5K to 100K followers with 8% engagement rate.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
    tags: ["Strategy", "Content", "Analytics"],
  },
  {
    title: "Performance Ad Suite",
    category: "Ad Targeting",
    description: "Multi-platform ad campaign generating 400% ROAS for e-commerce brand.",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80",
    tags: ["Meta Ads", "Google Ads", "CRO"],
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary/20 to-transparent" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm uppercase tracking-widest font-medium">
            • Projects
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-3xl overflow-hidden card-gradient border border-border hover:border-primary/50 transition-all duration-500">
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  
                  {/* Category Badge */}
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 text-xs font-medium bg-primary text-primary-foreground rounded-full">
                      {project.category}
                    </span>
                  </div>

                  {/* External Link */}
                  <motion.div
                    className="absolute top-6 right-6 p-3 rounded-full bg-foreground/10 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    whileHover={{ scale: 1.1 }}
                  >
                    <ExternalLink className="w-5 h-5 text-foreground" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <h3 className="font-display text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <motion.a
            href="#"
            className="inline-flex items-center gap-2 px-8 py-4 font-medium bg-secondary text-secondary-foreground rounded-full hover:bg-secondary/80 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View All Projects
            <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};
