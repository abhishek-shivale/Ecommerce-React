import axiosInstance from "../../app/axiosconfig";

export const RegisterFunction = (data) => {
  const response = axiosInstance.post("/register", {
    email: data.email,
    name: data.name,
    password: data.password,
    phonenumber: data.phonenumber,
  });

  return response;
};

export const LoginFunction = (data) => {
  const response = axiosInstance.post("/login", {
    email: data.email,
    name: data.name,
    password: data.password,
    phonenumber: data.phonenumber,
  });

  return response;
};
