import { Outlet } from "@remix-run/react";
export default function MyRouteComponent() {
    return (
      <div>
        <h1>Accounts Page Layout</h1>
        <Outlet />
      </div>
    );
  }
  