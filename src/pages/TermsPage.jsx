import GavelRoundedIcon from "@mui/icons-material/GavelRounded";
import SectionHero from "../components/SectionHero";

const sections = [
  {
    id: "acceptance",
    heading: "1. Acceptance of Terms",
    intro:
      "By accessing or using Sharnex ERP, your institution agrees to these Terms of Use.",
    points: [
      "You confirm that your institution has authority to enter this agreement.",
      "If you do not agree with these terms, you must discontinue use of the platform.",
    ],
  },
  {
    id: "permitted-use",
    heading: "2. Permitted Use",
    intro: "The platform may be used only for legitimate educational and operational activities.",
    points: [
      "You must not misuse, disrupt, or attempt unauthorized access to any service component.",
      "You must comply with all local laws and institutional data governance requirements.",
    ],
  },
  {
    id: "accounts",
    heading: "3. Account Responsibilities",
    intro: "Each school is responsible for proper account administration and role assignment.",
    points: [
      "Credential security is the responsibility of each authorized user and institution.",
      "Any suspected breach or misuse must be reported promptly to Sharnex support.",
    ],
  },
  {
    id: "billing",
    heading: "4. Billing and Subscription",
    intro: "Paid plans are governed by the subscription plan selected during onboarding.",
    points: [
      "Billing cycles, renewal terms, and plan limitations are outlined in your plan agreement.",
      "Service restrictions may apply if payments are delayed or repeatedly unsuccessful.",
    ],
  },
  {
    id: "liability",
    heading: "5. Limitation of Liability",
    intro: "Sharnex provides services with commercially reasonable safeguards and availability goals.",
    points: [
      "We are not liable for indirect, incidental, or consequential losses to the extent permitted by law.",
      "Liability, where applicable, is limited as defined by contract and governing regulation.",
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <SectionHero
        title="Terms of Use"
        subtitle="Please review these terms carefully before using the Sharnex School ERP platform."
      />

      <section className="mx-auto max-w-5xl px-4 py-1 sm:px-6">
        <article className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                Legal Agreement
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Terms of Use</h2>
              <p className="mt-2 text-sm text-slate-600">Effective Date: March 4, 2026</p>
            </div>
            <div className="rounded-xl bg-brand-100 p-2 text-brand-700">
              <GavelRoundedIcon />
            </div>
          </div>

          <nav className="mt-6 rounded-2xl bg-brand-50/70 p-4">
            <p className="mb-2 text-sm font-semibold text-brand-700">Contents</p>
            <ul className="grid gap-2 text-sm text-slate-700 md:grid-cols-2">
              {sections.map((section) => (
                <li key={section.id}>
                  <a className="transition hover:text-brand-700 hover:underline" href={`#${section.id}`}>
                    {section.heading}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-8 space-y-6">
            {sections.map((section) => (
              <section
                id={section.id}
                key={section.id}
                className="rounded-2xl border border-slate-100 p-5 transition hover:border-brand-200 hover:shadow-sm"
              >
                <h3 className="text-lg font-bold text-slate-900">{section.heading}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{section.intro}</p>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                  {section.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </article>
      </section>
    </>
  );
}
