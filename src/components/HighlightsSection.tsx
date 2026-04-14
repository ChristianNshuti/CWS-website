import { Mountain, Droplets, Users, Leaf } from "lucide-react";

const highlights = [
  { icon: Mountain, title: "High Altitude", desc: "Located at 1,600–2,000m in Bwisige, Gicumbi District" },
  { icon: Droplets, title: "Washed Process", desc: "Specialty-grade fully washed coffee processing" },
  { icon: Users, title: "Farmer Partnerships", desc: "Deep relationships with local smallholder farmers" },
  { icon: Leaf, title: "Sustainability", desc: "Committed to quality, community, and the environment" },
];

const HighlightsSection = () => (
  <section className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {highlights.map((h) => (
          <div key={h.title} className="text-center group">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
              <h.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
