import beansImg from "@/assets/coffee-beans.jpg";

const specs = [
  { label: "Origin", value: "Bwisige, Gicumbi District, Rwanda" },
  { label: "Altitude", value: "1,600 – 2,000 m.a.s.l." },
  { label: "Varieties", value: "Bourbon" },
  { label: "Processing", value: "Fully Washed" },
  { label: "Harvest Season", value: "March – June" },
  { label: "Flavor Profile", value: "Clean body, bright acidity, fruity and floral notes with a sweet, lingering finish" },
];

const CoffeeSpecsSection = () => (
  <section id="coffee" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <img
            src={beansImg}
            alt="Specialty coffee beans from Bwisige"
            className="rounded-lg shadow-xl w-full object-cover aspect-square"
            loading="lazy"
            width={800}
            height={800}
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">Coffee Profile</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-8">
            Specifications
          </h2>
          <div className="space-y-4">
            {specs.map((s) => (
              <div key={s.label} className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-4 py-3 border-b border-border last:border-0">
                <span className="text-sm font-semibold text-foreground min-w-[140px]">{s.label}</span>
                <span className="text-sm text-muted-foreground">{s.value}</span>
              </div>
            ))}
          </div>
          <a
            href="#contact"
            className="inline-block mt-8 px-6 py-3 bg-accent text-accent-foreground rounded-md font-sans font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Request Coffee Profile (PDF)
          </a>
        </div>
      </div>
    </div>
  </section>
);

export default CoffeeSpecsSection;
