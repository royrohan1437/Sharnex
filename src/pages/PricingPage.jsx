import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import { Chip } from "@mui/material";
import SectionHero from "../components/SectionHero";
import { PrimaryButton, SecondaryButton } from "../components/PrimaryButton";

const plans = [
  {
    name: "Starter",
    price: "₹2,999",
    note: "Per month, billed annually",
    points: ["Up to 500 students", "Attendance + Fees", "Basic reports", "Email support"],
    popular: false,
  },
  {
    name: "Growth",
    price: "₹6,999",
    note: "Per month, billed annually",
    points: ["Up to 2000 students", "Exam module + parent app", "Advanced analytics", "Priority support"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    note: "Tailored for school groups",
    points: ["Unlimited students", "Custom integrations", "Dedicated success manager", "SLA support"],
    popular: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <SectionHero
        title="Simple, Transparent Pricing"
        subtitle="Choose a plan that matches your institution size and operational needs."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-1">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">Plans For Every Stage</h2>
          <p className="mt-2 text-sm leading-7 text-slate-600">
            Start small, scale as your institution grows, and keep every core module connected.
          </p>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`rounded-2xl border bg-white p-7 shadow-sm transition hover:-translate-y-1 ${
                plan.popular ? "border-brand-500 shadow-glow" : "border-brand-100"
              }`}
            >
              <div className="mb-4 flex items-start justify-between gap-2">
                <div>
                  <h2 className="text-xl font-bold">{plan.name}</h2>
                  <p className="mt-1 text-3xl font-extrabold text-brand-700">{plan.price}</p>
                </div>
                {plan.popular && <Chip label="Most Popular" color="primary" size="small" />}
              </div>
              <p className="text-sm text-slate-500">{plan.note}</p>
              <ul className="mt-5 space-y-3">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-slate-700">
                    <CheckCircleRoundedIcon className="!mt-0.5 !text-lg !text-brand-600" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                {plan.popular ? (
                  <PrimaryButton fullWidth>Start Free Trial</PrimaryButton>
                ) : (
                  <SecondaryButton fullWidth>Choose Plan</SecondaryButton>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
