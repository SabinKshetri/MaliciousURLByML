import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const AIengine = () => {
  const navigate = useNavigate();
  
  const data = {
    url: "",
  };
  const [inputData, setInputData] = useState(data);
const [message,setMessage]=useState("")
  const handleChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");

    try {
        if (!token) {
            alert("Please Login First !!");
            // Assuming navigate and setMessage are defined and accessible
            navigate("/login");
            setMessage("Please Login in First !");
            return;
        } else {
            const response = await axios.post(
                "test/api/aiengine/",
                inputData
            );
            console.log(response); // Log the entire response object
            if (response.status === 404) {
                alert("Your URL is Malicious/Safe");
            }
            // Handle other status codes if needed
        }
    } catch (error) {
        toast.error("Model ko APi Integrate Garna Baki xa !!", error);
        // Handle error appropriately, maybe show a user-friendly message
    }
};

  return (
    <>
      <div
        id="page-container"
        className="mx-auto  flex min-h-dvh w-full min-w-[320px] flex-col bg-gray-300 dark:bg-gray-900 dark:text-gray-100"
      >
        <main id="page-content" className="flex max-w-full flex-auto flex-col">
          <div className="relative mx-auto flex min-h-dvh w-full max-w-10xl items-center justify-center overflow-hidden p-4 lg:p-8">
            <section className="w-full max-w-xl py-6">
              <header className="mb-10 text-center">
                <h2 className="text-sm font-medium text-indigo-600 dark:text-gray-400">
                This URL may be malicious. Proceed with caution
                <br/>
                <h2 className="text-red-600">{message}</h2>
                </h2>
              </header>

              <div className="flex flex-col overflow-hidden rounded-lg bg-white shadow-sm dark:bg-gray-800 dark:text-gray-100">
                <div className="grow p-5 md:px-16 md:py-12">
                  <form
                    className="space-y-6"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-sm font-medium">
                        Check Your URL !
                      </label>
                      <input
                        type="text"
                        id="text"
                        name="url"
                        value={inputData.url}
                        onChange={handleChange}
                        placeholder="Enter your URL"
                        className="block w-full rounded-lg border border-gray-200 px-5 py-3 leading-6 placeholder-gray-500 focus:border-blue-500 focus:ring focus:ring-blue-500/50 dark:border-gray-600 dark:bg-gray-800 dark:placeholder-gray-400 dark:focus:border-blue-500"
                      />
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="inline-flex w-full items-center justify-center gap-2 rounded-lg border border-gray-700 bg-gray-900 px-6 py-3 font-semibold leading-6 text-white hover:border-gray-600 hover:bg-gray-700 hover:text-white focus:ring focus:ring-blue-400/50 active:border-gray-700 active:bg-gray-700 dark:focus:ring-blue-400/90"
                      >
                        <svg
                          className="hi-mini hi-arrow-uturn-right inline-block size-5 opacity-50"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.207 2.232a.75.75 0 00.025 1.06l4.146 3.958H6.375a5.375 5.375 0 000 10.75H9.25a.75.75 0 000-1.5H6.375a3.875 3.875 0 010-7.75h10.003l-4.146 3.957a.75.75 0 001.036 1.085l5.5-5.25a.75.75 0 000-1.085l-5.5-5.25a.75.75 0 00-1.06.025z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Check URL</span>
                      </button>
                      <h3 className="text-center text-red-500">Result Here !!</h3>
                    </div>
                  </form>
                </div>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
};

export default AIengine;