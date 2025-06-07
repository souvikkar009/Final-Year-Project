import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;


const secret_key = "107022c4dbcfd5bb";
const org_id = "bc82b53a";
const access_key = "ee84f8bf8038ac78d3e4aa108b796177";
const redirect_uri = `http://localhost:3028/api/receive-data`;
const frontend_redirect_uri = `http://localhost:5174/`;

const App = () => {
  return (
    <div>
      <div
        className="cursor-pointer"
        onClick={async () => {
          await axios
            .get(
              `/api/share?org_id=${org_id}&access_key=${access_key}&redirect_uri=${redirect_uri}&frontend_redirect_uri=${frontend_redirect_uri}`,
              {
                headers: {
                  "secret-key": secret_key,
                },
              }
            )
            .then((res) => {
              const { form_page } = res.data;
              window.open(form_page, "_blank", "width=500,height=500");
              // console.log(form_page);
            })
            .catch((res) => console.log(res.response.data));
        }}
      >
        Click Here
      </div>
    </div>
  );
};

export default App;
