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

export const LoginFunction = async(data) => {
  const response = await axiosInstance.post("/login", {
    email: data.email,
    password: data.password,
  });
  return response;
};

export const ProfileInfo = async() => {
  const response = await axiosInstance.get("/info");
  return response
}

export const updateProfile = async(data) => {
  const response = await axiosInstance.put("/update",
     {
    email: data?.email,
    name: data?.name,
    password: data?.password,
    phonenumber: data?.phonenumber,
    address: data?.address
  }
  );
  return response
}