import { createRootRouteWithContext, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import Header from "@/organisms/header";
import { Toaster } from "@/components/ui/sonner";

function RootComponent() {
  return (
    <>
      <Header />
      <Outlet />
      <Toaster />
      <TanStackRouterDevtools />
    </>
  );
}

interface MyRouterContext {
  showDefaultHeader: boolean;
}
export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
});
