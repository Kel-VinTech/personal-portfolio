import { motion } from "framer-motion";
import heroImage from "@/assets/hero-portrait.jpg";
import projectThumb from "@/assets/project-thumb.jpg";

const services = [
  "Frontend Development",
  "Data Science",
  "Ad Targeting",
  "Social Media",
];


export const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden"
      style={{
        background: "linear-gradient(135deg, hsl(0, 70%, 25%) 0%, hsl(0, 85%, 45%) 40%, hsl(15, 80%, 45%) 70%, hsl(0, 50%, 20%) 100%)",
      }}
    >
      {/* Top red line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-primary/50" />
      
      {/* Hero Portrait - Centered */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
        <motion.img
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          src={heroImage}
          alt="Creative portrait"
          className="h-full w-auto max-w-none object-cover opacity-90"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/90" />
      </div>

      <div className="container mx-auto px-6 relative z-10 min-h-screen flex flex-col">
        {/* Top content */}
        <div className="flex-1 flex items-start pt-60">
          <div className="flex justify-between w-full">
            {/* Left text */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="max-w-xs"
            >
              <p className="text-foreground/90 text-xl font-semibold leading-relaxed">
                I partner with brands to create digital
                
                experiences that drive conversion and
              
                command attention.
              </p>
            </motion.div>

            {/* Right services list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-right space-y-3 text-base font-semibold hidden md:block"
            >
              {services.map((service, index) => (
                <p
                  key={service}
                  className={`text-xl ${
                    index === 0 ? "text-foreground" : "text-foreground/60"
                  }`}
                >
                  {service}
                </p>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom - Big name */}
        <div className="pb-8">
          <div className="flex items-end justify-between gap-8">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="font-black leading-none tracking-tight text-foreground text-[clamp(2.5rem,10vw,10rem)]"
            >
              CODELEVEN<sup className="text-[0.35em] align-super">®</sup> 
            </motion.h1>

            {/* Small project thumbnail */}
            {/* <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="hidden md:block mb-4"
            >
              <div className="w-32 h-20 rounded overflow-hidden border border-foreground/20">
                <img
                  src={projectThumb}
                  alt="Featured project"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div> */}


          </div>
        </div>
      </div>

    </section>
  );
};
