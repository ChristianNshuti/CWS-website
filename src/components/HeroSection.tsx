import heroImg from "../../assets/1st.png"

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <img
      src={heroImg}
      alt="Bwisige Coffee Washing Station in the highlands of Gicumbi, Rwanda"
      className="absolute inset-0 w-full h-full object-cover"
      width={1920}
      height={1080}
    />
    <div className="absolute inset-0 bg-coffee-dark/60" />
    <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
      <p className="text-sm md:text-base uppercase tracking-[0.3em] text-warm-beige mb-4 font-sans font-medium">
        Bwisige, Gicumbi District — Rwanda
      </p>
      <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-cream leading-tight mb-6 text-balance">
        Premium Washed Coffee from the Highlands of Gicumbi, Rwanda
      </h1>
      <p className="text-warm-beige/90 text-base md:text-lg max-w-2xl mx-auto mb-10 font-sans leading-relaxed">
        We produce high-quality specialty washed coffee through meticulous processing and deep partnerships with local farmers at 1,600–2,000m altitude.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <a
          href="#process"
          className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-md font-sans font-medium text-sm hover:bg-earth-green-light transition-colors"
        >
          Explore Our Process
        </a>
        <a
          href="#contact"
          className="inline-block px-8 py-3 border border-cream/40 text-cream rounded-md font-sans font-medium text-sm hover:bg-cream/10 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  </section>
);

export default HeroSection;
