import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import SearchInput from "./SearchInput";
import Greeting from "./Greeting";

function Navbar() {
  return (
    <div className="flex flex-row-reverse py-1 px-12 justify-between items-center backdrop-blur-none">
      <div className="ml-8 ">
        {/* Show the sign-in and sign-up buttons when the user is signed out */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-[#1E293B] hover:bg-[#0F172A]  text-white px-3 py-1 rounded-2xl">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        {/* Show the user button when the user is signed in */}
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: "w-14 h-14 ring-2 ring-[#8a8a8a]",
                userButtonPopoverCard: "rounded-xl shadow-xl",
                userButtonPopoverActionButton: "hover:bg-blue-50",
              },
            }}
          />
        </SignedIn>
      </div>
      <div className="ml-auto">
        <SearchInput />
      </div>
      <div>
        <h2>Hi Reza</h2>
        <h2 className="font-semibold text-2xl text-white">
          <Greeting />
        </h2>
      </div>
    </div>
  );
}

export default Navbar;
