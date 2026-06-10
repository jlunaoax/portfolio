export default function Footer() {
  return (
    <footer className="py-8 px-6 bg-slate-900 text-slate-400 text-center text-sm">
      <p>
        © {new Date().getFullYear()} Javier Luna. Built with Next.js, TypeScript & Tailwind CSS.
      </p>
    </footer>
  );
}
