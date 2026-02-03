import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";

const projects = [
  {
    title: "DATALYTICS",
    category: "DEVELOPMENT",
    year: "//2025",
    image: project1,
    link: "https://datalytics.example.com",
    tools: ["React", "TypeScript", "D3.js", "Python", "TensorFlow"],
  },
  {
    title: "VIZFLOW",
    category: "DATA SCIENCE",
    year: "//2024",
    image: project2,
    link: "https://vizflow.example.com",
    tools: ["Next.js", "Pandas", "Plotly", "PostgreSQL", "FastAPI"],
  },
  {
    title: "ADMETRICS",
    category: "ANALYTICS",
    year: "//2023",
    image: project3,
    link: "https://admetrics.example.com",
    tools: ["Vue.js", "Scikit-learn", "Tableau", "Node.js", "MongoDB"],
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 bg-background" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide text-foreground">
              LATEST
              <br />
              PROJECTS
            </h2>
          </div>
          <p className="text-muted-foreground text-sm max-w-xs text-right">
            A thoughtfully curated portfolio demonstrating my
            commitment to simplicity and purposeful design.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
              className="group cursor-pointer block"
            >
              <div className="relative aspect-[16/7] overflow-hidden rounded-sm">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.6 }}
                />
                
                {/* Overlay with tools on hover */}
                <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-4">
                  <h3 className="font-display text-4xl md:text-6xl lg:text-7xl text-foreground tracking-wider">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap justify-center gap-2 max-w-md px-4">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 text-xs font-medium bg-foreground text-background">
                    {project.category}
                  </span>
                </div>

                {/* Year */}
                <div className="absolute top-4 right-4">
                  <span className="text-xs text-foreground/80 font-mono">
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
