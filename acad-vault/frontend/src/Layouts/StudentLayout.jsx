import React from "react";
import Student from "../pages/Student";
import { Outlet, useLocation } from "react-router-dom";

const StudentLayout = () => {
  const pathname = useLocation().pathname.substring(1);
  return (
    <div>
      {pathname === "student" && <Student />}
      <Outlet />
    </div>
  );
};

export default StudentLayout;
