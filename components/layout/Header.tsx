"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { VERTICALS, type VerticalConfig } from "@/lib/verticals";

interface HeaderProps {
  variant?: "dark" | "light";
  activeVertical?: VerticalConfig["id"] | null;
}

export default function Header({ variant = "light", activeVertical = null }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const isDark = variant === "dark";

  const navLinkBase =
    "text-sm font-medium transition-colors duration-200 focus-visible:outline-none";
  const navLinkColor = isDark
    ? "text-[#a3b8cc] hover:text-white"
    : "text-neutral-400 hover:text-neutral-950";

  const bgClass = isDark
    ? "bg-black/85 border-[#00f0ff]/15"
    : "bg-white/80 border-neutral-100";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 h-16 border-b backdrop-blur-[12px] ${bgClass}`}
    >
      <div className="max-w-content mx-auto h-full px-6 md:px-12 lg:px-16 flex items-center justify-between gap-8">
        {/* Logo */}
        <Logo onDark={isDark} size="md" showCommunity />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6" aria-label="Navegação principal">
          {VERTICALS.map((v) => (
            <Link
              key={v.id}
              href={v.route}
              className={`${navLinkBase} ${navLinkColor}`}
              style={activeVertical === v.id ? { color: v.color.primary } : undefined}
            >
              {v.shortName}
            </Link>
          ))}
          <Link href="/sobre" className={`${navLinkBase} ${navLinkColor}`}>
            Sobre
          </Link>
        </nav>

        {/* CTA */}
        <div className="hidden md:block">
          <Button href="/ia" size="sm">
            Comece Agora
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          className={`md:hidden p-2 ${isDark ? "text-neutral-400" : "text-neutral-600"}`}
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className={`md:hidden absolute top-16 left-0 right-0 border-b flex flex-col p-6 gap-4 ${
            isDark
              ? "bg-black/95 border-[#00f0ff]/15"
              : "bg-white border-neutral-100"
          }`}
        >
          {VERTICALS.map((v) => (
            <Link
              key={v.id}
              href={v.route}
              onClick={() => setMenuOpen(false)}
              className={`${navLinkBase} ${navLinkColor} text-base`}
            >
              {v.shortName}
            </Link>
          ))}
          <Link
            href="/sobre"
            onClick={() => setMenuOpen(false)}
            className={`${navLinkBase} ${navLinkColor} text-base`}
          >
            Sobre
          </Link>
          <Button href="/ia" size="md" className="mt-2 w-full justify-center">
            Comece Agora
          </Button>
        </div>
      )}
    </header>
  );
}
