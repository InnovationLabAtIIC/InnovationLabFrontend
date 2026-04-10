export default function Marquee() {
  return (
    <div className="marquee-container py-10 overflow-hidden whitespace-nowrap bg-white ">
      <div className="animate-marquee text-[120px] font-black text-gray-100 uppercase">
        INNOVATION LAB INNOVATION LAB INNOVATION LAB INNOVATION LAB &nbsp;
      </div>
      <div className="animate-marquee text-[120px] font-black text-gray-100 uppercase">
        INNOVATION LAB INNOVATION LAB INNOVATION LAB INNOVATION LAB &nbsp;
      </div>
    </div>
  );
}