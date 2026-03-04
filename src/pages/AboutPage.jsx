import WorkspacePremiumRoundedIcon from "@mui/icons-material/WorkspacePremiumRounded";
import RocketLaunchRoundedIcon from "@mui/icons-material/RocketLaunchRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import SectionHero from "../components/SectionHero";

const values = [
  {
    title: "Quality First",
    text: "Every feature is designed for reliability in high-volume school workflows.",
    icon: WorkspacePremiumRoundedIcon,
  },
  {
    title: "Continuous Innovation",
    text: "We regularly evolve our product based on educators and administrators feedback.",
    icon: RocketLaunchRoundedIcon,
  },
  {
    title: "Human-Centered",
    text: "Technology should simplify school life, not add complexity.",
    icon: FavoriteRoundedIcon,
  },
];

export default function AboutPage() {
  return (
    <>
      <SectionHero
        title="About Sharnex"
        subtitle="We build school management software that helps institutions improve operational efficiency and learning outcomes."
      />
      <section className="mx-auto grid max-w-6xl gap-8 px-4 py-1 sm:px-6 md:grid-cols-2">
        <article className="rounded-2xl border border-brand-100 bg-[#e0ccfc] p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            To empower schools with a robust digital backbone where administration, academics, and
            parent engagement work together seamlessly. We believe schools should spend more time
            on student growth and less time on manual operations.
          </p>
        </article>
        <article className="rounded-2xl border border-brand-100 bg-[#e0ccfc] p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            To become the most trusted ERP partner for schools by combining practical features,
            intuitive design, and reliable support across every stage of institutional growth.
          </p>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 pb-16 sm:px-6">
        <h2 className="mb-5 text-2xl font-bold text-slate-900">Core Values</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <article
              key={value.title}
              className="rounded-2xl border border-brand-100 bg-white p-6 transition hover:-translate-y-1 hover:shadow-glow"
            >
              <value.icon className="!mb-3 !text-3xl !text-brand-700" />
              <h3 className="text-lg font-semibold">{value.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{value.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
