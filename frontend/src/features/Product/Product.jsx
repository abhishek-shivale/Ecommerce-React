import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import ShoppingCart from "../../pages/ShoppingCart";
import { OpenCard } from "../../redux/products/Productdetails.js";
import { getProduct } from "./product.js";
import ProductDetails from "../../pages/ProductDetails.jsx";

export default function Product() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  const fetchData = async () => {
    try {
      const { data } = await getProduct();
      if (data) {
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    dispatch(OpenCard());
  };

  return (
    <>
      <div className="bg-white">
        <ShoppingCart />
        <div className="mx-auto max-w-2xl px-4 sm:px-6 sm:py-10 lg:max-w-7xl lg:px-8">
          <h2 className="text-4xl font-bold tracking-tight text-indigo-800">
            Products
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div
                key={product._id}
                onClick={() => handleProductClick(product)} // Pass product to click handler
                className="group border cursor-pointer relative">
                <div className="aspect-h-1  aspect-w-1 w-full overflow-hidden rounded-md bg-gray-400 lg:aspect-none group-hover:opacity-75 lg:h-80">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4">
                  <div className="my-2 flex justify-around">
                    <h3 className="text-sm text-black">{product.name}</h3>
                    <div className="text-sm font-medium text-gray-900">
                      ${product.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      { selectedProduct && <ProductDetails product={selectedProduct} />}
    </>
  );
}
