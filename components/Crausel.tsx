const images = [1, 2, 3, 4, 5, 6];

export default function Carousel() {
  return (
    <div className="flex flex-col gap-5 mt-10">
      <div className="flex overflow-x-auto gap-4 px-5 no-scrollbar scroll-smooth">
        {images.map((id) => (
          <div key={id} className="min-w-[300px] h-[400px] rounded-md overflow-hidden flex-shrink-0">
            <img src={`https://picsum.photos/seed/${id}/400/600`} className="w-full h-full object-cover" alt="Lab project" />
          </div>
        ))}
      </div>
    </div>
  );
}