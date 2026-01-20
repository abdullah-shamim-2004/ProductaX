"use client";
import { Menu, X, Sparkles } from "lucide-react";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
  ];

  const cn = (...classes) => classes.filter(Boolean).join(" ");

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out",
          isScrolled
            ? "bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl border-b border-gray-200/50 dark:border-gray-800/50 py-3 shadow-lg"
            : "bg-transparent border-b border-transparent py-6"
        )}
      >
        <div className="mx-auto w-full md:max-w-10/12 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo with animation */}
            <Link
              href="/"
              className="group flex items-center gap-2 text-2xl sm:text-3xl font-bold tracking-tight"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent transition-all duration-300 group-hover:from-purple-600 group-hover:to-blue-600">
                Producta
              </span>
              <span className="relative">
                <span className="text-blue-600 dark:text-blue-400 transition-transform duration-300 group-hover:scale-110 inline-block">
                  X
                </span>
                <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-300 transition-colors hover:text-blue-600 dark:hover:text-blue-400 group"
                >
                  {link.label}
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-0 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                </a>
              ))}

              <div className="h-6 w-px bg-gradient-to-b from-transparent via-gray-300 dark:via-gray-700 to-transparent mx-3" />

              <button className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 text-sm font-medium rounded-full shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40 hover:scale-105">
                <Link href={"/login"} className="relative z-10">
                  Login
                </Link>
              </button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <Menu
                className={cn(
                  "h-6 w-6 transition-all duration-300",
                  isOpen
                    ? "rotate-90 opacity-0 absolute"
                    : "rotate-0 opacity-100"
                )}
              />
              <X
                className={cn(
                  "h-6 w-6 transition-all duration-300",
                  isOpen
                    ? "rotate-0 opacity-100"
                    : "-rotate-90 opacity-0 absolute"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Menu Sheet */}
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 w-[85vw] sm:w-[400px] bg-white dark:bg-slate-900 z-50 md:hidden transition-transform duration-300 ease-out shadow-2xl",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full p-6">
          {/* Mobile Header */}
          <div className="flex items-center justify-between mb-8">
            <Link
              href="/"
              className="flex items-center gap-2 text-2xl font-bold"
              onClick={() => setIsOpen(false)}
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Producta
              </span>
              <span className="text-blue-600 dark:text-blue-400">X</span>
            </Link>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col gap-2 flex-1">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="group relative px-4 py-4 text-lg font-semibold text-gray-700 dark:text-gray-300 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300"
                style={{
                  animation: isOpen
                    ? `slideIn 0.3s ease-out ${index * 50}ms both`
                    : "none",
                }}
              >
                <span className="relative z-10 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {link.label}
                </span>
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-1 bg-gradient-to-b from-blue-600 to-purple-600 rounded-r transition-all duration-300 group-hover:h-8" />
              </a>
            ))}
          </nav>

          {/* Mobile CTA */}
          <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
            <Link
              href={"/login"}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/40"
              onClick={() => setIsOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
