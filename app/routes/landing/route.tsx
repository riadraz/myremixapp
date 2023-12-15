import { Outlet } from "@remix-run/react";
import HeaderRoute from "./header";
import FooterRoute from "./footer";

export default function LandingRoute() {
  return (
    <div>
        <ul>
            <li><div><HeaderRoute /></div></li>
            <li><div><FooterRoute /></div></li>
        </ul>
        
        <Outlet />
    </div>
  );
}