import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Button from "@/components/primitives/Button";
import PageLayout from "@/components/primitives/PageLayout";
import PageHeader from "@/components/primitives/PageHeader";

const latestNews = [
  {
    code: "NEWS_01",
    title: "Cross-Community Build Sprint",
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80",
    details:
      "Coders and Inventors shipped a testable prototype during a 48-hour sprint.",
    status: "Published",
  },
  {
    code: "NEWS_02",
    title: "Creator Studio Release",
    image:
      "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?auto=format&fit=crop&w=800&q=80",
    details:
      "Creators launched a modular content pack for community events and updates.",
    status: "New",
  },
  {
    code: "NEWS_03",
    title: "Research Findings Bulletin",
    image:
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=800&q=80",
    details:
      "Researchers published trend insights from Q2 experiments and user studies.",
    status: "Updated",
  },
];

const events = [
  {
    name: "Code Relay Night",
    role: "Coders Community",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=700&q=80",
    note: "Collaborative challenge / optimization track",
  },
  {
    name: "Creator Open Studio",
    role: "Creators Community",
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=700&q=80",
    note: "Visual storytelling / content lab",
  },
  {
    name: "Research Forum",
    role: "Researchers Community",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=700&q=80",
    note: "Data review / insights exchange",
  },
  {
    name: "Prototype Day",
    role: "Inventors Community",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=700&q=80",
    note: "Build showcase / rapid testing",
  },
];

const newsFeed = [
  {
    date: "08.21.2026",
    level: "Community Update",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=300&q=80",
    message:
      "Coders opened registrations for the next architecture deep-dive session",
    tags: "#coders #sessions",
  },
  {
    date: "08.19.2026",
    level: "Community Update",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=300&q=80",
    message:
      "Creators published a fresh toolkit for campaign production workflows",
    tags: "#creators #toolkit",
  },
  {
    date: "08.15.2026",
    level: "Community Update",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=300&q=80",
    message:
      "Researchers released a public summary of current lab investigation tracks",
    tags: "#researchers #summary",
  },
  {
    date: "08.12.2026",
    level: "Community Update",
    image:
      "https://images.unsplash.com/photo-1580894894513-fafe8f65d5f3?auto=format&fit=crop&w=300&q=80",
    message: "Inventors announced the next cohort for prototype incubation",
    tags: "#inventors #incubation",
  },
];

const communityCards = [
  {
    id: "COM_01",
    slug: "coders",
    title: "Coders",
    description:
      "A community of developers building scalable applications, tools, and open-source systems.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
    focus: "Web development, backend systems, open-source",
    members: "500+ active developers",
    activities: "Hackathons, code reviews, system design sessions",
    projects: "SaaS platforms, APIs, developer tools",
  },
  {
    id: "COM_02",
    slug: "creators",
    title: "Creators",
    description:
      "Designers, storytellers, and content creators shaping digital experiences and narratives.",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
    focus: "UI/UX design, branding, content creation",
    members: "300+ creatives",
    activities: "Design jams, content labs, portfolio reviews",
    projects: "Brand identities, campaigns, digital products",
  },
  {
    id: "COM_03",
    slug: "researchers",
    title: "Researchers",
    description:
      "A knowledge-driven group focused on data, experimentation, and insight generation.",
    image:
      "https://images.unsplash.com/photo-1518152006812-edab29b069ac?auto=format&fit=crop&w=800&q=80",
    focus: "Data analysis, user research, experimentation",
    members: "150+ analysts",
    activities: "Research forums, case studies, data reviews",
    projects: "Trend reports, UX insights, behavioral studies",
  },
  {
    id: "COM_05",
    slug: "entrepreneurs",
    title: "Entrepreneurs",
    description:
      "Startup founders and business thinkers building scalable ventures and ideas.",
    image:
      "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
    focus: "Startups, business strategy, growth",
    members: "180+ founders",
    activities: "Pitch sessions, networking, mentorship",
    projects: "Startups, business models, growth strategies",
  },
];

export default function CommunitiesPage() {
  return (
    <PageLayout>
      <Navbar />
      <PageHeader title="COMMUNITIES" />
      <section className="mx-auto grid w-full bg-white grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {communityCards.map((community) => (
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
            Latest News
          </h2>
        </div>
        <div className="grid  border border-gray-300 bg-white sm:grid-cols-2 lg:grid-cols-3">
          {latestNews.map((item) => (
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
        {communityCards.map((community, index) => (
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
                  <p className="font-bold text-lg">Focus</p>
                  <p className="text-gray-500 text-base">{community.focus}</p>
                </div>

                <div>
                  <p className="font-bold text-lg">Members</p>
                  <p className="text-gray-500 text-base">{community.members}</p>
                </div>

                <div>
                  <p className="font-bold text-lg">Activities</p>
                  <p className="text-gray-500 text-base">
                    {community.activities}
                  </p>
                </div>

                <div>
                  <p className="font-bold text-lg">Projects</p>
                  <p className="text-gray-500 text-base">
                    {community.projects}
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link href={`/communities/${community.slug}`}>
                  <Button>Explore Community</Button>
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
