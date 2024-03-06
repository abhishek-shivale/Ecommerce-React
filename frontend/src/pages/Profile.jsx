import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { ProfileInfo } from "../features/auth/auth";

function Profile() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    email: '',
    address: '',
    phonenumber:'',
  })

  async function datauser  () {
    try {
      const data = await ProfileInfo();
      if (data.data.success === true) {
        setUser({
          name: data.data.message.name,
          email: data.data.message.email,
          address: data.data.message.address,
          phonenumber: data.data.message.phonenumber,
        });

        
       
      }
    } catch (error) {
      if (error.response) {
        toast.error(error.response.data.message);
      } else {
        console.log(error);
        toast.error("Network error. Please try again later.");
      }
    }
  }
  useEffect(() => {
      datauser()
  }, []);

  return (
    <div>
      <Toaster position="bottom-right" />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Profile
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div className="mt-2">
              <div className="m-2">Name</div>
              <input
                value={user?.name}
                disabled
                type="text"
                placeholder="Your Name"
                className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />

              <div className="m-2">email</div>
              <input
                value={user.email}
                disabled
                type="email"
                autoComplete="email"
                placeholder="Email address"
                className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div className="m-2">address</div>
              <input
                value={user?.address}
                disabled
                type="text"
                placeholder="Address"
                className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              <div className="m-2">phonenumber</div>
              <input
                value={user?.phonenumber}
                disabled
                type="text"
                placeholder="Phone Number"
                className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>

            <div>
              <button
                onClick={() => {
                  navigate("/user/profile/edit");
                }}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Edit Your Profile
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
