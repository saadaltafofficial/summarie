import NavLink from "./nav-link";
import { FileText } from "lucide-react";
import { Button } from "../ui/button";

export default function Header() {
  const isLoggedIn = false;

  return (
    <nav className="container flex items-center justify-between px-2 py-4 lg:px-8 mx-auto">
      <div className="flex ">
        <NavLink href="/" className="flex items-center gap-1 lg:gap-2 shrink-0">
          <FileText className="w-5 h-5 lg:w-8 lg:h-8 text-gray-900 hover:rotate-12 transform transition duration-200 ease-in-out" />
          <span className="lg:text-xl text-gray-900 font-bold">Summarie</span>
        </NavLink>
      </div>

      <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
        <NavLink href="/pricing">Pricing</NavLink>
        { isLoggedIn && <NavLink href="/dashboard">Your Summaries</NavLink>}
      </div>

      <div className="flex lg:justify-end">
        {isLoggedIn ? (
          <div className="flex gap-2 items-center">
            <NavLink href="/upload">Upload PDF</NavLink>
            <div>Pro</div>
            <Button>Sign Out</Button>
          </div>
        ) : (
          <div>
            <NavLink href="/login">Login</NavLink>
          </div>
        )}
      </div>
    </nav>
  );
}
