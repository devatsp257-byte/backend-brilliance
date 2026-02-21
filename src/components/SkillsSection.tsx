import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    skills: ["Java", "SQL"],
  },
  {
    title: "Frameworks",
    skills: ["Spring Boot", "Spring MVC", "Hibernate / JPA"],
  },
  {
    title: "Database",
    skills: ["MySQL"],
  },
  {
    title: "Tools",
    skills: ["Maven", "Postman", "IntelliJ IDEA"],
  },
  {
    title: "Concepts",
    skills: ["OOP", "Data Structures", "Multithreading", "REST APIs", "Layered Architecture"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Technologies I work with</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <h3 className="text-sm font-mono text-primary mb-4 uppercase tracking-wider">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((s) => (
                  <span
                    key={s}
                    className="px-3 py-1.5 text-sm rounded-md bg-secondary text-secondary-foreground border border-border/30"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
