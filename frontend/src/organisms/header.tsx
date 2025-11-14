import { Link, useRouterState } from "@tanstack/react-router";
import { Library, Plus } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
export default function Header() {
  const routerState = useRouterState();
  const currentRoute = routerState.matches.at(-1); // last matched route
  const showDefaultHeader = currentRoute?.context?.showDefaultHeader ?? true;
  return (
    <header className="relative top-0 z-10 px-6 py-5 lg:z-10 lg:flex lg:h-16 lg:items-center content-center lg:px-8 lg:py-0 dark:border-white/10 dark:bg-zinc-950">
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
          {showDefaultHeader && (
            <div className="flex items-center space-x-6">
              <nav className="hidden items-center space-x-6 sm:flex">
                <a
                  href="/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-medium text-zinc-700 hover:text-zinc-950 dark:text-zinc-300 dark:hover:text-white"
                >
                  My Library
                </a>
                <a
                  href="/"
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
          )}
        </div>

        <div className="flex items-center gap-3">
          {showDefaultHeader && (
            <Button asChild>
              <Link to="/add-book">
                <Plus className="h-4 w-4" />
                Add Book
              </Link>
            </Button>
          )}
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
