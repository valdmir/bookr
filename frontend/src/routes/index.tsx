import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { createFileRoute } from "@tanstack/react-router";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import BookList from "@/molecules/book-list";
import { SearchForm } from "@/molecules/search-form";
import { useEffect } from "react";
import { toast } from "sonner";

function IndexPage() {
  
  return (
    <div className="mx-auto flex w-full flex-col justify-between md:max-w-7xl">
      <div className="flex flex-1 flex-col gap-4">
        <h2 className="p-2 scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0">
          My Library
        </h2>
        <div className="flex w-full max-w-7xl gap-4">
          <SearchForm className="w-full" />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <span className="hidden lg:inline">
                  Format: <span className="font-bold">All</span>
                </span>
                <span className="lg:hidden">Columns</span>
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuCheckboxItem
                key={1}
                className="capitalize"
                checked={true}
                // onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                Physical
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <span className="hidden lg:inline">
                  Format: <span className="font-bold">All</span>
                </span>
                <span className="lg:hidden">Columns</span>
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuCheckboxItem
                key={1}
                className="capitalize"
                checked={true}
                // onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                Physical
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm">
                <span className="hidden lg:inline">
                  Format: <span className="font-bold">All</span>
                </span>
                <span className="lg:hidden">Columns</span>
                <ChevronDownIcon />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuCheckboxItem
                key={1}
                className="capitalize"
                checked={true}
                // onCheckedChange={(value) => column.toggleVisibility(!!value)}
              >
                Physical
              </DropdownMenuCheckboxItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
      <div className="flex pt-50">
        <BookList />
      </div>
    </div>
  );
}

export const Route = createFileRoute("/")({
  component: IndexPage,
  loader: () => ({
    showDefaultHeader: true,
  }),
});
