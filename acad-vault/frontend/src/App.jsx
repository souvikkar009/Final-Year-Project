import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Layouts/RootLayout";
import StudentRegister from "./components/StudentRegister";
import StudentLogin from "./components/StudentLogin";
import StudentLayout from "./Layouts/StudentLayout";
import OrganizationLayout from "./Layouts/OrganizationLayout";
import OrganizationRegister from "./components/OrganizationRegister";
import OrganizationLogin from "./components/OrganizationLogin";
import InstituteLogin from "./components/InstituteLogin";
import InstituteLayout from "./Layouts/InstituteLayout";
import InstituteRegister from "./components/InstituteRegister";
import OrganizationAccessKeyGeneration from "./components/OrganizationAccessKeyGeneration";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="student" element={<StudentLayout />}>
          <Route path="register" element={<StudentRegister />}></Route>
          <Route path="login" element={<StudentLogin />}></Route>
        </Route>
        <Route path="institute" element={<InstituteLayout />}>
          <Route path="login" element={<InstituteLogin />}></Route>
          <Route path="register" element={<InstituteRegister />}></Route>
        </Route>
        <Route path="organization" element={<OrganizationLayout />}>
          <Route path="register" element={<OrganizationRegister />}></Route>
          <Route path="login" element={<OrganizationLogin />}></Route>
          <Route
            path="get_accesskey"
            element={<OrganizationAccessKeyGeneration />}
          ></Route>
        </Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}
export default App;
