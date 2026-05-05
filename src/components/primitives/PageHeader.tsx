export default function PageHeader({ title }: { title: string }) {
  return (
    <h1 className="bg-white py-12 border-y border-gray-300 px-6 my-6 text-[clamp(34px,6vw,72px)] font-black uppercase leading-[0.92] tracking-[-0.08em] text-neutral-900">
      {title}
    </h1>
  );
}
