import { Link } from "react-router-dom";
import { PrimaryButton } from "../components/PrimaryButton";

export default function NotFoundPage() {
  return (
    <section className="mx-auto flex min-h-[65vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <p className="rounded-full bg-brand-100 px-4 py-2 text-sm font-semibold text-brand-700">404</p>
      <h1 className="mt-4 text-4xl font-extrabold text-slate-900">Page Not Found</h1>
      <p className="mt-3 max-w-xl text-sm text-slate-600">
        The page you requested could not be found. Check the URL or return to the homepage.
      </p>
      <PrimaryButton sx={{ mt: 4 }} component={Link} to="/">
        Back to Home
      </PrimaryButton>
    </section>
  );
}
