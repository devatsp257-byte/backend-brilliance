import { motion } from "framer-motion";
import { Github, Code2, Terminal } from "lucide-react";

const profiles = [
  { name: "GitHub", username: "devakkumar19", href: "https://github.com/devakkumar19", icon: Github },
  { name: "LeetCode", username: "tJTsLRO86g", href: "https://leetcode.com/tJTsLRO86g", icon: Code2 },
  { name: "HackerRank", username: "devakkumarsn", href: "https://hackerrank.com/devakkumarsn", icon: Terminal },
];

const CodingProfilesSection = () => {
  return (
    <section className="section-padding pt-0">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Coding <span className="gradient-text">Profiles</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Where I practice & contribute</p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {profiles.map((p, i) => (
            <motion.a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-6 flex flex-col items-center gap-3 min-w-[160px]"
            >
              <p.icon size={28} className="text-primary" />
              <span className="font-semibold text-sm">{p.name}</span>
              <span className="text-xs text-muted-foreground font-mono">@{p.username}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;
