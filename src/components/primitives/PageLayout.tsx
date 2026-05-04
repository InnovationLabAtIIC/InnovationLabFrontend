export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-hidden line-bg px-2 md:px-8">
      <div className="w-full overflow-hidden border-x border-gray-300">
        {children}
      </div>
    </div>
  );
}
