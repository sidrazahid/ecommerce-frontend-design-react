import { useState } from "react";
import { FiGrid, FiList } from "react-icons/fi";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductDisplay from "../components/ProductDisplay";
import FilterSidebar from "../components/FilterSidebar";

const products = [
  {
    id: 1,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: 998,
    oldPrice: 1128,
    rating: 5,
    reviews: 154,
    shipping: "Free Shipping",
    description: "Lorem ipsum...",
    image: "/images/home/h21.png",
  },
  {
    id: 2,
    name: "GoPro HERO6 4K Action Camera - Black",
    price: 998,
    oldPrice: 1128,
    rating: 4,
    reviews: 154,
    shipping: "Free Shipping",
    description: "Ut enim ad minim veniam...",
    image: "/images/home/h22.png",
  },
  {
    id: 3,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: 998,
    oldPrice: 1128,
    rating: 5,
    reviews: 154,
    shipping: "Free Shipping",
    description: "Lorem ipsum...",
    image: "/images/home/h21.png",
    category: "Mobile accessory",
    brand: "Apple",
    feature: ["Metallic", "8GB Ram"],
    condition: "Brand new",
  },
  {
    id: 4,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: 998,
    oldPrice: 1128,
    rating: 5,
    reviews: 154,
    shipping: "Free Shipping",
    description: "Lorem ipsum...",
    image: "/images/home/15.png",
    category: "Mobile accessory",
    brand: "Apple",
    feature: ["Metallic", "8GB Ram"],
    condition: "Brand new",
  },
  {
    id: 5,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: 998,
    oldPrice: 1128,
    rating: 5,
    reviews: 154,
    shipping: "Free Shipping",
    description: "Lorem ipsum...",
    image: "/images/canon_camera.jpg",
    category: "Mobile accessory",
    brand: "Apple",
    feature: ["Metallic", "8GB Ram"],
    condition: "Brand new",
  },
  {
    id: 6,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: 998,
    oldPrice: 1128,
    rating: 5,
    reviews: 154,
    shipping: "Free Shipping",
    description: "Lorem ipsum...",
    image: "/images/canon_camera.jpg",
    category: "Mobile accessory",
    brand: "Apple",
    feature: ["Metallic", "8GB Ram"],
    condition: "Brand new",
  },
  {
    id: 7,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: 998,
    oldPrice: 1128,
    rating: 5,
    reviews: 154,
    shipping: "Free Shipping",
    description: "Lorem ipsum...",
    image: "/images/canon_camera.jpg",
    category: "Mobile accessory",
    brand: "Apple",
    feature: ["Metallic", "8GB Ram"],
    condition: "Brand new",
  },
  {
    id: 8,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: 998,
    oldPrice: 1128,
    rating: 5,
    reviews: 154,
    shipping: "Free Shipping",
    description: "Lorem ipsum...",
    image: "/images/canon_camera.jpg",
    category: "Mobile accessory",
    brand: "Apple",
    feature: ["Metallic", "8GB Ram"],
    condition: "Brand new",
  },
  {
    id: 9,
    name: "Canon Camera EOS 2000, Black 10x zoom",
    price: 998,
    oldPrice: 1128,
    rating: 5,
    reviews: 154,
    shipping: "Free Shipping",
    description: "Lorem ipsum...",
    image: "/images/canon_camera.jpg",
    category: "Mobile accessory",
    brand: "Apple",
    feature: ["Metallic", "8GB Ram"],
    condition: "Brand new",
  },
// 
];

const WebList = () => {
  const [view, setView] = useState("grid");
  const [sortBy, setSortBy] = useState("Featured");

  return (
    <div>
      <Header />
      <Navbar />

      <div className="max-w-[1440px] mx-auto px-6 py-3 flex flex-wrap items-center justify-between gap-3 bg-white border-b border-gray-200">
        <div className="text-gray-700 font-semibold">
          {products.length.toLocaleString()} items
        </div>

        <div className="flex items-center gap-4">
          <label className="flex items-center gap-1 text-gray-600 select-none cursor-pointer">
            <input type="checkbox" className="cursor-pointer" />
            Verified only
          </label>

          <select
            className="border rounded px-2 py-1 text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Top Rated</option>
          </select>

          <button
            onClick={() => setView("grid")}
            className={`p-1 rounded ${view === "grid" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
            aria-label="Grid view"
          >
            <FiGrid size={20} />
          </button>
          <button
            onClick={() => setView("list")}
            className={`p-1 rounded ${view === "list" ? "bg-blue-500 text-white" : "hover:bg-gray-200"}`}
            aria-label="List view"
          >
            <FiList size={20} />
          </button>
        </div>
      </div>

      <main className="max-w-[1440px] mx-auto px-6 py-8 flex flex-col lg:flex-row gap-6">
          <FilterSidebar/> 
        <ProductDisplay products={products} view={view} />
      </main>

      <Footer />
    </div>
  );
};

export default WebList;
