import img1 from "../../assets/WhatsApp Image 2026-04-16 at 10.32.03.jpeg";
import img2 from "../../assets/WhatsApp Image 2026-04-16 at 10.36.55.jpeg";
import img3 from "../../assets/WhatsApp Image 2026-04-16 at 10.48.23.jpeg";
import img4 from "../../assets/WhatsApp Image 2026-04-16 at 10.32.41.jpeg";
import img5 from "../../assets/img5.png";
import img6 from "../../assets/img6.png";

const images = [
  { src: img1, alt: "Ripe coffee cherries on the branch", span: "col-span-1 row-span-1" },
  { src: img2, alt: "Bwisige washing station operations", span: "col-span-2 row-span-1" },
  { src: img3, alt: "Coffee drying on raised African beds", span: "col-span-1 row-span-1" },
  { src: img4, alt: "Local farmers sorting cherries", span: "col-span-1 row-span-1" },
  { src: img5, alt: "Gicumbi District highlands", span: "col-span-1 row-span-1" },
  { src: img6, alt: "Coffee washing and pulping process", span: "col-span-1 row-span-1" },
];

const GallerySection = () => (
  <section id="gallery" className="py-24 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-3">Gallery</p>
        <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground">
          A Glimpse of Our World
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            className={`overflow-hidden rounded-lg group ${i === 1 ? "sm:col-span-2" : ""}`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              loading="lazy"
              width={800}
              height={600}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
