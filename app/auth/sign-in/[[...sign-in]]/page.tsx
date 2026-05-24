import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <SignIn path="/auth/sign-in" routing="path" signUpUrl="/auth/sign-up" />
    </div>
  );
}
