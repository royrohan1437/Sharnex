import ArrowOutwardRoundedIcon from "@mui/icons-material/ArrowOutwardRounded";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const footerCols = [
  {
    title: "Links",
    items: [
      { label: "Home", to: "/" },
      { label: "Features", to: "/features" },
      { label: "About Us", to: "/about" },
      { label: "Pricing", to: "/pricing" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "About Us", to: "/about" },
      { label: "Terms of Use", to: "/terms" },
      { label: "Privacy Policy", to: "/privacy" },
    ],
  },
  {
    title: "Features",
    items: [
      { label: "Attendance System", to: "/features" },
      { label: "Fee Management", to: "/features" },
      { label: "Examination Module", to: "/features" },
      { label: "Teacher Portal", to: "/features" },
    ],
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative mt-20 overflow-hidden border-t border-brand-400/40 bg-[linear-gradient(135deg,#6c2bd9_0%,#8a4dff_45%,#6b2de1_100%)] text-white">
      <div className="pointer-events-none absolute -left-16 top-10 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-10 bottom-10 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

      <div className="mx-auto max-w-6xl px-4 pt-10 sm:px-6">
        <div className="mb-10 rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-md md:flex md:items-center md:justify-between md:p-7">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/70">Start Today</p>
            <h3 className="mt-2 text-xl font-bold md:text-2xl">Digitize Your School Operations</h3>
            <p className="mt-2 text-sm text-white/85">
              Launch quickly with a secure and scalable ERP built for modern institutions.
            </p>
          </div>
          <Link
            to="/pricing"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-[#b28ee8] px-5 py-3 text-sm font-semibold text-brand-700 transition hover:-translate-y-0.5 hover:bg-brand-50 md:mt-0"
          >
            Explore Plans
            <ArrowOutwardRoundedIcon className="!text-base" />
          </Link>
        </div>
      </div>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 pb-12 sm:px-6 md:grid-cols-[1.35fr_2fr]">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/20 text-xl font-bold">
              S
            </div>
            <div>
              <p className="text-2xl font-bold">Sharnex</p>
              <p className="text-xs text-white/85">School Management Platform</p>
            </div>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-white/90">
            Sharnex helps schools manage students, teachers, attendance, quizzes and reports in
            one unified, cloud-first ERP.
          </p>
          <div className="mt-4 flex items-center gap-2">
            {[FacebookRoundedIcon, XIcon, LinkedInIcon, InstagramIcon].map((Icon, idx) => (
              <IconButton
                key={idx}
                size="small"
                sx={{
                  color: "white",
                  backgroundColor: "rgba(255,255,255,0.12)",
                  transition: "all .2s ease",
                  "&:hover": {
                    backgroundColor: "rgba(255,255,255,0.24)",
                    transform: "translateY(-2px)",
                  },
                }}
              >
                <Icon fontSize="small" />
              </IconButton>
            ))}
          </div>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerCols.map((col) => (
            <div key={col.title}>
              <h4 className="mb-3 text-base font-semibold">{col.title}</h4>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item.label}>
                    <Link
                      to={item.to}
                      className="group inline-flex items-center gap-1 text-sm text-white/85 transition hover:text-white"
                    >
                      {item.label}
                      <ArrowOutwardRoundedIcon className="!hidden !text-xs group-hover:!inline-block" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="mb-3 text-base font-semibold">Contact</h4>
            <ul className="space-y-2 text-sm text-white/85">
              <li>support@sharnex.com</li>
              <li>+91 - xxxxxxxxxx</li>
              <li>Uttarakhand, India</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-4 text-xs text-white/85 sm:px-6 md:flex-row">
          <p>&copy; 2026 Sharnex. All rights reserved. Where Knowledge Meets Innovation.</p>
          <div className="flex items-center gap-2">
            <Link className="hover:text-white hover:underline" to="/terms">
              Terms of Use
            </Link>
            <span>|</span>
            <Link className="hover:text-white hover:underline" to="/privacy">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
