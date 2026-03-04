export default function SectionHero({ title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-brand-gradient pb-16 pt-32 text-[#5c1fb8] [-webkit-text-stroke:1px_#3f1480] md:pb-20 md:pt-36">
      <div className="absolute -left-10 top-20 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -right-12 top-8 h-52 w-52 rounded-full bg-white/20 blur-3xl" />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-3xl text-sm text-[#5c1fb8] sm:text-base">{subtitle}</p>
      </div>
    </section>
  );
}
