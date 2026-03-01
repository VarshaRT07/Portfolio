"use client";

import React from "react";

import type { Profile } from "@/types";
import { motion } from "framer-motion";

interface FooterProps {
  profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-muted bg-background py-12">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex flex-col items-center justify-between gap-6 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Brand */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-foreground">Varsha Nandhini</h3>
            <p className="text-sm text-muted-foreground">
              Full Stack Engineer building modern web experiences
            </p>
          </div>

          {/* Quick links */}
          <div className="flex gap-6">
            {[
              { href: "#top", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#experience", label: "Experience" },
              { href: "#projects", label: "Projects" },
              // { href: "#blog", label: "Blog" },
              { href: "#contact", label: "Contact" },
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-accent"
                whileHover={{ x: 2 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground sm:text-right">
            <p>
              © {currentYear} {profile.name}. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
