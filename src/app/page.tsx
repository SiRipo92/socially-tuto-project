import { Button } from "@/components/ui/button";
import { SignedOut, SignedIn, SignInButton, UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
  <div>
      <SignedOut>
        <SignInButton mode="modal">
          <Button> Sign In </Button>
        </SignInButton>
      </SignedOut>

      <SignedIn>
        <UserButton />
      </SignedIn>
  </div>
  );
}
