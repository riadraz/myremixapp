import { Outlet } from "@remix-run/react";

export default function AccountsRoute() {
  return (
    <div>
      <h1>Account route page</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
