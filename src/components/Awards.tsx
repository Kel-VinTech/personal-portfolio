import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import awardsImage from "@/assets/awards-portrait.jpg";

const awards = [
  {
    title: "FRONTEND EXCELLENCE AWARD",
    description: "Recognized for delivering intuitive, innovative web applications.",
    year: "//2025",
  },
  {
    title: "BEST DATA VISUALIZATION PROJECT",
    description: "Awarded for a sleek, simple analytics app with exceptional user experience.",
    year: "//2024",
    highlighted: true,
  },
  {
    title: "OUTSTANDING DASHBOARD DESIGN",
    description: "Recognized for transforming complex financial data into clear, actionable dashboards.",
    year: "//2023",
  },
  {
    title: "RISING TALENT IN TECH",
    description: "Acknowledged as an emerging leader in frontend development and data science.",
    year: "//2022",
  },
];

export const Awards = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-background" ref={ref}>
      {/* Portrait Image */}
      <div className="w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden">
        <motion.img
          initial={{ scale: 1.1 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1.2 }}
          src={awardsImage}
          alt="Awards portrait"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Awards Section */}
      <div className="container mx-auto px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide text-foreground">
            WINNING
            <br />
            AWARDS
          </h2>
          <p className="text-muted-foreground text-sm max-w-xs text-right">
            Discover my range of achievements designed to elevate
            your brand to the next level.
          </p>
        </motion.div>

        {/* Awards List */}
        <div className="space-y-0">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className={`py-6 border-t border-border flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                award.highlighted ? "bg-card -mx-6 px-6" : ""
              }`}
            >
              <div>
                <h3 className="font-display text-xl md:text-2xl tracking-wide text-foreground mb-1">
                  {award.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {award.description}
                </p>
              </div>
              <span className="text-muted-foreground text-sm font-mono whitespace-nowrap">
                {award.year}
              </span>
            </motion.div>
          ))}
          <div className="border-t border-border" />
        </div>
      </div>
    </section>
  );
};
