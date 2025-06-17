import axios from "axios";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes/AppRouter";
import { AuthProvider } from "./routes/AuthContext";

axios.defaults.baseURL = "http://localhost:3028";
axios.defaults.withCredentials = true;

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={AppRouter} />
    </AuthProvider>

    // <div>
    //   <div
    //     className="cursor-pointer"
    //     onClick={async () => {
    //       await axios
    //         .get(
    //           `/api/share?org_id=${org_id}&access_key=${access_key}&redirect_uri=${redirect_uri}&frontend_redirect_uri=${frontend_redirect_uri}`,
    //           {
    //             headers: {
    //               "secret-key": secret_key,
    //             },
    //           }
    //         )
    //         .then((res) => {
    //           const { form_page } = res.data;
    //           window.open(form_page, "_blank", "width=500,height=500");
    //           // console.log(form_page);
    //         })
    //         .catch((res) => console.log(res.response.data));
    //     }}
    //   >
    //     Click Here
    //   </div>
    // </div>
  );
};

export default App;
