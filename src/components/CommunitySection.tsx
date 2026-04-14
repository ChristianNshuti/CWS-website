import landscapeImg from "@/assets/landscape.jpg";

const stats = [
  { value: "500+", label: "Partner Farmers" },
  { value: "100%", label: "Cherry Traceability" },
  { value: "15+", label: "Years of Operation" },
  { value: "Top 5%", label: "Specialty Grade" },
];

const CommunitySection = () => (
  <section id="community" className="py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">Our Community</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          Farmers & Community
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Our success is inseparable from the dedication of the smallholder farmers who cultivate coffee across Gicumbi's hillsides. We invest in their future through fair pricing, agronomic training, and long-term partnerships.
        </p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <div className="font-serif text-3xl md:text-4xl font-bold text-primary mb-1">{s.value}</div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="relative rounded-xl overflow-hidden shadow-xl">
        <img
          src={landscapeImg}
          alt="The rolling green hills of Gicumbi District, Rwanda"
          className="w-full object-cover aspect-[21/9]"
          loading="lazy"
          width={1200}
          height={800}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-coffee-dark/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-cream mb-2">
            Building a Sustainable Future Together
          </h3>
          <p className="text-warm-beige/90 max-w-xl text-sm md:text-base leading-relaxed">
            Through training programs, premium payments, and community investment, we ensure that every harvest strengthens both the quality of our coffee and the livelihoods of those who grow it.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default CommunitySection;
