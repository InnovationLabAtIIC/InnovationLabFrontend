"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu, X } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export interface MegaMenuLink {
  label: string;
  href: string;
  description?: string;
  badge?: string;
}

export interface MegaMenuColumn {
  heading: string;
  items: MegaMenuLink[];
}

export interface MegaMenuFeatured {
  eyebrow?: string;
  title: string;
  description: string;
  href: string;
  ctaLabel?: string;
}

export interface NavMenuItem {
  label: string;
  href?: string;
  columns?: MegaMenuColumn[];
  featured?: MegaMenuFeatured;
}

export interface NavbarBrand {
  label: string;
  href: string;
}

export interface NavbarAction {
  label: string;
  href: string;
}

export interface NavbarProps {
  brand?: NavbarBrand;
  menuItems?: NavMenuItem[];
  actionLink?: NavbarAction;
}

export const defaultNavbarBrand: NavbarBrand = {
  label: "Innovation Lab",
  href: "/",
};

export const defaultNavbarAction: NavbarAction = {
  label: "Get In Touch",
  href: "/contact",
};

// Update this data to customize both desktop mega menu and mobile accordion menu.
export const defaultNavMenu: NavMenuItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore",
    columns: [
      {
        heading: "Company",
        items: [
          {
            label: "About",
            href: "/about",
            description: "Mission, vision, and timeline.",
          },
          {
            label: "Company",
            href: "/company",
            description: "Stories, teams, and partner ecosystem.",
          },
          {
            label: "Contact",
            href: "/contact",
            description: "Reach us for collaboration and inquiries.",
          },
        ],
      },
      {
        heading: "Programs",
        items: [
          {
            label: "Events",
            href: "/events",
            description: "Workshops, showcases, and open sessions.",
            badge: "New",
          },
          {
            label: "Innovation Lab",
            href: "/lab",
            description: "Explore our labs, facilities, and projects.",
          },
          {
            label: "Member Login",
            href: "/login",
            description: "Access your dashboard and internal tools.",
          },
        ],
      },
      {
        heading: "Quick Paths",
        items: [
          {
            label: "Book A Session",
            href: "/contact",
            description: "Schedule discovery and planning sessions.",
          },
          {
            label: "Partner With Us",
            href: "/company",
            description: "Build pilots and production rollouts together.",
          },
          {
            label: "View All Events",
            href: "/events",
            description: "See our complete event calendar.",
          },
        ],
      },
    ],
    featured: {
      eyebrow: "Spotlight",
      title: "Spring Innovation Program",
      description:
        "Join live sessions with builders, researchers, and founders designing production-ready solutions.",
      href: "/events",
      ctaLabel: "See events",
    },
  },
  {
    label: "Lab",
    href: "/lab",
  },
  {
    label: "Events",
    href: "/events",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

function isMegaMenuItem(item: NavMenuItem): item is NavMenuItem & {
  columns: MegaMenuColumn[];
} {
  return Array.isArray(item.columns) && item.columns.length > 0;
}

function normalizePath(path: string): string {
  if (path.length > 1 && path.endsWith("/")) {
    return path.slice(0, -1);
  }

  return path;
}

function isPathActive(pathname: string, href: string): boolean {
  const normalizedPathname = normalizePath(pathname);
  const normalizedHref = normalizePath(href);

  if (normalizedHref === "/") {
    return normalizedPathname === "/";
  }

  return (
    normalizedPathname === normalizedHref ||
    normalizedPathname.startsWith(`${normalizedHref}/`)
  );
}

function hasActiveMegaChild(pathname: string, item: NavMenuItem): boolean {
  if (!isMegaMenuItem(item)) {
    return false;
  }

  const activeInColumns = item.columns.some((column) =>
    column.items.some((menuLink) => isPathActive(pathname, menuLink.href)),
  );

  const activeFeatured = item.featured
    ? isPathActive(pathname, item.featured.href)
    : false;

  return activeInColumns || activeFeatured;
}

export default function Navbar({
  brand = defaultNavbarBrand,
  menuItems = defaultNavMenu,
  actionLink = defaultNavbarAction,
}: NavbarProps) {
  const pathname = usePathname() ?? "/";
  const { scrollY } = useScroll();
  const navRef = useRef<HTMLElement | null>(null);
  const firstMegaMenuLabel =
    menuItems.find((item) => isMegaMenuItem(item))?.label ?? null;

  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isTop, setIsTop] = useState(true);
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileMenu, setOpenMobileMenu] = useState<string | null>(
    firstMegaMenuLabel,
  );

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeTop = latest <= 8;
    setIsTop((current) => (current === shouldBeTop ? current : shouldBeTop));
  });

  useEffect(() => {
    setOpenMobileMenu(firstMegaMenuLabel);
  }, [firstMegaMenuLabel]);

  useEffect(() => {
    setIsMobileOpen(false);
    setOpenDesktopMenu(null);
  }, [pathname]);

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!navRef.current?.contains(event.target as Node)) {
        setOpenDesktopMenu(null);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpenDesktopMenu(null);
        setIsMobileOpen(false);
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    if (!isMobileOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [isMobileOpen]);

  return (
    <nav
      ref={navRef}
      className="site-navbar fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6"
    >
      <motion.div
        className="mx-auto w-full"
        initial={false}
        animate={{
          width: isTop ? "100%" : "64%",
          maxWidth: isTop ? "80rem" : "72rem",
        }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="relative rounded-none border border-slate-900/10 bg-white/85 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-3 px-3 py-2 sm:px-4 sm:py-2.5 lg:gap-4 lg:px-6 lg:py-3">
            <Link
              href={brand.href}
              className="group inline-flex items-center gap-2 rounded-none px-2 py-1"
            >
              <span className="h-2 w-2 rounded-none bg-cyan-500 transition-transform duration-200 group-hover:scale-125" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-900 sm:text-sm">
                {brand.label}
              </span>
            </Link>

            <ul className="hidden items-center gap-1 lg:flex">
              {menuItems.map((item) => {
                const menuIsActive = item.href
                  ? isPathActive(pathname, item.href)
                  : hasActiveMegaChild(pathname, item);

                if (isMegaMenuItem(item)) {
                  const isOpen = openDesktopMenu === item.label;

                  return (
                    <li
                      key={item.label}
                      className="relative"
                      onMouseEnter={() => setOpenDesktopMenu(item.label)}
                      onMouseLeave={() =>
                        setOpenDesktopMenu((current) =>
                          current === item.label ? null : current,
                        )
                      }
                    >
                      <button
                        type="button"
                        className={`inline-flex items-center gap-1 rounded-none px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                          menuIsActive
                            ? "bg-slate-900 text-white"
                            : "text-slate-700 hover:bg-slate-100"
                        }`}
                        aria-expanded={isOpen}
                        aria-label={`${item.label} menu`}
                        onClick={() =>
                          setOpenDesktopMenu((current) =>
                            current === item.label ? null : item.label,
                          )
                        }
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`h-4 w-4 transition-transform duration-200 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`absolute left-1/2 top-[calc(100%+0.75rem)] w-[min(94vw,70rem)] -translate-x-1/2 transition-all duration-200 ${
                          isOpen
                            ? "pointer-events-auto visible translate-y-0 opacity-100"
                            : "pointer-events-none invisible -translate-y-2 opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden rounded-none border border-slate-900/10 bg-white">
                          <div className="grid gap-6 p-6 lg:grid-cols-[1fr_20rem]">
                            <div
                              className="grid gap-5"
                              style={{
                                gridTemplateColumns: `repeat(${Math.max(
                                  item.columns.length,
                                  1,
                                )}, minmax(0, 1fr))`,
                              }}
                            >
                              {item.columns.map((column) => (
                                <section key={column.heading}>
                                  <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                                    {column.heading}
                                  </h3>

                                  <div className="mt-3 space-y-2">
                                    {column.items.map((menuLink) => {
                                      const childIsActive = isPathActive(
                                        pathname,
                                        menuLink.href,
                                      );

                                      return (
                                        <Link
                                          key={menuLink.label}
                                          href={menuLink.href}
                                          className={`block rounded-none border px-3 py-2 transition-colors duration-200 ${
                                            childIsActive
                                              ? "border-cyan-300 bg-cyan-50"
                                              : "border-slate-200 hover:border-cyan-200 hover:bg-slate-50"
                                          }`}
                                        >
                                          <span className="flex items-center justify-between gap-3">
                                            <span className="text-sm font-medium text-slate-900">
                                              {menuLink.label}
                                            </span>
                                            {menuLink.badge ? (
                                              <span className="rounded-none bg-cyan-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-700">
                                                {menuLink.badge}
                                              </span>
                                            ) : null}
                                          </span>

                                          {menuLink.description ? (
                                            <span className="mt-1 block text-xs text-slate-500">
                                              {menuLink.description}
                                            </span>
                                          ) : null}
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </section>
                              ))}
                            </div>

                            {item.featured ? (
                              <Link
                                href={item.featured.href}
                                className="flex h-full min-h-56 flex-col justify-between rounded-none bg-slate-900 p-5 text-white"
                              >
                                <div>
                                  <p className="text-xs uppercase tracking-[0.18em] text-cyan-300">
                                    {item.featured.eyebrow ?? "Featured"}
                                  </p>
                                  <h4 className="mt-2 text-lg font-semibold leading-tight">
                                    {item.featured.title}
                                  </h4>
                                  <p className="mt-2 text-sm text-slate-300">
                                    {item.featured.description}
                                  </p>
                                </div>

                                <p className="mt-5 text-sm font-semibold text-cyan-200">
                                  {item.featured.ctaLabel ?? "Learn more"} +
                                </p>
                              </Link>
                            ) : null}
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href ?? "/"}
                      className={`inline-flex rounded-none px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                        menuIsActive
                          ? "bg-slate-900 text-white"
                          : "text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="flex items-center gap-2">
              <Link
                href={actionLink.href}
                className="hidden rounded-none bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-900 transition-colors duration-200 hover:bg-cyan-400 lg:inline-flex"
              >
                {actionLink.label}
              </Link>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-none border border-slate-300 p-1.5 text-slate-800 sm:p-2 lg:hidden"
                onClick={() => setIsMobileOpen((current) => !current)}
                aria-expanded={isMobileOpen}
                aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              >
                {isMobileOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      <div
        className={`lg:hidden ${
          isMobileOpen ? "pointer-events-auto" : "pointer-events-none"
        }`}
      >
        <button
          type="button"
          className={`fixed inset-0 z-40 bg-slate-900/35 transition-opacity duration-200 ${
            isMobileOpen ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setIsMobileOpen(false)}
          aria-label="Close mobile menu backdrop"
        />

        <div
          className={`fixed inset-x-3 top-[3.95rem] z-50 origin-top rounded-none border border-slate-900/10 bg-white p-4 transition-all duration-200 sm:inset-x-6 sm:top-[4.45rem] ${
            isMobileOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "-translate-y-1 scale-[0.98] opacity-0"
          }`}
        >
          <div className="max-h-[calc(100dvh-5.4rem)] overflow-y-auto sm:max-h-[calc(100dvh-6rem)]">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const menuIsActive = item.href
                  ? isPathActive(pathname, item.href)
                  : hasActiveMegaChild(pathname, item);

                if (!isMegaMenuItem(item)) {
                  return (
                    <li key={item.label}>
                      <Link
                        href={item.href ?? "/"}
                        className={`block rounded-none px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                          menuIsActive
                            ? "bg-slate-900 text-white"
                            : "bg-slate-100 text-slate-800"
                        }`}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </li>
                  );
                }

                const isExpanded = openMobileMenu === item.label;

                return (
                  <li
                    key={item.label}
                    className="rounded-none border border-slate-200"
                  >
                    <button
                      type="button"
                      className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-semibold text-slate-900"
                      aria-expanded={isExpanded}
                      onClick={() =>
                        setOpenMobileMenu((current) =>
                          current === item.label ? null : item.label,
                        )
                      }
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isExpanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ${
                        isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="space-y-4 border-t border-slate-200 px-4 py-4">
                          {item.columns.map((column) => (
                            <section key={column.heading}>
                              <h3 className="text-[11px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                                {column.heading}
                              </h3>

                              <div className="mt-2 space-y-2">
                                {column.items.map((menuLink) => {
                                  const childIsActive = isPathActive(
                                    pathname,
                                    menuLink.href,
                                  );

                                  return (
                                    <Link
                                      key={menuLink.label}
                                      href={menuLink.href}
                                      onClick={() => setIsMobileOpen(false)}
                                      className={`block rounded-none px-3 py-2 text-sm transition-colors duration-200 ${
                                        childIsActive
                                          ? "bg-cyan-50 text-slate-900"
                                          : "bg-slate-100 text-slate-700"
                                      }`}
                                    >
                                      <span className="block font-medium">
                                        {menuLink.label}
                                      </span>
                                      {menuLink.description ? (
                                        <span className="mt-1 block text-xs text-slate-500">
                                          {menuLink.description}
                                        </span>
                                      ) : null}
                                    </Link>
                                  );
                                })}
                              </div>
                            </section>
                          ))}

                          {item.featured ? (
                            <Link
                              href={item.featured.href}
                              onClick={() => setIsMobileOpen(false)}
                              className="block rounded-none bg-slate-900 px-4 py-4"
                            >
                              <p className="text-[11px] uppercase tracking-[0.16em] text-cyan-300">
                                {item.featured.eyebrow ?? "Featured"}
                              </p>
                              <p className="mt-1 text-sm font-semibold text-white">
                                {item.featured.title}
                              </p>
                              <p className="mt-2 text-xs text-slate-300">
                                {item.featured.description}
                              </p>
                            </Link>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>

            <Link
              href={actionLink.href}
              onClick={() => setIsMobileOpen(false)}
              className="mt-4 block rounded-none bg-cyan-500 px-4 py-3 text-center text-sm font-semibold text-slate-900"
            >
              {actionLink.label}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
