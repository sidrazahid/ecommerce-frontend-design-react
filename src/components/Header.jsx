import { FaUser, FaEnvelope, FaShoppingCart, FaClipboardList } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full shadow-md">
      
      <div className="bg-white px-4 py-6 flex justify-between items-center max-w-[1210px] mx-auto">
        
      
        <div className="flex items-center gap-2">
          <img src="/images/home/logo-symbol.png" alt="Logo" className="h-8 w-8" />
          <span className="text-lg font-bold text-[#0D6EFD]">Brand</span>
        </div>

        
        <div className="flex items-center border border-[#0D6EFD] rounded w-[600px] overflow-hidden">
          <select className="bg-white px-3 py-2 text-sm border-r border-[#0D6EFD] outline-none">
            <option>All Categories</option>
            <option>Men</option>
            <option>Women</option>
            <option>Kids</option>
          </select>

          <input
            type="text"
            placeholder="Search..."
            className="flex-grow px-3 py-2 text-sm focus:outline-none"
          />

          <button className="bg-[#0D6EFD] text-white px-6 py-2 text-sm font-semibold hover:bg-blue-700 transition h-full">
            Search
          </button>
        </div>

        
        <div className="flex items-center gap-6 text-sm text-gray-700">
          <div className="flex flex-col items-center hover:text-[#0D6EFD] cursor-pointer">
            <FaUser className="text-xl" />
            <span>Profile</span>
          </div>
          <div className="flex flex-col items-center hover:text-[#0D6EFD] cursor-pointer">
            <FaEnvelope className="text-xl" />
            <span>Message</span>
          </div>
          <div className="flex flex-col items-center hover:text-[#0D6EFD] cursor-pointer">
            <FaClipboardList className="text-xl" />
            <span>Orders</span>
          </div>
          <div className="flex flex-col items-center hover:text-[#0D6EFD] cursor-pointer">
            <FaShoppingCart className="text-xl" />
            <span>Cart</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
