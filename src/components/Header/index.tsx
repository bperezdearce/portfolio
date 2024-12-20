import Link from "next/link";
import Navbar from "../Navbar";
import { Button } from "../ui/button";
import MobileNavbar from "../MobileNavbar";

export const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            PDA<span className="text-accent-default">.</span>
          </h1>
        </Link>

        {/* desktop nav & hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Navbar />
          <Link href="/contact">
            <Button>hire me</Button>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="xl:hidden">
          <MobileNavbar />
        </div>
      </div>
    </header>
  );
};
