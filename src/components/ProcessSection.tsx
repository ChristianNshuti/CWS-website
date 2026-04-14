import cherriesImg from "@/assets/coffee-cherries.jpg";
import washingImg from "@/assets/washing-process.jpg";
import dryingImg from "@/assets/drying-beds.jpg";

const steps = [
  { num: "01", title: "Cherry Collection", desc: "Ripe, hand-picked cherries are delivered by local farmers to our washing station during peak harvest. We accept only the highest-quality, fully mature red cherries.", img: cherriesImg },
  { num: "02", title: "Sorting & Floating", desc: "Cherries are sorted by hand to remove any defects, then floated in water to separate under-ripe and damaged fruit, ensuring only the densest cherries continue.", img: null },
  { num: "03", title: "Pulping", desc: "Selected cherries are mechanically pulped to remove the outer skin and fruit, exposing the parchment-covered bean inside. This step is done within hours of harvest.", img: washingImg },
  { num: "04", title: "Fermentation", desc: "Pulped beans are placed in fermentation tanks for 12–36 hours. This controlled process breaks down the remaining mucilage and develops the coffee's clean, complex flavor profile.", img: null },
  { num: "05", title: "Washing", desc: "After fermentation, beans are thoroughly washed in clean water channels to remove all residual mucilage, resulting in the bright, clean cup character that defines Rwandan washed coffees.", img: null },
  { num: "06", title: "Drying on Raised Beds", desc: "Washed parchment coffee is carefully spread on raised African drying beds and turned regularly over 10–15 days until optimal moisture content is achieved.", img: dryingImg },
  { num: "07", title: "Storage & Export Prep", desc: "Dried parchment is rested in climate-controlled storage, then dry-milled, graded, and packed in GrainPro-lined bags, ready for export to discerning buyers worldwide.", img: null },
];

const ProcessSection = () => (
  <section id="process" className="py-24 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">Our Process</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
          From Cherry to Cup
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every step of our washed process is carefully managed to preserve the natural brilliance of Gicumbi's highland-grown coffee.
        </p>
      </div>
      <div className="space-y-12">
        {steps.map((step, i) => (
          <div
            key={step.num}
            className={`flex flex-col ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
          >
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-3">
                <span className="text-3xl font-serif font-bold text-primary/30">{step.num}</span>
                <h3 className="font-serif text-xl font-semibold text-foreground">{step.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
            </div>
            <div className="flex-1 w-full">
              {step.img ? (
                <img
                  src={step.img}
                  alt={step.title}
                  className="rounded-lg shadow-lg w-full object-cover aspect-[3/2]"
                  loading="lazy"
                  width={800}
                  height={533}
                />
              ) : (
                <div className="w-full aspect-[3/2] rounded-lg bg-primary/5 flex items-center justify-center">
                  <span className="text-6xl font-serif font-bold text-primary/10">{step.num}</span>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
