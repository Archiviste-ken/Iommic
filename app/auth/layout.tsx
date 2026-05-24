export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-[#050505] relative overflow-hidden">
      {/* Subtle moody gradient for atmosphere */}
      <div className="absolute top-0 w-full h-[500px] bg-gradient-to-b from-[#1a0505] to-transparent opacity-30 pointer-events-none" />

      <div className="z-10 flex flex-col items-center mb-8">
        <h1 className="text-4xl font-serif text-[#E5E5E5] tracking-[0.3em] font-bold">
          IOMMIC
        </h1>
        <p className="text-[#888888] font-mono text-xs uppercase tracking-widest mt-2">
          Tone. Weight. Progression.
        </p>
      </div>

      <div className="z-10 w-full max-w-md">{children}</div>
    </div>
  );
}
