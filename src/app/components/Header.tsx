import { Link, useLocation } from "react-router";
import { Heart, Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <header className="bg-white border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-primary rounded-full p-2 group-hover:bg-[var(--maroon)] transition-colors">
              <Heart className="w-6 h-6 text-white fill-white" />
            </div>
            <div>
              <div className="font-serif text-xl md:text-2xl text-primary font-semibold">
                Nepali Matrimony
              </div>
              <div className="text-xs text-muted-foreground hidden sm:block">
                Building Family Connections
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className={`transition-colors ${
                isActive("/")
                  ? "text-primary font-medium"
                  : "text-foreground hover:text-primary"
              }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`transition-colors ${
                isActive("/about")
                  ? "text-primary font-medium"
                  : "text-foreground hover:text-primary"
              }`}
            >
              About
            </Link>
            <Link
              to="/submit"
              className="bg-primary hover:bg-[var(--maroon)] text-white px-6 py-2.5 rounded-lg transition-colors shadow-sm"
            >
              Submit Profile
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition-colors ${
                  isActive("/")
                    ? "text-primary font-medium"
                    : "text-foreground"
                }`}
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`py-2 transition-colors ${
                  isActive("/about")
                    ? "text-primary font-medium"
                    : "text-foreground"
                }`}
              >
                About
              </Link>
              <Link
                to="/submit"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-primary hover:bg-[var(--maroon)] text-white px-6 py-3 rounded-lg text-center transition-colors"
              >
                Submit Profile
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
