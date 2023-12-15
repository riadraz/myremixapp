import { Outlet } from "@remix-run/react";
import MusaIndexRoute from "./musa";


export default function MusaRoute() {
  return (
    <div>
      This is Musa Layout
      <MusaIndexRoute />
      <Outlet />
    </div>
  );
}