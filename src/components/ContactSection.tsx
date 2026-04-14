import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">Get in Touch</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contact Us
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Interested in sourcing premium Rwandan washed coffee? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            {submitted ? (
              <div className="bg-primary/10 rounded-lg p-8 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We've received your inquiry and will respond within 48 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Company</label>
                  <input
                    type="text"
                    maxLength={100}
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message *</label>
                  <textarea
                    required
                    maxLength={1000}
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-sans font-medium text-sm hover:bg-earth-green-light transition-colors"
                >
                  Send Inquiry
                </button>
              </form>
            )}
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">Location</h4>
                <p className="text-sm text-muted-foreground">Bwisige, Gicumbi District, Northern Province, Rwanda</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Phone className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">Phone</h4>
                <p className="text-sm text-muted-foreground">+250 788 000 000</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">Email</h4>
                <p className="text-sm text-muted-foreground">info@bwisigecoffee.rw</p>
              </div>
            </div>
            <div className="mt-8 p-6 rounded-lg bg-card border border-border">
              <h4 className="font-serif font-semibold text-foreground mb-2">Business Hours</h4>
              <p className="text-sm text-muted-foreground">Monday – Friday: 8:00 AM – 5:00 PM (CAT)</p>
              <p className="text-sm text-muted-foreground">Saturday: 8:00 AM – 12:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
