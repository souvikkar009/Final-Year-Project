import axios from "axios";
import { useEffect } from "react";

const acadVaultServer = `http://localhost:3030`;

const secret_key = "189889af19a96c63";
const org_id = "096bae76";
const access_key = "eef5a722bd4f9b8e9d96bb9a53a74d86";
const redirect_uri = `http://localhost:3028/api/getdata`;
const frontend_redirect_uri = `http://localhost:4040/`;

const ShareData = () => {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== "http://localhost:3030") {
        return;
      }

      // const encodedStudentData = event.data.studentData;

      // const decodedStudentData = encodedStudentData.replace(/&#34;/g, '"');
      // const studentData = JSON.parse(decodedStudentData);
      // console.log(studentData);

      const status = event.data.status;
      // setIsDataShared(status === "success");
      console.log(status);
      status === "success"
        ? window.location.replace("/thankyou")
        : window.location.replace("/failure");
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const openShareWindow = async () => {
    await axios
      .get(
        `${acadVaultServer}/api/share?org_id=${org_id}&access_key=${access_key}&redirect_uri=${redirect_uri}&frontend_redirect_uri=${frontend_redirect_uri}`,
        {
          headers: {
            "secret-key": secret_key,
          },
        }
      )
      .then((res) => {
        const { form_page } = res.data;
        window.open(form_page, "_blank", "width=600,height=600");
        console.log(form_page);
      })
      .catch((res) => console.log(res.response.data));
  };
  return (
    <div>
      <div className="w-4xl mt-12 mx-auto p-8 rounded border border-slate-700 shadow-lg shadow-slate-400 text-white">
        <div className="mt-4 text-center text-2xl font-bold">
          Click the Button to Share Your Data
        </div>
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={openShareWindow}
            className="text-xl bg-sky-600 py-2 px-4 rounded-lg cursor-pointer hover:bg-sky-700"
          >
            Share Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShareData;
