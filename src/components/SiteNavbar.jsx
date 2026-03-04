import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navItems = [
  { label: "About Us", to: "/about" },
  { label: "Features", to: "/features" },
  { label: "Pricing", to: "/pricing" },
  { label: "Terms", to: "/terms" },
  { label: "Privacy", to: "/privacy" },
];

export default function SiteNavbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);
  return (
<header
  className={`fixed left-0 top-0 z-50 w-full h-18 transition-all duration-500 ease-in-out
  ${
    scrolled
      ? "bg-[#5c1fb8]/35 backdrop-blur-md border-b border-white/10 shadow-lg"
      : "bg-[#5c1fb8] shadow-md"
  }`}
>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 text-lg font-bold text-white">
            S
          </div>
          <div>
            <p className="text-xl font-bold tracking-wide text-white">Sharnex</p>
            <p className="text-[10px] text-white/80">School Management Platform</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-lg px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-brand-700"
                    : "text-white/90 hover:bg-white/20 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            component={Link}
            to="/pricing"
            variant="contained"
            color="secondary"
            sx={{ bgcolor: "#b28ee8", "&:hover": { bgcolor: "#9e7ecf" } }}
          >
            Get Started
          </Button>
        </div>

        <IconButton
          aria-label="menu"
          onClick={() => setMobileOpen((v) => !v)}
          className="!text-white md:!hidden"
        >
          {mobileOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>
      </div>

      <div
        className={`overflow-hidden transition-all duration-300 md:hidden ${
          mobileOpen ? "max-h-80" : "max-h-0"
        }`}
      >
        <nav className="space-y-1 bg-[#5a22b7] px-4 pb-4">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `block rounded-lg px-3 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-white text-brand-700"
                    : "text-white/90 hover:bg-white/15 hover:text-white"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <Button
            component={Link}
            to="/pricing"
            variant="contained"
            fullWidth
            color="secondary"
            sx={{ mt: 1, bgcolor: "#2f0d66", "&:hover": { bgcolor: "#250951" } }}
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
