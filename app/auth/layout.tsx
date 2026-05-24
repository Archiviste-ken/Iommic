export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#030303] relative overflow-hidden px-6 py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#341010_0%,transparent_50%)] opacity-50 pointer-events-none" />
      <div className="absolute -top-40 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-red-900/25 blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.15),rgba(0,0,0,0.6))] pointer-events-none" />

      <div className="z-10 flex flex-col items-center gap-2 mb-10">
        <h1 className="text-4xl sm:text-[2.75rem] font-serif text-white tracking-[0.38em] font-bold">
          IOMMIC
        </h1>
        <p className="text-zinc-300 font-mono text-[10px] uppercase tracking-[0.4em]">
          TONE. WEIGHT. PROGRESSION.
        </p>
      </div>

      <div className="z-10 w-full max-w-md sm:max-w-lg">{children}</div>
    </div>
  );
}
