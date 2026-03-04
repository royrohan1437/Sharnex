import ShieldRoundedIcon from "@mui/icons-material/ShieldRounded";
import SectionHero from "../components/SectionHero";

const sections = [
  {
    id: "collection",
    heading: "1. Information We Collect",
    intro: "We collect institutional and user-level data required to deliver ERP services.",
    points: [
      "User profile details such as name, email, role, and school affiliation.",
      "School operations data including attendance, fee records, and exam-related inputs.",
      "Technical logs including browser type, IP metadata, and device identifiers.",
    ],
  },
  {
    id: "usage",
    heading: "2. How We Use Information",
    intro: "Collected data is used to operate and improve school workflows on the platform.",
    points: [
      "To provide platform features, account security, and support operations.",
      "To send service notifications, updates, and mission-critical communication.",
      "To improve usability, reporting quality, and platform performance.",
    ],
  },
  {
    id: "sharing",
    heading: "3. Data Sharing and Security",
    intro: "Sharnex applies strict controls for data access and third-party processing.",
    points: [
      "We do not sell personal or institutional data to external parties.",
      "Data may be processed by vetted infrastructure providers under contractual controls.",
      "Encryption, access control, and audit practices are applied to protect records.",
    ],
  },
  {
    id: "retention",
    heading: "4. Data Retention",
    intro: "Data retention follows legal obligations and active service requirements.",
    points: [
      "Records are retained only as long as needed for service continuity and compliance.",
      "Schools may request export or deletion according to policy and contract terms.",
    ],
  },
  {
    id: "contact",
    heading: "5. Contact and Policy Updates",
    intro: "This policy may be updated periodically to reflect legal or product changes.",
    points: [
      "Updated policies are published with a revised effective date on this page.",
      "Privacy requests can be sent to privacy@sharnex.com.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <SectionHero
        title="Privacy Policy"
        subtitle="This page explains how Sharnex collects, uses, safeguards, and governs school-related data."
      />
      <section className="mx-auto max-w-5xl px-4 py-1 sm:px-6">
        <article className="rounded-3xl border border-brand-100 bg-white p-6 shadow-sm md:p-8">
          <div className="flex items-start justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-600">
                Data Protection
              </p>
              <h2 className="mt-2 text-2xl font-bold text-slate-900">Privacy Policy</h2>
              <p className="mt-2 text-sm text-slate-600">Effective Date: March 4, 2026</p>
            </div>
            <div className="rounded-xl bg-brand-100 p-2 text-brand-700">
              <ShieldRoundedIcon />
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
