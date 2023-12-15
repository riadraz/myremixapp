import type { MetaFunction } from "@remix-run/node";
import { Link, Links } from "@remix-run/react";
import { NavLink } from "@remix-run/react";
import { Outlet } from "@remix-run/react";
import MusaRoute from "./musa";


export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div>

<div><h1>Root Index Page</h1></div>
        <div>
          <ul>

          <li><Link to="/accounts/new">Create Bank Accounts</Link></li>
          <li><Link to="/accounts/accountId">Accoount User Info</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/musa">Musa</Link></li>
          <li><Link to="/landing">Landing</Link></li>
          <li><Link to="/location/123/abc">Location</Link></li>
          </ul>
          
          
        </div>
        
    </div>
  );
}
