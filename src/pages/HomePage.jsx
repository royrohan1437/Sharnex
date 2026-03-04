import SchoolRoundedIcon from "@mui/icons-material/SchoolRounded";
import TrendingUpRoundedIcon from "@mui/icons-material/TrendingUpRounded";
import Groups2RoundedIcon from "@mui/icons-material/Groups2Rounded";
import { Chip } from "@mui/material";
import { Link } from "react-router-dom";
import { PrimaryButton, SecondaryButton } from "../components/PrimaryButton";
import SectionHero from "../components/SectionHero";

const stats = [
  { label: "Schools onboarded", value: "420+" },
  { label: "Active users", value: "52K+" },
  { label: "Daily attendance logs", value: "180K+" },
];

const highlights = [
  {
    title: "Academic Control Center",
    desc: "Manage attendance, homework, timetables, and exam planning from one dashboard.",
    icon: SchoolRoundedIcon,
  },
  {
    title: "Actionable Insights",
    desc: "Real-time analytics for leadership teams to track outcomes and school performance.",
    icon: TrendingUpRoundedIcon,
  },
  {
    title: "Connected Stakeholders",
    desc: "Parents, teachers, students, and staff collaborate with secure communication flows.",
    icon: Groups2RoundedIcon,
  },
];

export default function HomePage() {
  return (
    <>
      <SectionHero
        title="School ERP Built For Modern Campuses"
        subtitle="A complete platform for administration, communication, and learning operations with a secure and scalable architecture."
      />

      <section className="mx-auto max-w-6xl px-4 py-1 sm:px-6">
        <div className="grid gap-5 md:grid-cols-3">
          {stats.map((item) => (
            <article key={item.label} className="rounded-2xl bg-white p-6 shadow-md shadow-brand-200/30">
              <p className="text-3xl font-extrabold text-brand-700">{item.value}</p>
              <p className="mt-2 text-sm text-slate-600">{item.label}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <Chip label="Why Sharnex" color="primary" variant="outlined" />
            <h2 className="mt-3 text-2xl font-bold text-slate-900 md:text-3xl">
              Powerful modules with minimal learning curve
            </h2>
          </div>
          <div className="hidden gap-3 md:flex">
            <PrimaryButton component={Link} to="/features">
              View Features
            </PrimaryButton>
            <SecondaryButton component={Link} to="/pricing">
              Compare Plans
            </SecondaryButton>
          </div>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {highlights.map((h) => (
            <article
              key={h.title}
              className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-glow"
            >
              <h.icon className="!mb-4 !text-3xl !text-brand-700" />
              <h3 className="text-lg font-semibold text-slate-900">{h.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{h.desc}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 flex gap-3 md:hidden">
          <PrimaryButton component={Link} to="/features">
            View Features
          </PrimaryButton>
          <SecondaryButton component={Link} to="/pricing">
            Compare Plans
          </SecondaryButton>
        </div>
      </section>
    </>
  );
}
