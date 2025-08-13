
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FaStar } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import { BiWorld } from "react-icons/bi";
import { FaRegHeart } from "react-icons/fa6";
import { FaUserCircle } from "react-icons/fa";

const ProductDetails = () => {
  const thumbnails = [
    "images/home/d1.png",
    "images/home/d2.png",
    "images/home/d3.png",
    "images/home/d4.png",
    "images/home/d5.png",
    "images/home/d1.png",
  ];

  return (
    <div>
      <Header />
      <Navbar />

      {/* m.container */}
      <div className="w-[1180px] border border-gray-300 rounded-md mx-auto mt-[50px] bg-white p-5">
        <div className="flex gap-6 justify-between">
          {/* images 1 + 6sm*/}
          <div className="w-[380px] flex-shrink-0">
            <img
              src="images/home/d1.png"
              alt="Main Product"
              className="w-full h-[380px] border border-gray-300 object-cover hover:border-blue-500 hover:scale-[1.02] transition-transform duration-200"
            />
            <div className="mt-2 flex gap-2 flex-wrap">
              {thumbnails.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-[56px] h-[56px] border border-gray-300 rounded object-cover cursor-pointer hover:border-blue-500 hover:scale-105 transition-transform duration-200"
                />
              ))}
            </div>
          </div>

          {/* P.info */}
          <div className="flex-grow max-w-[700px]">
            <MdVerified className="text-green-600" />
            <span className="text-green-600 text-sm"> In stock</span>
            <h2 className="text-[16px] font-semibold text-gray-800 leading-snug mt-1">
              Mens Long Sleeve T-shirt Cotton Base <br />
              Layer Slim Muscle
            </h2>

            <div className="flex items-center text-sm text-gray-600 mt-[12px]">
              <FaStar className="text-orange-500 mr-1" />
              <span className="text-orange-500 font-semibold mr-1">9.3</span>
              <span>(32 reviews)</span>
              <span className="mx-1">•</span>
              <span>154 sold</span>
            </div>

            {/* ---------*/}
            <div className="grid grid-cols-3 gap-4 text-center font-medium mt-[10px]">
              <div className="bg-[#FFF0DF] text-red-500 py-2 rounded hover:scale-105 hover:shadow-md transition-all cursor-pointer">
                <div>$98.00</div>
                <div className="text-xs">50-100 pcs</div>
              </div>
              <div className="bg-[#FFF0DF] py-2 rounded text-black hover:scale-105 hover:shadow-md transition-all cursor-pointer">
                <div>$90.00</div>
                <div className="text-xs">100-700 pcs</div>
              </div>
              <div className="bg-[#FFF0DF] py-2 rounded text-black hover:scale-105 hover:shadow-md transition-all cursor-pointer">
                <div>$78.00</div>
                <div className="text-xs">700+ pcs</div>
              </div>
            </div>

            {/* p.details */}
            <div className="mt-3 border border-gray-300 rounded-md p-4 text-sm text-gray-700 space-y-2">
              <div>
                <span className="font-semibold">Price:</span> Negotiable
              </div>
              <hr className="border-gray-200" />
              <div>
                <span className="font-semibold">Type:</span> T-shirt
              </div>
              <div>
                <span className="font-semibold">Material:</span> 100% Cotton
              </div>
              <div>
                <span className="font-semibold">Design:</span> Slim fit, modern
                cut
              </div>
              <hr className="border-gray-200" />
              <div>
                <span className="font-semibold">Customization:</span> Logo
                printing and custom packaging available
              </div>
              <div>
                <span className="font-semibold">Protection:</span> Refund Policy
              </div>
              <div>
                <span className="font-semibold">Warranty:</span> 2 years full
                warranty
              </div>
              <hr className="border-gray-200" />
            </div>
          </div>

          {/* Supplier Info */}
          <div className="w-[280px] flex-shrink-0">
            <div className="border border-gray-300 rounded-md bg-white p-4 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <FaUserCircle className="text-4xl text-gray-700 w-[48px] h-[48px]" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Supplier</h3>
                    <p className="text-sm text-gray-600">Guanjoi Trading LLC</p>
                  </div>
                </div>

                <ul className="text-sm text-gray-700 space-y-2">
                  <li className="flex items-center gap-2">
                    <img
                      src="images/Flags/gr.png"
                      alt="Germany"
                      className="w-4 h-4"
                    />
                    <span>Germany, Berlin</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <MdVerified className="text-green-600" />
                    <span>Verified Seller</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <BiWorld className="text-green-600" />
                    <span>Worldwide shipping</span>
                  </li>
                </ul>

                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 text-sm font-medium transition-all duration-200">
                  Send inquiry
                </button>

                <button className="w-full text-blue-600 text-sm hover:underline transition-all duration-200">
                  Seller's profile
                </button>
              </div>
            </div>

  
            <div className="mt-4 flex justify-center">
              <div className="text-sm text-gray-600 hover:text-blue-600 hover:underline flex items-center gap-1 cursor-pointer transition-all duration-200">
                <FaRegHeart className="text-blue-500 hover:scale-110 transition-transform duration-200" />
                <span>Save for later</span>
              </div>
            </div>
          </div>
        </div>

        {/* c.section */}
        <div className="flex gap-6 mt-10 border border-gray-300 rounded-md p-5">
          <div className="flex-1">
            <div className="flex border-b border-gray-300 text-sm font-medium text-gray-600">
              <button className="border-b-2 border-blue-600 pb-2 px-4 text-blue-600">
                Description
              </button>
              <button className="pb-2 px-4 hover:text-blue-600 transition">
                Reviews
              </button>
              <button className="pb-2 px-4 hover:text-blue-600 transition">
                Shipping
              </button>
              <button className="pb-2 px-4 hover:text-blue-600 transition">
                About seller
              </button>
            </div>

           
            <div className="mt-4 text-gray-700 text-sm leading-relaxed">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>
              <p className="mt-2">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. Duis aute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                pariatur.
              </p>

             
              <table className="w-[567px] mt-4 border border-gray-300 text-left text-xs text-gray-600">
                <tbody>
                  <tr className="border-b border-gray-300">
                    <td className="border-r border-gray-300 px-2 py-1 font-semibold bg-gray-50 w-[130px]">Model</td>
                    <td className="px-2 py-1">#8788687</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="border-r border-gray-300 px-2 py-1 font-semibold bg-gray-50">Style</td>
                    <td className="px-2 py-1">Classic style</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="border-r border-gray-300 px-2 py-1 font-semibold bg-gray-50">Certificate</td>
                    <td className="px-2 py-1">ISO-898921212</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <td className="border-r border-gray-300 px-2 py-1 font-semibold bg-gray-50">Size</td>
                    <td className="px-2 py-1">34mm x 450mm x 19mm</td>
                  </tr>
                  <tr>
                    <td className="border-r border-gray-300 px-2 py-1 font-semibold bg-gray-50">Memory</td>
                    <td className="px-2 py-1">36GB RAM</td>
                  </tr>
                </tbody>
              </table>

             
              <ul className="mt-4 list-none space-y-2 text-gray-600 text-sm">
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Some great feature name here
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Lorem ipsum dolor sit amet, consectetur
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Duis aute irure dolor in reprehenderit
                </li>
                <li className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-green-600 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  Some great feature name here
                </li>
              </ul>
            </div>
          </div>

          {/* right sidebar */}
          <div className="w-[250px] border border-gray-300 rounded-md p-4 text-sm">
            <h3 className="font-semibold mb-3">You may like</h3>
            <ul className="space-y-3">
              {[
                { title: "Men Blazers Sets Elegant Formal", price: "$7.00 - $99.50", img: "images/home/r3.png" },
                { title: "Men Shirt Sleeve Polo Contrast", price: "$7.00 - $99.50", img: "images/home/r4.png" },
                { title: "Apple Watch Series Space Gray", price: "$7.00 - $99.50", img: "images/home/r5.png" },
                { title: "Basketball Crew Socks Long Stuff", price: "$7.00 - $99.50", img: "images/home/r2.png" },
                { title: "New Summer Men's castrol T-Shirts", price: "$7.00 - $99.50", img: "images/home/r6.png" },
              ].map((item, idx) => (
                <li key={idx} className="flex gap-3 items-center cursor-pointer hover:bg-gray-100 rounded p-2 transition">
                  <img src={item.img} alt={item.title} className="w-12 h-12 object-cover rounded" />
                  <div>
                    <p className="font-medium text-gray-700">{item.title}</p>
                    <p className="text-gray-500">{item.price}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
       {/* 3section */}
<div className="w-[1180px] mx-auto mt-10 bg-white border border-gray-300 rounded-md p-5">
  <h3 className="text-lg font-semibold text-gray-800 mb-4">Related products</h3>
  <div className="grid grid-cols-6 gap-4">
    {[
      "images/home/r1.png",
      "images/home/r2.png",
      "images/home/r3.png",
      "images/home/r4.png",
      "images/home/r5.png",
      "images/home/r6.png",
    ].map((src, idx) => (
      <div
        key={idx}
        className="border border-gray-200 rounded p-2 text-center hover:shadow-lg hover:scale-105 transition-all duration-300"
      >
        <img
          src={src}
          alt={`Related product ${idx + 1}`}
          className="w-full h-[120px] object-contain mb-2"
        />
        <p className="text-sm font-medium text-gray-700">
          Xiaomi Redmi 8 Original
        </p>
        <p className="text-xs text-gray-500">$32.00~$40.00</p>
      </div>
    ))}
  </div>
</div>

{/* discount banner copy add-to-cart */}
<div className="w-[1180px] mx-auto mt-4 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-4 rounded-md flex justify-between items-center">
  <div>
    <h4 className="text-md font-semibold">
      Super discount on more than 100 USD
    </h4>
    <p className="text-sm opacity-90">
      Have you ever finally just write dummy info
    </p>
  </div>
  <button className="bg-orange-500 hover:bg-orange-600 hover:shadow-lg transform hover:scale-105 duration-300 text-white text-sm px-4 py-2 rounded-md transition">
    Shop now
  </button>
</div>

      <Footer />
    </div>
  );
};

export default ProductDetails;

