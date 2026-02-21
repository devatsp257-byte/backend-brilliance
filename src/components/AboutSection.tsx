import { motion } from "framer-motion";
import { GraduationCap, User } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Get to know me better</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Profile summary */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <User className="text-primary" size={22} />
              <h3 className="text-xl font-semibold">Who I Am</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              I'm a passionate B.Tech Information Technology student with a strong foundation in OOP, 
              multithreading, collections, SQL optimization, and REST API design. I'm dedicated to 
              backend architecture, clean code principles, and building scalable application systems 
              that solve real-world problems.
            </p>
          </motion.div>

          {/* Education */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="glass-card p-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <GraduationCap className="text-primary" size={22} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="relative pl-6 border-l-2 border-primary/30">
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary" />
              <h4 className="font-semibold mb-1">B.Tech in Information Technology</h4>
              <p className="text-sm text-primary font-mono mb-1">2023 — 2027</p>
              <p className="text-muted-foreground text-sm">Panimalar Engineering College</p>
              <p className="text-muted-foreground text-sm">CGPA: 7.8</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
