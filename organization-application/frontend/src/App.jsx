import React from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3030";
axios.defaults.withCredentials = true;


// s ky - 62b508519bc93bd6

const secret_key = "fb9c07e77b10eeae";
const org_id = "d60d6ce6";
const access_key = "6b1cc194ea9198140dc9d4fc1b46845a";
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
