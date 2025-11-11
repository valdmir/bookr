import { Link } from "@tanstack/react-router";
import { Library } from "lucide-react";
export default function Header() {
  return (
    <header className="relative top-0 z-10 bg-white px-6 py-5 lg:z-10 lg:flex lg:h-16 lg:items-center lg:px-8 lg:py-0 dark:border-white/10 dark:bg-zinc-950">
      <div className="mx-auto flex w-full items-center justify-between md:max-w-7xl">
        <div className="flex items-center space-x-15">
          <a href="/" className="relative flex items-center space-x-2">
            <Library className="h-6 w-auto" />
            <div className="text-sm font-medium text-zinc-950 dark:text-white">
              Bookr
            </div>
            <span className="mb-4 ml-0 rounded-sm bg-zinc-800 px-1.5 py-0.5 text-[10px] font-medium text-zinc-50 select-none">
              beta
            </span>
          </a>

          <div className="flex items-center space-x-6">
            <nav className="hidden items-center space-x-6 sm:flex">
              <a
                href="https://pro.motion-primitives.com/templates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                My Library
              </a>
              <a
                href="https://pro.motion-primitives.com/templates"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Reading
              </a>
              <Link
                to="/"
                href="/docs/text-effect"
                className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Finished
              </Link>
              <Link
                to="/"
                href="/docs/text-effect"
                className="text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
              >
                Wishlist
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
