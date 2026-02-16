"use client";

import React from "react";

import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import { Github, Linkedin, Menu, Moon, Sun } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { profile } from "@/data/profile";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const [mounted, setMounted] = useState(false);

  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const navItems = useMemo(
    () => [
      { label: "About", href: "#about" },
      { label: "Skills", href: "#skills" },
      { label: "Experience", href: "#experience" },
      { label: "Projects", href: "#projects" },
      { label: "Blog", href: "#blog" },
      { label: "Contact", href: "#contact" },
    ],
    [],
  );

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 12);
      if (window.scrollY < 80) setActiveSection("top");
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = navItems.map((i) => i.href.replace("#", ""));
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0),
          );

        if (visible[0]?.target?.id) setActiveSection(visible[0].target.id);
      },
      {
        root: null,
        // Favor the section that's in the upper-middle of the viewport
        rootMargin: "-25% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5, 0.75],
      },
    );

    for (const el of elements) observer.observe(el);
    return () => observer.disconnect();
  }, [navItems]);

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      return;
    }
    // fallback (e.g. top)
    if (href === "#top") window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.nav
      className={cn(
        "fixed inset-x-0 top-0 z-50",
        "supports-[backdrop-filter]:bg-background/70 supports-[backdrop-filter]:backdrop-blur-xl",
        "transition-colors duration-200",
        isScrolled
          ? "border-b border-border/60 bg-background/80 shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <motion.a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#top");
          }}
          className="flex items-center gap-2 font-semibold tracking-tight"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="grid h-9 w-9 place-items-center rounded-xl border border-border/60 bg-card shadow-sm">
            <span className="bg-gradient-to-r from-accent to-accent/60 bg-clip-text text-transparent">
              VN
            </span>
          </span>
          <span className="hidden text-sm text-muted-foreground sm:inline">
            Portfolio
          </span>
        </motion.a>

        {/* Desktop links */}
        <div
          className={cn(
            "hidden items-center gap-1 rounded-full border px-2 py-1 md:flex",
            isScrolled
              ? "border-border/60 bg-card/60"
              : "border-transparent bg-transparent",
          )}
        >
          {navItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = activeSection === id;
            return (
              <motion.a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className={cn(
                  "relative rounded-full px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
                whileHover={{ y: -1 }}
                whileTap={{ y: 0 }}
              >
                {isActive && (
                  <motion.span
                    layoutId="active-nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-accent/15"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </motion.a>
            );
          })}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Social links */}
          <div className="hidden items-center gap-2 sm:flex">
            <Button asChild variant="outline" size="icon" className="h-9 w-9">
              <a
                href={profile.socials.find((s) => s.name === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="icon" className="h-9 w-9">
              <a
                href={profile.socials.find((s) => s.name === "LinkedIn")?.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => mounted && setTheme(isDark ? "light" : "dark")}
            aria-label="Toggle theme"
            disabled={!mounted}
          >
            {mounted ? (
              isDark ? (
                <Sun />
              ) : (
                <Moon />
              )
            ) : (
              <span className="h-4 w-4" />
            )}
          </Button>

          <Button asChild className="hidden sm:inline-flex">
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("#contact");
              }}
            >
              Get in Touch
            </a>
          </Button>

          {/* Mobile menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] sm:w-[360px]">
                <SheetHeader>
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>

                <div className="mt-6 flex flex-col gap-2">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={cn(
                        "rounded-lg border border-border/60 bg-card px-4 py-3 text-sm font-medium",
                        "transition-colors hover:bg-accent/10",
                      )}
                    >
                      {item.label}
                    </a>
                  ))}

                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick("#contact");
                    }}
                    className="mt-2 inline-flex items-center justify-center rounded-lg bg-accent px-4 py-3 text-sm font-semibold text-white hover:opacity-95"
                  >
                    Get in Touch
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};
