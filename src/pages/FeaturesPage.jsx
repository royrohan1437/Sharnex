import EventAvailableRoundedIcon from "@mui/icons-material/EventAvailableRounded";
import CurrencyRupeeRoundedIcon from "@mui/icons-material/CurrencyRupeeRounded";
import QuizRoundedIcon from "@mui/icons-material/QuizRounded";
import PhoneIphoneRoundedIcon from "@mui/icons-material/PhoneIphoneRounded";
import CoPresentRoundedIcon from "@mui/icons-material/CoPresentRounded";
import AdminPanelSettingsRoundedIcon from "@mui/icons-material/AdminPanelSettingsRounded";
import SectionHero from "../components/SectionHero";

const features = [
  {
    title: "Attendance System",
    text: "Automate daily attendance with class-wise reports and alerts.",
    icon: EventAvailableRoundedIcon,
  },
  {
    title: "Fee Management",
    text: "Track due payments, issue receipts, and configure fee heads.",
    icon: CurrencyRupeeRoundedIcon,
  },
  {
    title: "Examination Module",
    text: "Define exam patterns, grading rules, and instant result cards.",
    icon: QuizRoundedIcon,
  },
  {
    title: "Mobile Application",
    text: "Keep families informed with app-based notices and updates.",
    icon: PhoneIphoneRoundedIcon,
  },
  {
    title: "Teacher Portal",
    text: "Manage class records, homework, and parent communication.",
    icon: CoPresentRoundedIcon,
  },
  {
    title: "Principal Portal",
    text: "High-level oversight with performance dashboards and approvals.",
    icon: AdminPanelSettingsRoundedIcon,
  },
];

export default function FeaturesPage() {
  return (
    <>
      <SectionHero
        title="Platform Features"
        subtitle="Purpose-built tools covering administration, academics, communication, and analytics."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-1">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Modules Schools Use Daily</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Each module is designed for speed, role-based access, and high-volume operations
            across administrators, teachers, and parents.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <article
              key={item.title}
              className="group rounded-2xl border border-brand-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <item.icon className="!mb-3 !text-3xl !text-brand-700 transition group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
