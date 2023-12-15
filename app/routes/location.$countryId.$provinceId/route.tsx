import { Outlet, useParams } from "@remix-run/react";
import TopAddComponent from "./topaddcontents";
import SidebarComponent from "./sidebarcontent";
import FooterComponent from "./somefooter";

export default function LangRoute() {
    const { countryId } = useParams();
    const { provinceId } = useParams();
  return (
    <div>
        <ul>
            <li><div>Country id "{countryId}".!!.</div></li>
            <li><div>Province id "{provinceId}"."!!!".</div></li>
        </ul>
        <TopAddComponent /><br /> <SidebarComponent /><br />  <FooterComponent />
        <Outlet />
    </div>
  );
}