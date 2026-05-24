"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  AudioWaveform,
  Flame,
  Guitar,
  Layers,
  Sparkles,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@clerk/nextjs";

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  const { isSignedIn } = useAuth();

  return (
    <div className="min-h-screen bg-[#030303] text-zinc-200">
      <div className="fixed inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:26px_26px]" />
      <div className="fixed inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,#2b0a0a_0%,transparent_50%)]" />
      <div className="fixed -top-48 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-red-900/20 blur-[140px]" />
      <div className="fixed -bottom-56 right-[-10%] h-[520px] w-[520px] rounded-full bg-orange-900/10 blur-[160px]" />

      <header className="relative z-20 flex items-center justify-between px-6 pt-6 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl font-serif font-bold tracking-[0.35em] text-white"
        >
          IOMMIC
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-4"
        >
          {isSignedIn ? (
            <Link
              href="/dashboard"
              className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-zinc-400 hover:text-white transition-colors"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href="/auth/sign-in"
                className="hidden sm:block text-[10px] sm:text-xs uppercase tracking-[0.3em] text-zinc-500 hover:text-white transition-colors"
              >
                Sign In
              </Link>
              <Link
                href="/auth/sign-up"
                className="text-[10px] sm:text-xs uppercase tracking-[0.35em] font-bold bg-white text-black px-5 py-3 rounded-full hover:bg-zinc-200 transition-transform hover:scale-105"
              >
                Start Learning
              </Link>
            </>
          )}
        </motion.div>
      </header>

      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-16 lg:px-16">
        <section className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 min-h-[78vh]">
          <div className="text-center lg:text-left">
            <motion.div
              {...fadeUp}
              transition={{ duration: 0.7 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-red-900/30 bg-red-900/10 text-red-400 text-[10px] font-mono uppercase tracking-[0.35em] mb-8"
            >
              <Sparkles size={12} />
              Inspired by the legacy of Tony Iommi
            </motion.div>

            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-5xl sm:text-6xl lg:text-[6.5rem] font-black tracking-tight text-white uppercase leading-[0.9]"
            >
              Learn guitar
              <br />
              with purpose
              <br />
              build a
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-red-500 to-red-900">
                legacy
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mt-8 text-lg text-zinc-400 leading-relaxed max-w-xl"
            >
              IOMMIC is a dark, premium guitar-learning platform built around
              discipline and progression. No shortcuts. No noise. Just mastery.
            </motion.p>

            <motion.div
              {...fadeUp}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link
                href={isSignedIn ? "/dashboard" : "/auth/sign-up"}
                className="group inline-flex items-center justify-center gap-3 bg-red-800 text-white px-8 py-5 rounded-full font-bold uppercase tracking-[0.3em] text-xs hover:bg-red-700 transition-all shadow-[0_0_50px_-15px_rgba(153,27,27,0.7)]"
              >
                Begin Your Path
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </Link>
              <Link
                href="#modules"
                className="inline-flex items-center justify-center border border-white/10 text-zinc-300 px-8 py-5 rounded-full uppercase tracking-[0.3em] text-xs hover:bg-white/5 transition-all"
              >
                Explore Features
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9 }}
            className="relative flex items-center justify-center"
          >
            <div className="absolute h-[520px] w-[520px] rounded-full bg-red-900/20 blur-[140px]" />
            <div className="relative w-full max-w-[520px] aspect-square rounded-[36px] border border-white/10 bg-black/60 backdrop-blur-xl shadow-[0_60px_160px_-80px_rgba(255,0,0,0.7)]">
              <div className="absolute inset-0 rounded-[36px] bg-[linear-gradient(120deg,transparent,rgba(255,255,255,0.06),transparent)] opacity-80" />
              <Image
                src="/Iommi-hero.png"
                alt="IOMMIC Guitar"
                fill
                priority
                className="object-contain p-8 drop-shadow-[0_0_120px_rgba(180,0,0,0.5)]"
              />
              <div className="absolute inset-0 rounded-[36px] border border-white/5" />
            </div>
          </motion.div>
        </section>

        <section id="modules" className="py-20">
          <div className="flex items-center justify-between gap-6 mb-10 flex-wrap">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
                Studio modules
              </h2>
              <p className="text-zinc-500 mt-2 max-w-xl">
                A focused set of tools that turn practice into progress.
              </p>
            </div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              90s modern / cinematic
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <AudioWaveform size={36} strokeWidth={1.4} />,
                title: "Smart Unlock",
                desc: "Progress-based song releases that reward real technique.",
              },
              {
                icon: <Flame size={36} strokeWidth={1.4} />,
                title: "Streak Engine",
                desc: "Build daily chains and reinforce discipline.",
              },
              {
                icon: <Guitar size={36} strokeWidth={1.4} />,
                title: "Chord Mastery",
                desc: "Transition training that hardens rhythm and timing.",
              },
              {
                icon: <Layers size={36} strokeWidth={1.4} />,
                title: "Learning Paths",
                desc: "Personalized programs that adapt to your pace.",
              },
              {
                icon: <Sparkles size={36} strokeWidth={1.4} />,
                title: "Riff Discovery",
                desc: "Curated riffs that match your evolving ability.",
              },
            ].map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#0b0b0f] p-8"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-700" />
                <div className="relative z-10 text-red-500 mb-6">
                  {card.icon}
                </div>
                <h3 className="relative z-10 text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="relative z-10 mt-3 text-sm text-zinc-500">
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="py-20">
          <div className="grid gap-10 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Foundation",
                text: "Chords and rhythm built on repeatable drills.",
              },
              {
                step: "02",
                title: "Mastery",
                text: "Transitions refined through strict timing practice.",
              },
              {
                step: "03",
                title: "Legacy",
                text: "Unlock songs, track streaks, and grow into heavier sets.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-white/10 bg-black/50 p-8"
              >
                <div className="text-red-500 text-xs font-mono uppercase tracking-[0.4em]">
                  {item.step}
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-zinc-500">{item.text}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="relative z-10 mt-8 border-t border-white/5 py-14 text-center">
        <div className="text-2xl font-serif font-bold tracking-[0.35em] text-white">
          IOMMIC
        </div>
        <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-zinc-500">
          TONE. WEIGHT. PROGRESSION.
        </p>
      </footer>
    </div>
  );
}
