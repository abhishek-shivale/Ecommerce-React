import React, { useEffect, useRef, useState } from "react";
import ProfilePage from "../features/user/ProfilePage";
import { useForm } from "react-hook-form";
import { Toaster } from "react-hot-toast";
import { useSelector } from "react-redux";

function Profile() {
  const inputRef = useRef(null);
  const [user, setUser] = useState({
    email:'',
    name:'',
    password: '',
    address: ''
  });
  const userData = window.localStorage?.getItem("UserData");

  useEffect(() => {
    if (userData) {
      const localData = JSON.parse(userData);
      setUser(localData);
      console.log(user);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    
  });

  const onSubmit = () => {};
  const enableInput = () => {
    if (inputRef.current) {
      inputRef.current.disabled = false;
    }
  };
  const handleChange = (event) => {
    setInputValue({ email: event.target.value });
  }
  return (
    <div>
      <Toaster position="bottom-right" />
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex sm:mx-auto sm:w-full sm:max-w-sm ">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Edit your Profile
          </h2>
          <button
            onClick={enableInput}
            className="border border-black px-4 mx-4 mt-10 text-center text-xl font-bold leading-9 tracking-tight text-gray-900">
            Edit
          </button>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="mt-2">
              <input
                ref={inputRef}
                onChange={handleChange}
                value={user?.email}
                {...register("name", {})}
                type="text"
                placeholder="Your Name"
                className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}

              <input
                ref={inputRef}
                disabled
                {...register("email", {
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, // Email regex pattern
                })}
                type="email"
                autoComplete="email"
                placeholder="Email address"
                className="block w-full p-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.email && (
                <span className="text-red-500">
                  Please enter a valid email address
                </span>
              )}

              <input
                ref={inputRef}
                disabled
                {...register("address", {})}
                type="text"
                placeholder="Address"
                className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.address && (
                <span className="text-red-500">
                  Password must be at least 8 characters long
                </span>
              )}

              <input
                ref={inputRef}
                {...register("phonenumber", {
                  pattern: /^[0-9]{10}$/,
                })}
                disabled
                type="text"
                placeholder="Phone Number"
                className="block p-4 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
              {errors.phonenumber && (
                <span className="text-red-500">
                  Please enter a valid phone number (10 digits)
                </span>
              )}
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                Submit Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;
