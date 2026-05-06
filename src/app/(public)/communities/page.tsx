import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Button from "@/components/primitives/Button";
import PageLayout from "@/components/primitives/PageLayout";
import PageHeader from "@/components/primitives/PageHeader";
import { publicCommunitiesText, publicPageTitles } from "@/constants/ui/public";
import {
  publicCommunitiesLatestNews,
  publicCommunityCards,
} from "@/lib/data/public/communities";

export default function CommunitiesPage() {
  return (
    <PageLayout>
      <Navbar />
      <PageHeader title={publicPageTitles.communities} />
      <section className="mx-auto grid w-full bg-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {publicCommunityCards.map((community) => (
          <Link
            key={community.slug}
            href={`/communities/${community.slug}`}
            className="group p-5 relative aspect-square min-h-56 overflow-hidden  lg:min-h-64 "
            style={{
              backgroundImage: `linear-gradient(160deg, rgba(243,244,246,0.92), rgba(228,238,242,0.78)), url(${community.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="relative z-10 flex h-full flex-col justify-between">
              <span className="text-small font-extrabold tracking-[0.25em] text-accent">
                {community.id}
              </span>
              <div>
                <h2 className="text-2xl font-black uppercase tracking-tight">
                  {community.title}
                </h2>
                <p className="mt-ds-2 max-w-[24ch] text-body text-black">
                  {community.description}
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 bg-white/25 opacity-70 transition-opacity duration-300 group-hover:opacity-95" />
          </Link>
        ))}
      </section>
      <div className="line-bg w-full md:h-16 h-6"></div>
      <section className="mx-auto  bg-white py-14">
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <h2 className=" px-3 text-[clamp(30px,4.6vw,54px)] font-black uppercase tracking-[-0.03em] text-ivBlack">
            {publicCommunitiesText.latestNews}
          </h2>
        </div>
        <div className="grid  border border-gray-300 bg-white sm:grid-cols-2 lg:grid-cols-3">
          {publicCommunitiesLatestNews.map((item) => (
            <article
              key={item.code}
              className="flex min-h-80 aspect-square flex-col justify-between border-b border-r border-gray-300 last:border-b-0 sm:last:border-b sm:nth-last-[-n+2]:border-b-0 lg:border-b-0"
            >
              <div>
                <div className="relative aspect-video w-full overflow-hidden border border-gray-300">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <h3 className="mt-4 text-2xl font-black uppercase leading-[1.02] tracking-[-0.02em] text-ivBlack">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-ivGray-500">
                    {item.details}
                  </p>
                </div>
              </div>
              <div className=" flex items-center justify-between p-5">
                <span className="text-lg text-ivBlack/60">↗</span>
              </div>
            </article>
          ))}
        </div>
      </section>
      <div className="line-bg w-full md:h-16 h-6"></div>
      <section className="flex flex-col bg-white">
        {publicCommunityCards.map((community, index) => (
          <div
            key={community.slug}
            className={[
              "w-full border border-gray-300 flex items-center",
              index % 2 === 0 ? "flex-row" : "flex-row-reverse",
            ].join(" ")}
          >
            {/* IMAGE */}
            <div className="w-5/12 aspect-square relative">
              <Image
                src={community.image}
                alt={community.title}
                fill
                className="object-cover"
              />
            </div>

            {/* CONTENT */}
            <div className="w-7/12 p-10 flex flex-col gap-6">
              <span className="text-sm tracking-[0.35em] font-extrabold text-primary">
                {community.id}
              </span>

              <h3 className="text-[clamp(32px,3.2vw,52px)] font-black uppercase leading-[0.95]">
                {community.title}
              </h3>

              <p className="text-lg text-gray-700 max-w-2xl leading-relaxed">
                {community.description}
              </p>

              {/* EXTRA DETAILS */}
              <div className="grid grid-cols-2 gap-6 mt-6 text-base">
                <div>
                  <p className="font-bold text-lg">
                    {publicCommunitiesText.focus}
                  </p>
                  <p className="text-gray-500 text-base">{community.focus}</p>
                </div>

                <div>
                  <p className="font-bold text-lg">
                    {publicCommunitiesText.members}
                  </p>
                  <p className="text-gray-500 text-base">{community.members}</p>
                </div>

                <div>
                  <p className="font-bold text-lg">
                    {publicCommunitiesText.activities}
                  </p>
                  <p className="text-gray-500 text-base">
                    {community.activities}
                  </p>
                </div>

                <div>
                  <p className="font-bold text-lg">
                    {publicCommunitiesText.projects}
                  </p>
                  <p className="text-gray-500 text-base">
                    {community.projects}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link href={`/communities/${community.slug}`}>
                  <Button>{publicCommunitiesText.exploreCommunity}</Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>

      <Footer />
    </PageLayout>
  );
}
