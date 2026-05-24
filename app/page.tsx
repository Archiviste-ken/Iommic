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
      <main className="relative z-10 px-8 lg:px-16 pt-32 pb-24 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-900/30 bg-red-900/10 text-red-500 text-xs font-mono mb-8"
        >
          <Sparkles size={14} />
          <span>THE NEW ERA OF GUITAR MASTERY</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl md:text-7xl lg:text-[9rem] font-black tracking-tighter text-white uppercase leading-[0.85] mb-8"
        >
          Tone. Weight.
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-900">
            Progression.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 text-lg md:text-xl text-zinc-400 max-w-2xl font-light leading-relaxed"
        >
          An atmospheric guitar-learning ecosystem inspired by the undisputed
          master of the heavy riff. Learn with purpose, play with soul.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 flex flex-col sm:flex-row gap-4 w-full justify-center"
        >
          <Link
            href={isSignedIn ? "/dashboard" : "/auth/sign-up"}
            className="flex items-center justify-center gap-4 bg-red-800 text-white px-10 py-5 rounded-full font-bold uppercase tracking-[0.2em] text-sm hover:bg-red-700 transition flex-1 max-w-[320px] mx-auto sm:mx-0 shadow-[0_0_40px_-10px_rgba(153,27,27,0.5)] hover:shadow-[0_0_60px_-10px_rgba(153,27,27,0.7)] group"
          >
            Begin Your Path
            <ArrowRight
              size={18}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </motion.div>
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
