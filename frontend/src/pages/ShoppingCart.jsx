import { Fragment, useEffect, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch, useSelector } from "react-redux";
import { CloseCart } from "../redux/cart/Cart";

const products = [
  {
    id: 1,
    name: "Throwback Hip Bag",
    href: "#",
    color: "Salmon",
    price: "$90.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg",
    imageAlt:
      "Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.",
  },
  {
    id: 2,
    name: "Medium Stuff Satchel",
    href: "#",
    color: "Blue",
    price: "$32.00",
    quantity: 1,
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg",
    imageAlt:
      "Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.",
  },
  // More products...
];

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const open = useSelector((state) => state.cart.isOpen);
const storedCart = window.localStorage.getItem("cart");
const cartProduct = storedCart ? JSON.parse(storedCart) : products;
  const [cartProducts, setCartProducts] = useState(cartProduct);

  const total = cartProducts.reduce((acc, product) => {
    return acc + product.quantity * parseFloat(product.price.replace("$", ""));
  }, 0);
  useEffect(() => {
      const cart = JSON.stringify(cartProducts);
    window.localStorage.setItem("cart", cart);
  }, [cartProducts]);
  const handleClick = () => {
    dispatch(CloseCart());
    console.log("Cart is Close", open);
  };

  const handleQuantityChange = (productId, newQuantity) => {
    const updatedProducts = cartProducts.map((product) =>
      product.id === productId ? { ...product, quantity: newQuantity } : product
    );
    setCartProducts(updatedProducts);
  };

  const handleRemoveProduct = (productId) => {
    const updatedProducts = cartProducts.filter(
      (product) => product.id !== productId
    );
    setCartProducts(updatedProducts);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={close}>
        {/* Transition.Child components */}
        <div className="fixed inset-0 overflow-hidden">
          {/* Dialog content */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              {/* Transition.Child component */}
              <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                {/* Dialog content */}
                <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                  <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                    <div className="flex items-start justify-between">
                      <Dialog.Title className="text-lg font-medium text-gray-900">
                        Shopping cart
                      </Dialog.Title>
                      <div className="ml-3 flex h-7 items-center">
                        <button
                          type="button"
                          className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                          onClick={handleClick}>
                          <span className="absolute -inset-0.5" />
                          <span className="sr-only">Close panel</span>
                          <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flow-root">
                        <ul
                          role="list"
                          className="-my-6 divide-y divide-gray-200">
                          {cartProducts.map((product) => (
                            <li key={product.id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={product.imageSrc}
                                  alt={product.imageAlt}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <h3>
                                      <a href={product.href}>{product.name}</a>
                                    </h3>
                                    <p className="ml-4">{product.price}</p>
                                  </div>
                                  <p className="mt-1 text-sm text-gray-500">
                                    {product.color}
                                  </p>
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleQuantityChange(
                                        product.id,
                                        Math.max(product.quantity - 1, 1)
                                      )
                                    }>
                                    -
                                  </button>
                                  <p className="text-gray-500">
                                    Qty {product.quantity}
                                  </p>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      handleQuantityChange(
                                        product.id,
                                        Math.min(product.quantity + 1, 10)
                                      )
                                    }>
                                    +
                                  </button>
                                  <div className="flex">
                                    <button
                                      type="button"
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                      onClick={() =>
                                        handleRemoveProduct(product.id)
                                      }>
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <p>Subtotal</p>
                      <p>${total.toFixed(2)}</p>
                    </div>
                    <p className="mt-0.5 text-sm text-gray-500">
                      Shipping and taxes calculated at checkout.
                    </p>
                    <div className="mt-6">
                      <a
                        href="#"
                        className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">
                        Checkout
                      </a>
                    </div>
                    <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                      <p>
                        or{" "}
                        <button
                          type="button"
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                          onClick={handleClick}>
                          Continue Shopping{" "}
                          <span aria-hidden="true"> &rarr;</span>
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};

export default ShoppingCart;
