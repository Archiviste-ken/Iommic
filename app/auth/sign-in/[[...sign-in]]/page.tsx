import { SignIn } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const appearance = {
  variables: {
    colorPrimary: "#dc2626",
    borderRadius: "1rem",
  },

  elements: {
    rootBox: "w-full",

    card: `
      bg-[#111114]/95
      backdrop-blur-2xl
      border
      border-red-900/20
      shadow-[0_0_120px_rgba(120,0,0,0.25)]
      rounded-[28px]
      p-2
    `,

    cardBox: "p-8 sm:p-10",

    headerTitle: `
      text-white
      text-3xl
      font-bold
      tracking-[0.18em]
      uppercase
      text-center
      font-serif
    `,

    headerSubtitle: `
      text-zinc-400
      text-xs
      uppercase
      tracking-[0.3em]
      text-center
      mt-3
    `,

    socialButtonsBlockButton: `
      bg-black/40
      border
      border-white/10
      hover:bg-white/5
      text-white
      rounded-xl
      transition-all
    `,

    socialButtonsBlockButtonText: `
      text-white
      font-medium
    `,

    dividerLine: "bg-white/10",

    dividerText: `
      text-zinc-500
      uppercase
      tracking-[0.25em]
      text-[10px]
    `,

    formFieldLabel: `
      text-zinc-300
      uppercase
      tracking-[0.25em]
      text-[10px]
      font-medium
    `,

    formFieldInput: `
      bg-black/40
      border
      border-white/10
      text-white
      placeholder:text-zinc-500
      rounded-xl
      h-12
      focus:border-red-700
      focus:ring-2
      focus:ring-red-800/40
      transition-all
    `,

    formButtonPrimary: `
      bg-gradient-to-r
      from-red-900
      via-red-700
      to-red-900
      hover:from-red-700
      hover:to-red-600
      text-white
      font-bold
      uppercase
      tracking-[0.2em]
      text-xs
      rounded-full
      h-12
      shadow-[0_0_40px_rgba(185,28,28,0.35)]
      transition-all
      hover:scale-[1.02]
    `,

    footerActionText: "text-zinc-500",

    footerActionLink: `
      text-red-400
      hover:text-red-300
      font-semibold
    `,

    formFieldHintText: "text-zinc-500",
    formFieldErrorText: "text-red-400",
  },
};

export default function SignInPage() {
  return (
    <div className="w-full flex items-center justify-center">
      <SignIn
        appearance={appearance}
        path="/auth/sign-in"
        routing="path"
        signUpUrl="/auth/sign-up"
      />
    </div>
  );
}
