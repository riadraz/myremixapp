import { Link } from "@remix-run/react";
export default function AccountsIndexRoute() {
    return (
      <div>
        <p>Accounts Index page</p>
        <Link to="/accounts/new">Saving Acc</Link><br />
        <Link to="/accounts/accountId">Current Acc</Link><br />
        <Link to="/">Foreign Acc</Link>
      </div>
    );
  }
  