import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certs = [
  { name: "Oracle OCI Generative AI Certified Professional", year: "2025" },
  { name: "Oracle OCI AI Foundations Associate", year: "2025" },
  { name: "NPTEL – Python for Data Science", year: "2025" },
  { name: "TCS iON – Artificial Intelligence", year: "2025" },
  { name: "NASSCOM – Acquiring Data & Cyber Security", year: "2024" },
];

const CertificationsSection = () => {
  return (
    <section id="certifications" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Professional achievements</p>
        </motion.div>

        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide snap-x">
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 min-w-[280px] snap-start flex-shrink-0"
            >
              <Award className="text-primary mb-3" size={24} />
              <h3 className="font-semibold text-sm mb-1 leading-snug">{c.name}</h3>
              <p className="text-xs text-primary font-mono">{c.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
