const Footer = () => (
  <footer className="py-12 bg-coffee-dark text-warm-beige/70">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="font-serif text-lg font-bold text-cream">
            Bwisige <span className="text-earth-green-light">Coffee</span>
          </span>
          <p className="text-sm mt-1">Premium washed coffee from Gicumbi, Rwanda</p>
        </div>
        <div className="flex gap-6 text-sm">
          <a href="#about" className="hover:text-cream transition-colors">About</a>
          <a href="#process" className="hover:text-cream transition-colors">Process</a>
          <a href="#coffee" className="hover:text-cream transition-colors">Coffee</a>
          <a href="#contact" className="hover:text-cream transition-colors">Contact</a>
        </div>
      </div>
      <div className="border-t border-warm-beige/10 mt-8 pt-6 text-center text-xs">
        © {new Date().getFullYear()} Bwisige Coffee Washing Station. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
