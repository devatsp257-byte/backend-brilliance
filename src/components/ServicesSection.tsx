import { motion } from "framer-motion";
import { Server, Database, Code, Layers, Workflow } from "lucide-react";

const services = [
  { title: "Backend API Development", desc: "Robust Spring Boot APIs built for scale", icon: Server },
  { title: "REST API Design & Integration", desc: "Clean, well-documented RESTful endpoints", icon: Workflow },
  { title: "Database Design & Optimization", desc: "Efficient MySQL schemas and query tuning", icon: Database },
  { title: "Java Application Development", desc: "Production-grade Java applications", icon: Code },
  { title: "Clean Architecture", desc: "Maintainable layered architecture implementation", icon: Layers },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">What I can help you with</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 text-center"
            >
              <s.icon className="text-primary mx-auto mb-4" size={28} />
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
