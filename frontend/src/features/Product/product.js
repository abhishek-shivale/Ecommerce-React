import axiosInstance from "../../app/axiosconfig";

export const getProduct = () =>{
    const res = axiosInstance.get("/product");
    return res
}


export const getsortProduct = (sort, color, size, category) => {
    const colorParam = color ? color.join("&color=") : "";
    const sizeParam = size ? size.join("&size=") : "";
    const categoryParam = category ? category.join("&category=") : "";
    const url = `/product/sort?sort=${sort}&color=${colorParam}&size=${sizeParam}&category=${categoryParam}`;
  const response = axiosInstance.get(`${url}`);
  return response;
};