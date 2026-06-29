import { Link } from "react-router";
import Logo from "../shared/logo";
import { Button } from "../ui/button";
import { ModeToggle } from "../shared/mode-toggle";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-6xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-3 md:gap-2">
            <ModeToggle />
            <Button asChild size={"lg"}>
              <Link to="/signup">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
