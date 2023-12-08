import type { MetaFunction } from "@remix-run/node";
import { Link, Links } from "@remix-run/react";
import { NavLink } from "@remix-run/react";


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

          <li><NavLink to="{/accounts}">Accounts</NavLink></li>
          <li><NavLink to="{/token}">Data Token</NavLink></li>
          </ul>
          
          
        </div>

    </div>
  );
}
