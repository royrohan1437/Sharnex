import { Outlet, useLocation } from "react-router-dom";
import Footer from "./SiteFooter";
import Navbar from "./SiteNavbar";
import ScrollToTop from "./ScrollToTop";
import ScrollToTopButton from "./ScrollToTopButton";
import useDocumentMeta from "../hooks/useDocumentMeta";

const titles = {
  "/": "Sharnex ERP | School Management Platform",
  "/about": "About Us | Sharnex ERP",
  "/features": "Features | Sharnex ERP",
  "/pricing": "Pricing | Sharnex ERP",
  "/terms": "Terms of Use | Sharnex ERP",
  "/privacy": "Privacy Policy | Sharnex ERP",
  "/404": "Page Not Found | Sharnex ERP",
};

export default function Layout() {
  const location = useLocation();
  useDocumentMeta({
    title: titles[location.pathname] || "Sharnex ERP",
  });

  return (
    <div className="min-h-screen bg-[#e7dbf3]">
      <ScrollToTop />
      <Navbar />
      <main className="page-enter">
        <Outlet />
      </main>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}
