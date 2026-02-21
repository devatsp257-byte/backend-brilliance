import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center section-padding pt-32 overflow-hidden">
      {/* Animated bg grid */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
            "linear-gradient(hsl(199 100% 48% / 0.05) 1px, transparent 1px), linear-gradient(90deg, hsl(199 100% 48% / 0.05) 1px, transparent 1px)",
            backgroundSize: "60px 60px"
          }} />

      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 container mx-auto text-center">
        {/* Profile image */}
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, type: "spring" }}
          className="mx-auto mb-8 w-36 h-36 rounded-full overflow-hidden border-2 border-primary/40 animate-pulse-glow">

          <img alt="Devakkumar S N" className="w-full h-full object-cover" src="/lovable-uploads/c7687c73-156b-40b3-afe0-4075e5dbe63c.png" />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-mono text-sm text-primary mb-4 tracking-widest uppercase">

          Hello World, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-5xl md:text-7xl font-black mb-4">

          Devakkumar{" "}
          <span className="gradient-text">S N</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-xl text-muted-foreground mb-3 font-medium">

          Aspiring Java Backend Developer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">

          Building Scalable, Secure, and Production-Ready Backend Systems with Java &amp; Spring Boot.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4 mb-12">

          <a
            href="#projects"
            className="px-8 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 transition-opacity">

            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-lg border border-primary/40 text-foreground hover:bg-primary/10 transition-colors">

            Contact Me
          </a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="flex justify-center gap-5">

          {[
          { icon: Github, href: "https://github.com/devakkumar19" },
          { icon: Linkedin, href: "#" },
          { icon: Mail, href: "mailto:devakkumarsn@email.com" }].
          map(({ icon: Icon, href }, i) =>
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full border border-border/40 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300">

              <Icon size={20} />
            </a>
          )}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2">

          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>);

};

export default HeroSection;