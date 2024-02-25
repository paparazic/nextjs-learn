import React from "react";
import { UserButton, SignedIn, SignedOut, SignInButton } from "@clerk/nextjs";

const Home = () => {
  return (
    <main>
      <nav className="flex justify-between h-5">
        <SignedIn>
          {/* Mount the UserButton component */}
          <UserButton />
        </SignedIn>
        <SignedOut>
          {/* Signed out users get sign in button */}
          <SignInButton />
        </SignedOut>
      </nav>
      Home
    </main>
  );
};

export default Home;
