import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Banking Management System",
    stack: ["Java", "Spring Boot", "Hibernate/JPA", "MySQL", "REST APIs"],
    description: [
      "Backend banking system managing customer accounts and transactions.",
      "Implemented RESTful APIs for deposit, withdrawal, and transaction history.",
      "Used layered architecture (Controller–Service–Repository).",
      "Optimized SQL queries for performance.",
      "Implemented validation and exception handling.",
    ],
    github: "https://github.com/devakkumar19",
  },
  {
    title: "Student Management System",
    stack: ["Java", "Spring Boot", "MySQL", "JPA/Hibernate"],
    description: [
      "CRUD-based REST API for managing student records.",
      "Integrated MySQL with JPA/Hibernate.",
      "Structured JSON responses.",
      "Tested endpoints using Postman.",
    ],
    github: "https://github.com/devakkumar19",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">What I've been building</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass-card-hover p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>

              <div className="flex flex-wrap gap-2 mb-4">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="text-xs font-mono px-2 py-1 rounded bg-primary/10 text-primary border border-primary/20"
                  >
                    {s}
                  </span>
                ))}
              </div>

              <ul className="space-y-2 text-sm text-muted-foreground flex-1">
                {p.description.map((d, j) => (
                  <li key={j} className="flex gap-2">
                    <span className="text-primary mt-1.5 shrink-0">▹</span>
                    {d}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
