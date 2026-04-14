import cherriesImg from "@/assets/coffee-cherries.jpg";
import washingImg from "@/assets/washing-process.jpg";
import dryingImg from "@/assets/drying-beds.jpg";
import farmersImg from "@/assets/farmers.jpg";
import landscapeImg from "@/assets/landscape.jpg";
import heroImg from "@/assets/hero-coffee.jpg";

const images = [
  { src: cherriesImg, alt: "Ripe coffee cherries on the branch", span: "col-span-1 row-span-1" },
  { src: heroImg, alt: "Bwisige washing station operations", span: "col-span-2 row-span-1" },
  { src: dryingImg, alt: "Coffee drying on raised African beds", span: "col-span-1 row-span-1" },
  { src: farmersImg, alt: "Local farmers sorting cherries", span: "col-span-1 row-span-1" },
  { src: landscapeImg, alt: "Gicumbi District highlands", span: "col-span-1 row-span-1" },
  { src: washingImg, alt: "Coffee washing and pulping process", span: "col-span-1 row-span-1" },
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
