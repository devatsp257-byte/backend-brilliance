
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    };

    emailjs
      .send("service_nq28iti", "template_pmxdwhn", templateParams, "UhaDdgiISzdpoN-mW")
      .then(() => {
        toast({ title: "Message sent", description: "Thanks — I will reply soon." });
        setForm({ name: "", email: "", message: "" });
        setIsSending(false);
      })
      .catch(() => {
        toast({ title: "Send failed", description: "Something went wrong. Please try again later." });
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-center">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">Let's work together</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            {[
              { icon: Mail, label: "Email", value: "devakkumarsn@email.com", href: "mailto:devakkumarsn@email.com" },
              { icon: Phone, label: "Phone", value: "+91 8610266479", href: "tel:+918610266479" },
              { icon: MapPin, label: "Location", value: "Tamil Nadu, India", href: "#" },
            ].map(({ icon: Icon, label, value, href }) => (
              <a key={label} href={href} className="glass-card p-5 flex items-center gap-4 group hover:border-primary/30 transition-colors">
                <div className="p-3 rounded-lg bg-primary/10">
                  <Icon size={20} className="text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{label}</p>
                  <p className="font-medium text-sm">{value}</p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="glass-card p-8 space-y-5"
          >
            <input
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border/30 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              disabled={isSending}
              className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity disabled:opacity-60"
            >
              <Send size={16} />
              {isSending ? "Sending..." : "Send Message"}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
