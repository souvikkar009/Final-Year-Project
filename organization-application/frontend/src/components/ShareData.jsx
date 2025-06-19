import axios from "axios";
import { useEffect } from "react";

const acadVaultServer = `http://localhost:3030`;

const secret_key = "189889af19a96c63";
const org_id = "096bae76";
const access_key = "eef5a722bd4f9b8e9d96bb9a53a74d86";
const redirect_uri = `http://localhost:3028/api/getdata`;
const frontend_redirect_uri = `http://localhost:4040/`;


/*
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

*/

const ShareData = () => {
  useEffect(() => {
    const handleMessage = (event) => {
      if (event.origin !== "http://localhost:3030") {
        return;
      }
      
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4">
      <div className="relative max-w-2xl w-full">
        {/* Background decorative elements */}
        <div className="absolute -top-4 -left-4 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-4 -right-4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        
        {/* Main card */}
        <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-2xl shadow-2xl shadow-slate-900/50 p-8 md:p-12">
          {/* Header section */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
              </svg>
            </div>
            
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent mb-4">
              Share Your Data
            </h1>
            
            <p className="text-slate-300 text-lg leading-relaxed max-w-md mx-auto">
              Securely share your information with our trusted platform. Your data will be handled with the highest level of security and privacy.
            </p>
          </div>

          {/* Features section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-green-500/20 rounded-lg mb-3">
                <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Secure</h3>
              <p className="text-slate-400 text-sm">End-to-end encryption</p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-500/20 rounded-lg mb-3">
                <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Fast</h3>
              <p className="text-slate-400 text-sm">Quick processing</p>
            </div>
            
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-purple-500/20 rounded-lg mb-3">
                <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8V7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold mb-1">Private</h3>
              <p className="text-slate-400 text-sm">Your data stays safe</p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <button
              onClick={openShareWindow}
              className="group cursor-pointer relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white overflow-hidden rounded-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              {/* Button background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-size-200 bg-pos-0 group-hover:bg-pos-100 transition-all duration-500"></div>
              
              {/* Button shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              
              {/* Button content */}
              <span className="relative flex items-center space-x-3">
                <svg className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                </svg>
                <span>Share Data Securely</span>
                <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
            
            <p className="text-slate-500 text-sm mt-4">
              A secure popup window will open to collect your information
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareData;
