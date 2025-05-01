import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Organization from "../pages/Organization";

const OrganizationLayout = () => {
  const pathname = useLocation().pathname.substring(1);
  return (
    <div>
      {pathname === "organization" && <Organization />}
      <Outlet />
    </div>
  );
};

export default OrganizationLayout;
