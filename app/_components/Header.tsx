import { ConnectButton } from "@rainbow-me/rainbowkit";
import Link from "next/link";
import { FaMountainSun } from "react-icons/fa6";
import { Toggle } from "./Toggle";

export function Header() {
  return (
    <header className="h-16 grid content-center">
      <nav className="flex justify-between content-center">
        <Link
          href="#"
          className="flex items-center gap-2 text-lg font-semibold"
          prefetch={false}
        >
          <FaMountainSun className="w-6 h-6" />
          <span className="sr-only">Acme Web3 App</span>
        </Link>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            gap: ".5rem"
          }}
        >
          <Toggle />
          <ConnectButton
            accountStatus={{
              smallScreen: "avatar",
              largeScreen: "full",
            }}
            showBalance={{
              smallScreen: false,
              largeScreen: true,
            }}
          />
        </div>
      </nav>
    </header>
  );
}
