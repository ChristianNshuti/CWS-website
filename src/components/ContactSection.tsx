import { useState } from "react";
import { MapPin, Phone, Mail, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import { sendContactEmail, type ContactFormData } from "@/lib/email-service";

const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100, "Name must be less than 100 characters"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().max(100, "Company name must be less than 100 characters").optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000, "Message must be less than 1000 characters")
});

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema)
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Send email using EmailJS or similar service
      const response = await sendContactEmail(data);
      
      if (response.success) {
        setSubmitted(true);
        toast({
          title: "Message Sent Successfully!",
          description: "We'll respond to your inquiry within 48 hours.",
        });
        reset();
      } else {
        throw new Error(response.message || "Failed to send message");
      }
    } catch (error) {
      toast({
        title: "Error Sending Message",
        description: error instanceof Error ? error.message : "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                <p className="text-muted-foreground mb-6">We've received your inquiry and will respond within 48 hours.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2 bg-primary text-primary-foreground rounded-md font-sans font-medium text-sm hover:bg-earth-green-light transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Name *</label>
                  <input
                    type="text"
                    {...register('name')}
                    className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Email *</label>
                  <input
                    type="email"
                    {...register('email')}
                    className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Company</label>
                  <input
                    type="text"
                    {...register('company')}
                    className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition"
                    placeholder="Your company name (optional)"
                  />
                  {errors.company && (
                    <p className="text-red-500 text-xs mt-1">{errors.company.message}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">Message *</label>
                  <textarea
                    {...register('message')}
                    rows={5}
                    className="w-full px-4 py-3 rounded-md border border-border bg-card text-foreground text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition resize-none"
                    placeholder="Tell us about your coffee sourcing needs..."
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md font-sans font-medium text-sm hover:bg-earth-green-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    'Send Inquiry'
                  )}
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
                <p className="text-sm text-muted-foreground">+250788418601</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-semibold text-foreground text-sm mb-1">Email</h4>
                <p className="text-sm text-muted-foreground">tmqualityproduction@gmail.com</p>
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
