import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "IOMMIC | Tone. Weight. Progression.",
  description:
    "A dark, atmospheric guitar-learning ecosystem inspired by the undisputed master of the heavy riff.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#030303] text-[#EDEDED]`}
      >
        <ClerkProvider
          appearance={{
            baseTheme: dark,
            variables: {
              colorPrimary: "#991b1b",
              colorBackground: "#09090b",
              colorInputBackground: "#171717",
              colorInputText: "#ffffff",
              colorText: "#f5f5f5",
              colorTextSecondary: "#a3a3a3",
              borderRadius: "0.5rem",
            },
            elements: {
              card: "bg-zinc-950 border border-white/5 shadow-2xl",
              headerTitle:
                "text-white font-bold font-serif text-2xl tracking-[0.2em] uppercase flex justify-center mb-1",
              headerSubtitle:
                "text-zinc-500 font-mono text-xs flex justify-center",
              formButtonPrimary:
                "bg-red-800 hover:bg-red-700 text-white font-bold uppercase tracking-widest transition-all",
              footerActionLink: "text-red-500 hover:text-red-400 font-semibold",
              formFieldLabel:
                "text-zinc-300 font-mono text-[10px] uppercase tracking-widest mb-1",
              formFieldInput:
                "bg-zinc-900 border-zinc-800 text-white placeholder:text-zinc-600 focus:border-red-800 focus:ring-red-800",
              socialButtonsBlockButton:
                "border-zinc-800 hover:bg-zinc-900 text-white",
              socialButtonsBlockButtonText: "font-medium text-white",
              dividerLine: "bg-zinc-800",
              dividerText:
                "text-zinc-500 font-mono text-[10px] uppercase tracking-widest",
            },
          }}
        >
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
