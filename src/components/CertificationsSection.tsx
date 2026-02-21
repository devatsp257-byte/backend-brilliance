import { motion } from "framer-motion";
import { Award, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

const certs = [
  { name: "Oracle Cloud Infrastructure 2025 Certified Data Science Professional", year: "2025", pdf: "/certificates/oracle-genai.pdf" },
  { name: "Oracle OCI AI Foundations Associate", year: "2025", pdf: "/certificates/oracle-ai-foundations.pdf" },
  { name: "NPTEL – Python for Data Science", year: "2025", pdf: "/certificates/nptel-python.pdf" },
  { name: "TCS iON – Artificial Intelligence", year: "2025", pdf: "/certificates/tcs-ai.pdf" },
  { name: "NASSCOM – Acquiring Data ", year: "2024", pdf: "/certificates/acquiring.pdf" },
];

const CertificationsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  const [selectedCert, setSelectedCert] = useState<string | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (showAll) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % certs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [showAll]);

  const getVisibleCerts = () => {
    if (showAll) return certs;
    return [
      certs[currentIndex],
      certs[(currentIndex + 1) % certs.length],
      certs[(currentIndex + 2) % certs.length],
    ];
  };

  return (
    <>
      <section ref={ref} id="certifications" className="section-padding relative overflow-hidden">
        <div className="container mx-auto max-w-5xl">
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              <span className="gradient-text">Certifications</span>
            </h2>
            <p className="text-muted-foreground">Professional achievements</p>
          </motion.div>

          {/* Cards Grid */}
          <div className={`grid gap-6 px-4 ${showAll ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1 md:grid-cols-3"}`}>
            {getVisibleCerts().map((cert, idx) => (
              <motion.div
                key={`${currentIndex}-${idx}`}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: isInView ? idx * 0.15 : 0,
                }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="glass-card-hover p-6 group cursor-pointer"
                onClick={() => setSelectedCert(cert.pdf)}
              >
                <Award className="text-primary mb-3 group-hover:text-accent transition-colors duration-300" size={24} />
                <h3 className="font-semibold text-sm mb-1 leading-snug group-hover:text-primary transition-colors duration-300">
                  {cert.name}
                </h3>
                <p className="text-xs text-primary font-mono mb-3">{cert.year}</p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedCert(cert.pdf);
                  }}
                  className="text-xs bg-primary/20 text-primary px-3 py-1 rounded hover:bg-primary/30 transition"
                >
                  View PDF
                </button>
              </motion.div>
            ))}
          </div>

          {/* Indicators */}
          {!showAll && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex justify-center gap-2 mt-8"
            >
              {certs.map((_, i) => (
                <motion.button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === currentIndex ? "bg-primary w-8" : "bg-primary/30 w-2"
                  }`}
                  whileHover={{ scale: 1.3 }}
                />
              ))}
            </motion.div>
          )}

          {/* Show All Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex justify-center mt-8"
          >
            <motion.button
              onClick={() => setShowAll(!showAll)}
              className="px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {showAll ? "Show Less" : "Show All Certifications"}
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* PDF Modal */}
      {selectedCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedCert(null)}
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white dark:bg-slate-900 rounded-lg w-full max-w-4xl h-[90vh] flex flex-col"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold text-lg">Certificate</h3>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-2 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition"
              >
                <X size={24} />
              </button>
            </div>
            <iframe
              src={selectedCert}
              className="flex-1 w-full"
              title="Certificate PDF"
            />
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default CertificationsSection;
