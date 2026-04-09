type GalleryImage = {
  src: string;
  alt: string;
};

const topRowImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/34010690/pexels-photo-34010690.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Dynamic architectural structure in Malmö",
  },
  {
    src: "https://images.pexels.com/photos/35782401/pexels-photo-35782401.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Modern architectural ceiling with geometric design",
  },
  {
    src: "https://images.pexels.com/photos/31592973/pexels-photo-31592973.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Black and white glass architecture",
  },
  {
    src: "https://images.pexels.com/photos/18515256/pexels-photo-18515256.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Neoclassical columns at sunset",
  },
  {
    src: "https://images.pexels.com/photos/32058291/pexels-photo-32058291.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Ornate neo-classical architectural corner",
  },
  {
    src: "https://images.pexels.com/photos/5458971/pexels-photo-5458971.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Modern futuristic building in Valencia",
  },
];

const bottomRowImages: GalleryImage[] = [
  {
    src: "https://images.pexels.com/photos/32695405/pexels-photo-32695405.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Bright modern interior with large windows",
  },
  {
    src: "https://images.pexels.com/photos/32473245/pexels-photo-32473245.png?auto=compress&cs=tinysrgb&w=800",
    alt: "Modern interior with minimalist design",
  },
  {
    src: "https://images.pexels.com/photos/9209432/pexels-photo-9209432.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "House interior with a green door",
  },
  {
    src: "https://images.pexels.com/photos/34689686/pexels-photo-34689686.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Rustic interior with wooden walls and lights",
  },
  {
    src: "https://images.pexels.com/photos/36464518/pexels-photo-36464518.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Modern stylish interior with unique design",
  },
  {
    src: "https://images.pexels.com/photos/33685860/pexels-photo-33685860.jpeg?auto=compress&cs=tinysrgb&w=800",
    alt: "Modern luxury interior with marble accents",
  },
];

function ImageRow({ images }: { images: GalleryImage[] }) {
  return (
    <div className="flex w-max gap-4 md:gap-6 overflow-visible py-2">
      {images.map((image) => (
        <div
          key={image.src}
          className="h-[32vw] min-h-64 max-h-120 w-[28vw] min-w-[18rem] max-w-[24rem] shrink-0 overflow-hidden rounded-2xl bg-neutral-100"
        >
          <img
            src={image.src}
            className="h-full w-full object-cover"
            alt={image.alt}
          />
        </div>
      ))}
    </div>
  );
}

export default function Carousel() {
  return (
    <div className="relative left-1/2 w-[120vw] -translate-x-1/2 overflow-hidden max-w-none">
      <div className="flex flex-col gap-6 md:gap-8">
        <ImageRow images={topRowImages} />
        <ImageRow images={bottomRowImages} />
      </div>
    </div>
  );
}