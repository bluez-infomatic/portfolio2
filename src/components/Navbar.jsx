import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react"; // ✅ Added icon imports

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Project", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
          : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a className="text-xl font-bold text-primary flex items-center" href="#hero">
          <span className="relative z-10">
            <span className="text-glow text-foreground">Ganeshbabu</span>{" "}Portfolio
          </span>
        </a>

        {/* Desktop nav and mobile toggle */}
        <div className="flex items-center gap-6 ml-8">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex gap-8">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="md:hidden p-2 text-foreground z-50"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Nav Panel */}
          <div
            className={cn(
              "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
              "transition-all duration-300 md:hidden",
              isMenuOpen
                ? "opacity-100 pointer-events-auto"
                : "opacity-0 pointer-events-none"
            )}
          >
            <div className="flex flex-col gap-y-8 text-xl">
              {navItems.map((item, key) => (
                <a
                  key={key}
                  href={item.href}
                  className="text-sm text-foreground/80 hover:text-primary transition-colors duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Empty div for layout alignment */}
          <div className="w-6"></div>
        </div>
      </div>
    </nav>
  );
};