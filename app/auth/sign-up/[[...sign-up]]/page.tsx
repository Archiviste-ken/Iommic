import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="w-full flex items-center justify-center p-4">
      <SignUp path="/auth/sign-up" routing="path" signInUrl="/auth/sign-in" />
    </div>
  );
}
