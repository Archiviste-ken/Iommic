"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Guitar,
  Flame,
  CirclePlay,
  Sparkles,
  AudioWaveform,
} from "lucide-react";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-200 font-sans selection:bg-red-900 selection:text-white">
      {/* Subtle Grid Background */}
      <div className="fixed inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

      {/* Glowing Orb Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-red-900/10 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-orange-900/5 blur-[120px] rounded-full mix-blend-screen pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-50 flex items-center justify-between px-8 pt-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-serif font-bold text-white tracking-[0.2em]"
        >
          IOMMIC
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-6"
        >
          {isSignedIn ? (
            <Link
              href="/dashboard"
              className="text-[10px] sm:text-xs uppercase tracking-widest font-medium hover:text-red-500 transition-colors"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/auth/sign-in"
                className="hidden sm:block text-[10px] sm:text-xs uppercase tracking-widest font-medium text-zinc-400 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/auth/sign-up"
                className="text-[10px] sm:text-xs uppercase tracking-widest font-bold bg-white text-black px-6 py-3 rounded-full hover:bg-zinc-200 transition-transform hover:scale-105"
              >
                Start Learning
              </Link>
            </>
          )}
        </motion.div>
      </nav>

      {/* Main Hero */}
      <main className="relative z-10 px-8 lg:px-16 pt-24 pb-24 max-w-7xl mx-auto min-h-[85vh] flex items-center">
  <div className="grid lg:grid-cols-2 gap-16 items-center w-full">
    
    {/* LEFT CONTENT */}
    <div className="text-center lg:text-left">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-900/30 bg-red-900/10 text-red-500 text-xs font-mono mb-8"
      >
        <Sparkles size={14} />
        <span>INSPIRED BY THE LEGACY OF SIR TONY IOMMI</span>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-7xl lg:text-[7rem] font-black tracking-tight text-white uppercase leading-[0.9]"
      >
        Learn
        <br />
        Guitar
        <br />
        With
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-orange-700">
          {" "}Legacy.
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-8 text-lg text-zinc-400 leading-relaxed max-w-xl"
      >
        IOMMIC transforms guitar learning into a progressive journey of riffs,
        mastery, discipline, and musical identity.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-10 flex flex-col sm:flex-row gap-4"
      >
        <Link
          href={isSignedIn ? "/dashboard" : "/auth/sign-up"}
          className="flex items-center justify-center gap-3 bg-red-800 text-white px-8 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-red-700 transition-all hover:scale-105"
        >
          Begin Your Path
          <ArrowRight size={18} />
        </Link>

        <button className="border border-white/10 text-zinc-300 px-8 py-5 rounded-full uppercase tracking-[0.2em] text-sm hover:bg-white/5 transition-all">
          Explore Features
        </button>
      </motion.div>
    </div>

    {/* RIGHT IMAGE */}
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      className="relative flex justify-center"
    >
      {/* Glow */}
      <div className="absolute inset-0 bg-red-900/20 blur-[120px] rounded-full scale-110" />

      {/* Floating Animation */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative"
      >
        <Image
          src="/iommi-hero.png"
          alt="IOMMIC Hero"
          width={700}
          height={700}
          className="relative z-10 object-contain drop-shadow-[0_0_80px_rgba(120,0,0,0.35)]"
          priority
        />
      </motion.div>
    </motion.div>
  </div>
</main>

      {/* Premium Features Bento Grid */}
      <section className="relative z-10 px-8 lg:px-16 py-24 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 bg-[#09090B] border border-white/5 rounded-3xl p-10 lg:p-14 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <AudioWaveform
              className="text-red-700 mb-8"
              size={48}
              strokeWidth={1.5}
            />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              Smart Unlock System
            </h3>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
              Progressively unlock darker, heavier anthems as your technical
              proficiency grows. The platform adapts to your skill.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#09090B] border border-white/5 rounded-3xl p-10 lg:p-14 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-orange-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Flame
              className="text-orange-600 mb-8"
              size={48}
              strokeWidth={1.5}
            />
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                Iron Streaks
              </h3>
              <p className="text-zinc-500 leading-relaxed">
                Build unbroken chains of daily practice. Momentum is your
                heaviest weapon.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#09090B] border border-white/5 rounded-3xl p-10 lg:p-14 relative overflow-hidden group flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-red-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <CirclePlay
              className="text-red-700 mb-8"
              size={48}
              strokeWidth={1.5}
            />
            <div>
              <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">
                Mastery
              </h3>
              <p className="text-zinc-500 leading-relaxed">
                Iron out the dissonance. Master the spaces between the notes in
                complete darkness.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 bg-[#09090B] border border-white/5 rounded-3xl p-10 lg:p-14 relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <Guitar
              className="text-zinc-400 mb-8"
              size={48}
              strokeWidth={1.5}
            />
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 tracking-tight">
              Deep Analytics
            </h3>
            <p className="text-zinc-500 text-lg leading-relaxed max-w-md">
              Granular analytics on chord resonance, sustain, and accuracy.
              Visualize your relentless dedication.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/5 mt-12 py-16 px-8 lg:px-16 text-center flex flex-col items-center">
        <div className="text-2xl font-serif font-bold text-white tracking-[0.2em] mb-4">
          IOMMIC
        </div>
        <p className="text-zinc-600 text-xs font-mono uppercase tracking-[0.2em]">
          Tone. Weight. Legacy.
        </p>
      </footer>
    </div>
  );
}
