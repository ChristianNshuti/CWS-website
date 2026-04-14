import farmersImg from "@/assets/farmers.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">Our Story</p>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Rooted in Tradition, Driven by Quality
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Nestled in the lush highlands of Bwisige, Gicumbi District, our washing station has been a cornerstone of the local coffee community for years. We are dedicated to producing exceptional washed coffee that reflects the rich terroir of Rwanda's northern province.
            </p>
            <p>
              Our mission is simple: to deliver the finest specialty coffee to the world while uplifting the lives of the farmers who grow it. Every cherry that passes through our station is treated with care and precision, ensuring consistency and excellence in every lot.
            </p>
            <p>
              We believe that great coffee starts with great relationships. By investing in our farmers through training, fair pricing, and long-term partnerships, we create a sustainable cycle of quality that benefits everyone—from the hillside to the cup.
            </p>
          </div>
        </div>
        <div className="relative">
          <img
            src={farmersImg}
            alt="Farmers sorting coffee cherries at Bwisige washing station"
            className="rounded-lg shadow-xl w-full object-cover aspect-[4/3]"
            loading="lazy"
            width={800}
            height={800}
          />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-lg -z-10" />
          <div className="absolute -top-4 -right-4 w-32 h-32 bg-accent/10 rounded-lg -z-10" />
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;
