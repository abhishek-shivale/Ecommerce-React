import axiosInstance from "../../app/axiosconfig";

export const getProduct = () =>{
    const res = axiosInstance.get("/product");
    return res
}
