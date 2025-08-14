import { useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaArrowLeft, FaShoppingCart, FaLock, FaComments, FaTruck } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const navigate = useNavigate();

  // state me data 
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "T-shirts with multiple colors, for men and lady",
      image: "/images/home/d1.png",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: 78.99,
      qty: 9,
    },
    {
      id: 2,
      name: "T-shirts with multiple colors, for men and lady",
      image: "/images/home/r6.png",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Best Factory LLC",
      price: 39.0,
      qty: 3,
    },
    {
      id: 3,
      name: "T-shirts with multiple colors, for men and lady",
      image: "/images/home/r5.png",
      size: "medium",
      color: "blue",
      material: "Plastic",
      seller: "Artel Market",
      price: 170.5,
      qty: 1,
    },
  ]);

  const [savedItems, setSavedItems] = useState([
    {
      id: 4,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      image: "/images/home/12.png",
    },
    {
      id: 5,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      image: "/images/home/11.png",
    },
    {
      id: 6,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      image: "/images/home/13.png",
    },
    {
      id: 7,
      name: "GoPro HERO6 4K Action Camera - Black",
      price: 99.5,
      image: "/images/home/15.png",
    },
  ]);

  // remove 
  const handleRemoveFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // save 
  const handleSaveForLater = (item) => {
    setCartItems(cartItems.filter((i) => i.id !== item.id));
    setSavedItems([...savedItems, item]);
  };

  // add to cart
  const handleMoveToCart = (item) => {
    setSavedItems(savedItems.filter((i) => i.id !== item.id));
    setCartItems([...cartItems, { ...item, qty: 1 }]);
  };

  // remove all
  const handleRemoveAll = () => {
    setCartItems([]);
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.qty, 0);
  const discount = 60;
  const tax = 14;
  const total = subtotal - discount + tax;

  return (
    <div>
      <Header />
      <div className="min-h-screen bg-[#f5f7fa] py-10 px-4">
        <div className="max-w-[1210px] mx-auto flex flex-col lg:flex-row gap-6 items-start">
          {/* Lft Section */}
          <div className="flex-1">
            <div className="bg-white border border-[#BDC1C8] p-6 rounded-lg">
              <h2 className="text-xl font-semibold mb-4">
                My cart ({cartItems.length})
              </h2>

              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 py-4 border-b border-gray-200 last:border-0"
                >
                  {/* p.Info */}
                  <div className="flex items-start gap-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-contain border border-gray-300 rounded hover:border-blue-500 hover:scale-[1.02] transition-transform duration-200"
                    />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">
                        Size: {item.size}, Color: {item.color}, Material:{" "}
                        {item.material}
                      </p>
                      <p className="text-sm text-gray-400">
                        Seller: {item.seller}
                      </p>

                      <div className="mt-2 flex gap-2">
                        <button
                          onClick={() => handleRemoveFromCart(item.id)}
                          className="text-xs border border-red-500 text-red-500 px-2 py-1 rounded hover:bg-red-50"
                        >
                          Remove
                        </button>
                        <button
                          onClick={() => handleSaveForLater(item)}
                          className="text-xs border border-blue-500 text-blue-500 px-2 py-1 rounded hover:bg-blue-50"
                        >
                          Save for later
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="flex items-center justify-between w-full sm:w-auto gap-4">
                    <p className="font-semibold whitespace-nowrap">
                      ${item.price.toFixed(2)}
                    </p>
                    <select
                      defaultValue={item.qty}
                      className="border border-gray-300 rounded px-2 py-1 text-sm"
                    >
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
                        <option key={n} value={n}>
                          Qty: {n}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              ))}

              <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-3">
                <button
                  className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
                  onClick={() => navigate("/list")}
                >
                  <FaArrowLeft />
                  Back to shop
                </button>
                <button
                  onClick={handleRemoveAll}
                  className="text-sm text-red-600 hover:underline"
                >
                  Remove all
                </button>
              </div>
            </div>
          </div>

          {/* Rht Section */}
          <div className="w-full lg:w-[300px] bg-white border border-[#BDC1C8] p-6 rounded-lg space-y-6">
            <div>
              <p className="text-sm font-medium mb-2">Have a coupon?</p>
              <div className="flex">
                <input
                  type="text"
                  placeholder="Add coupon"
                  className="flex-1 border border-gray-300 rounded-l px-3 py-1 text-sm"
                />
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-r text-sm">
                  Apply
                </button>
              </div>
            </div>

            <div className="text-sm space-y-2 border-t pt-4">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Discount:</span>
                <span>- ${discount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-green-600">
                <span>Tax:</span>
                <span>+ ${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold pt-2 border-t">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded text-sm font-medium">
              Checkout
            </button>
          </div>
        </div>

        {/* --------*/}
        <div className="max-w-[1210px] mx-auto mt-10 bg-white border border-[#E0E6ED] rounded-lg p-6">
          <h3 className="font-semibold text-gray-700 mb-4">Saved for later</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {savedItems.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-200 rounded-md p-4 hover:border-blue-500 "
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-40 object-contain mb-3"
                />
                <p className="text-sm font-semibold mb-1">
                  ${item.price.toFixed(2)}
                </p>
                <p className="text-xs text-gray-600 mb-3">{item.name}</p>
                <button
                  onClick={() => handleMoveToCart(item)}
                  className="flex items-center gap-1 text-xs text-blue-600 font-medium hover:underline"
                >
                  <FaShoppingCart className="text-sm" /> Move to cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CartPage;
