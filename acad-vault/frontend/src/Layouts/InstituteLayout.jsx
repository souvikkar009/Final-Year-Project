import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Institute from "../pages/Institute";

const InstituteLayout = () => {
  const pathname = useLocation().pathname.substring(1);
  return (
    <div>
      {pathname === "institute" && <Institute />}
      <Outlet />
    </div>
  );
};

export default InstituteLayout;
