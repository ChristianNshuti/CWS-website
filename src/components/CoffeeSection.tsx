import { Coffee, Package, Trophy, Leaf } from "lucide-react";

const CoffeeSection = () => {
  const coffeeProducts = [
    {
      id: 1,
      title: "Green Coffee",
      subtitle: "Export ready",
      icon: Coffee,
      description: "We supply fully washed Arabica green coffee prepared to meet international export standards.",
      specifications: [
        { label: "Grades", value: "A1, A2, B" },
        { label: "Screen size", value: "14+ / 15+ / 16+" },
        { label: "Moisture", value: "10–12%" }
      ],
      packaging: [
        "60 kg jute bags",
        "Optional GrainPro lining"
      ],
      availability: "Seasonal, with contracted volumes",
      features: []
    },
    {
      id: 2,
      title: "Specialty & Microlots",
      subtitle: "Premium quality",
      icon: Trophy,
      description: "We offer limited microlots with distinct flavor profiles and high cup quality.",
      specifications: [],
      packaging: [],
      availability: "Limited quantities",
      features: [
        "Traceable to farmers and specific lots",
        "Carefully separated and processed",
        "Cupping scores available upon request"
      ],
      profile: {
        title: "Typical profile",
        notes: [
          "Bright acidity",
          "Clean cup",
          "Notes of citrus, red fruits, and floral tones"
        ]
      }
    },
    {
      id: 3,
      title: "Parchment Coffee",
      subtitle: "For custom milling",
      icon: Leaf,
      description: "We supply high-quality parchment coffee for buyers who prefer to handle dry milling.",
      specifications: [],
      packaging: ["Available in bulk quantities"],
      availability: "Year-round (subject to harvest)",
      features: [
        "Fully washed and dried to optimal moisture",
        "Properly stored and handled",
        "Available in bulk quantities"
      ],
      profile: null
    }
  ];

  return (
    <section id="coffee" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">
            Our Products
          </p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            OUR COFFEE
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover our premium Rwandan coffee offerings, from export-ready green beans 
            to specialty microlots with exceptional cup quality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {coffeeProducts.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-foreground">
                      {product.title}
                    </h3>
                    <p className="text-sm text-primary font-medium">{product.subtitle}</p>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                {product.specifications.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground text-sm mb-3">Specifications:</h4>
                    <ul className="space-y-2">
                      {product.specifications.map((spec, index) => (
                        <li key={index} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">{spec.label}:</span>
                          <span className="text-foreground font-medium">{spec.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.packaging.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground text-sm mb-3 flex items-center">
                      <Package className="w-4 h-4 mr-2" />
                      Packaging:
                    </h4>
                    <ul className="space-y-1">
                      {product.packaging.map((item, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          • {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.features.length > 0 && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground text-sm mb-3">Features:</h4>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start text-sm">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {product.profile && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-foreground text-sm mb-3">
                      {product.profile.title}:
                    </h4>
                    <ul className="space-y-1">
                      {product.profile.notes.map((note, index) => (
                        <li key={index} className="text-sm text-muted-foreground">
                          • {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="pt-4 border-t border-border">
                  <p className="text-sm">
                    <span className="text-muted-foreground">Availability:</span>
                    <span className="text-foreground font-medium ml-2">{product.availability}</span>
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <div className="bg-primary/10 rounded-lg p-8 max-w-3xl mx-auto">
            <h3 className="font-serif text-2xl font-semibold text-foreground mb-4">
              Interested in Our Coffee?
            </h3>
            <p className="text-muted-foreground mb-6">
              Contact us to discuss your specific requirements, request samples, 
              or learn more about our current offerings and availability.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-sans font-medium text-sm hover:bg-primary/90 transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeSection;
