/* ----- OLD CODE -----
export default function PageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-hidden line-bg px-2 md:px-16">
      <div className="w-full overflow-hidden border-x border-gray-300">
        {children}
      </div>
    </div>
  );
}
--------------------- */

/**
 * WHY IT WAS CHANGED:
 * The previous implementation used `overflow-hidden` unconditionally on the layout wrappers. 
 * This broke `position: sticky` elements (like the Stories component in the Company page) 
 * because `overflow: hidden` (or clip) on an parent/ancestor completely disables sticky positioning.
 * 
 * HOW THE NEW CODE WORKS:
 * A new optional prop `hideOverflow` was added, defaulting to `true` to keep formatting for existing pages.
 * By passing `hideOverflow={false}` from pages that require sticky layouts (e.g. Company page), 
 * the wrapper does not apply the `overflow-hidden` class, enabling vertical scroll triggers and sticky positioning to work naturally.
 */
export default function PageLayout({
  children,
  hideOverflow = true,
}: {
  children: React.ReactNode;
  hideOverflow?: boolean;
}) {
  return (
    <div className={`w-full line-bg px-2 md:px-16 ${hideOverflow ? "overflow-hidden" : ""}`}>
      <div className={`w-full border-x border-gray-300 ${hideOverflow ? "overflow-hidden" : ""}`}>
        {children}
      </div>
    </div>
  );
}