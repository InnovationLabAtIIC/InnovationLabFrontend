import { useMemo } from "react";
import Link from "next/link";
import Carousel from "../Carousel";
import Button from "../primitives/Button";
import { GridWithPlus } from "./GridWithPlus";
import LatestNewsSection from "./LatestNewsSection";
import Marquee from "react-fast-marquee";

export default function Hero() {
  const rows = 8;
  const cols = 24;

  const gridColors = useMemo(() => {
    return Array.from({ length: rows * cols }, () => {});
  }, []);

  return (
    <>
      <div className="relative w-full overflow-hidden">
        <div className="grid h-full w-full grid-cols-[repeat(12,1fr)] grid-rows-[repeat(10,1fr)] overflow-hidden md:grid-cols-[repeat(24,1fr)] md:grid-rows-[repeat(8,1fr)]">
          {gridColors.map((color, i) => (
            <div
              key={i}
              className="w-full h-full aspect-square bg-white border border-gray-100 hover:bg-gray-50 duration-10"
            />
          ))}
        </div>

        <div className="absolute top-0 flex h-full w-full flex-col px-4 pb-8 pt-8 md:px-3 md:pb-0 md:pt-0">
          <div className="mt-2 md:mt-2">
            <h1 className="text-[clamp(2.8rem,15vw,10rem)] font-bold leading-[0.9] md:leading-none">
              <span className="block md:inline">
                INN<span className="text-primary">O</span>VATI
                <span className="text-primary">O</span>N
              </span>{" "}
              <span className="block md:inline">LABS</span>
            </h1>
          </div>

          <div className="mx-1 mt-4 md:mx-3 md:mt-2">
            <h2 className="max-w-xl text-sm leading-relaxed md:text-base md:max-w-2xl md:text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h2>
          </div>

          <div className="mx-1 mt-6 flex flex-col gap-4 sm:flex-row md:mx-3 md:mt-10 md:gap-5">
            <div className="w-full sm:w-auto">
              <Link href="/about">
                <Button>Explore the Lab</Button>
              </Link>
            </div>
            <div className="w-full sm:w-auto">
              <Link href="/events">
                <Button variant="outline">VIEW EVENTS</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Carousel />

      <div className="line-bg w-full md:h-16 h-6"></div>

      <div className="h-auto w-full">
        <div className="flex items-center justify-center border-t border-gray-300 bg-white px-3 py-4">
          <h2 className="text-[clamp(1.8rem,8vw,3rem)] font-semibold">
            <span className="text-primary">O</span>UR PARTNERS
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

      <LatestNewsSection />
    </>
  );
}
