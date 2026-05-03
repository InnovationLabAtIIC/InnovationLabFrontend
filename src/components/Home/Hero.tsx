import { useMemo } from "react";
import Carousel from "../Crausel";
import Button from "../primitives/Button";
import { GridWithPlus } from "./GridWithPlus";
import Marquee from "react-fast-marquee";

export default function Hero() {
  const rows = 8;
  const cols = 24;

  const gridColors = useMemo(() => {
    return Array.from({ length: rows * cols }, () => {});
  }, []);

  return (
    <>
      <div className="w-full h-auto relative overflow-hidden">
        <div
          className="grid w-full h-full overflow-hidden"
          style={{
            gridTemplateColumns: `repeat(${cols}, 1fr)`,
            gridTemplateRows: `repeat(${rows}, 1fr)`,
          }}
        >
          {gridColors.map((color, i) => (
            <div
              key={i}
              className="w-full h-full aspect-square bg-white border border-gray-100 hover:bg-gray-50 duration-10"
            />
          ))}
        </div>

        <div className="w-full h-full absolute top-0 flex flex-col">
          <div>
            <h1 className="text-[11rem] font-bold -mt-12">
              INN<span className="text-cyan-400">O</span>VATI
              <span className="text-cyan-400">O</span>N LABS
            </h1>
          </div>

          <div className="mx-3">
            <h2 className="text-md max-w-2xl text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h2>
          </div>

          <div className="mx-3 flex flex-row gap-5 mt-10">
            <Button>Explore the Lab</Button>
            <Button variant="outline">VIEW EVENTS</Button>
          </div>
        </div>
      </div>

      <Carousel />

      <div className="line-bg w-full md:h-16 h-6"></div>

      <div className="w-full h-auto">
        <div className="px-3 py-4 bg-white flex items-center justify-center border-t border-gray-300">
          <h2 className="text-5xl font-semibold">
            <span className="text-cyan-400">O</span>UR PARTNERS
          </h2>
        </div>

        <Marquee speed={40} gradient={false}>
          <GridWithPlus rows={1} />
          <GridWithPlus rows={1} />
        </Marquee>

        <Marquee speed={40} delay={2} gradient={false}>
          <GridWithPlus rows={1} />
          <GridWithPlus rows={1} />
        </Marquee>
      </div>
    </>
  );
}
