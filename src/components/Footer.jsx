import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";

const Footer = () => {
  const [langOpen, setLangOpen] = useState(false);


  const [selectedLang, setSelectedLang] = useState({
    name: "English",
    flag: "/images/Flags/us.png",
  });

  const toggleLangDropdown = () => {
    setLangOpen(!langOpen);
  };

  const changeLanguage = (name, flag) => {
    setSelectedLang({ name, flag });
    setLangOpen(false); // ye ak bar check krna h
  };

  return (
    <footer className="bg-gray-100 text-gray-700 pt-10 ">
      
      <div className="bg-white w-full px-6 py-10 shadow">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center text-center gap-4">
          <h2 className="text-xl md:text-2xl font-semibold">
            Subscribe to our Newsletter
          </h2>
          <p className="text-sm text-gray-600 max-w-md">
            Get the latest updates, offers, and news directly to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-3 mt-2 w-full max-w-lg">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded outline-none"
            />
            <button className="w-full sm:w-auto bg-[#0D6EFD] text-white px-6 py-2 rounded hover:bg-blue-700 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      
      <div className="w-full px-6 py-10 max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-6 gap-8 border-b border-gray-200">
        
        <div>
          <div className="flex items-center gap-2 mb-3">
            <img src="/images/home/logo-symbol.png" alt="Logo" className="h-8 w-8" />
            <span className="text-xl font-bold text-[#0D6EFD]">Brand</span>
          </div>
          <p className="text-sm mb-4">
            Elevating ecommerce experience through modern technology and great
            design.
          </p>
          <div className="flex gap-3">
            <FaFacebookF className="hover:text-[#0D6EFD] cursor-pointer" />
            <FaTwitter className="hover:text-[#0D6EFD] cursor-pointer" />
            <FaInstagram className="hover:text-[#0D6EFD] cursor-pointer" />
            <FaYoutube className="hover:text-[#0D6EFD] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#0D6EFD] cursor-pointer" />
          </div>
        </div>

      
        <div>
          <h3 className="font-semibold mb-3">About</h3>
          <ul className="text-sm space-y-2">
            <li>Our Story</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3">Partnership</h3>
          <ul className="text-sm space-y-2">
            <li>Affiliates</li>
            <li>Resellers</li>
            <li>Suppliers</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3">Information</h3>
          <ul className="text-sm space-y-2">
            <li>Shipping Info</li>
            <li>Returns</li>
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold mb-3">For Users</h3>
          <ul className="text-sm space-y-2">
            <li>My Account</li>
            <li>Order Tracking</li>
            <li>Wishlist</li>
            <li>Help Center</li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3">Get the App</h3>
          <div className="flex flex-col gap-3">
            <img
              src="/images/home/Appbtn.png"
              alt="App Store"
              className="h-12 w-124px cursor-pointer"
            />
            <img
              src="/images/home/playstore.png"
              alt="Play Store"
              className="h-12 w-124px cursor-pointer"
            />
          </div>
        </div>
      </div>

      
      <div className="bg-white px-6 py-4 text-sm relative">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <span>© ecommerce</span>

      
          <div className="relative">
            {langOpen && (
              <div className="absolute right-0 bottom-full mb-2 bg-white border rounded shadow z-10 min-w-[150px] text-left">
                <ul className="text-sm">
                  <li
                    onClick={() =>
                      changeLanguage("Urdu", "/images/Flags/pk.png")
                    }
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  >
                    <img
                      src="/images/Flags/pk.png"
                      alt="PK"
                      className="h-4 w-6 object-cover"
                    />
                    Urdu
                  </li>
                  <li
                    onClick={() =>
                      changeLanguage("French", "/images/Flags/fr.png")
                    }
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  >
                    <img
                      src="/images/Flags/fr.png"
                      alt="FR"
                      className="h-4 w-6 object-cover"
                    />
                    French
                  </li>
                  <li
                    onClick={() =>
                      changeLanguage("English", "/images/Flags/us.png")
                    }
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex items-center gap-2"
                  >
                    <img
                      src="/images/Flags/us.png"
                      alt="US"
                      className="h-4 w-6 object-cover"
                    />
                    English
                  </li>
                </ul>
              </div>
            )}

            <div
              className="flex items-center gap-2 cursor-pointer hover:text-[#0D6EFD]"
              onClick={toggleLangDropdown}
            >
              <img
                src={selectedLang.flag}
                alt="Flag"
                className="h-4 w-6 object-cover"
              />
              <span>{selectedLang.name}</span>
              <IoIosArrowDown />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
