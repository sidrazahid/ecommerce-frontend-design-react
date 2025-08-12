import React, { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const FilterSidebar = () => {
  const categories = ["Mobile accessory", "Electronics", "Smartphones", "Modern tech"];
  const brands = ["Samsung", "Apple", "Huawei", "Pocco", "Lenovo"];
  const features = ["Metallic", "Plastic cover", "8GB Ram", "Super power", "Large Memory"];
  const conditions = ["New", "Used", "Refurbished"];
  const ratings = [5, 4, 3, 2, 1];

  const [sectionsOpen, setSectionsOpen] = useState({
    category: true,
    brand: true,
    feature: true,
    condition: true,
    rating: true,
    price: true,
  });

  const [priceRange, setPriceRange] = useState({ min: "", max: "" });

  const toggleSection = (name) => {
    setSectionsOpen((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  const handleApplyPrice = () => {
    console.log("Price range applied:", priceRange);
  };

  return (
    <aside className="w-[260px] bg-white p-6 border border-gray-200 rounded-lg shadow-md text-sm h-auto">
      {/* Category */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <div
          className="flex justify-between items-center cursor-pointer select-none"
          onClick={() => toggleSection("category")}
        >
          <h3 className="font-semibold text-lg text-gray-800">Category</h3>
          {sectionsOpen.category ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {sectionsOpen.category &&
          categories.map((item) => (
            <label key={item} className="flex items-center mt-3 cursor-pointer">
              <input type="checkbox" className="mr-3 h-4 w-4 text-indigo-600" />
              <span>{item}</span>
            </label>
          ))}
      </div>

      {/* Brand  */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <div
          className="flex justify-between items-center cursor-pointer select-none"
          onClick={() => toggleSection("brand")}
        >
          <h3 className="font-semibold text-lg text-gray-800">Brands</h3>
          {sectionsOpen.brand ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {sectionsOpen.brand &&
          brands.map((item) => (
            <label key={item} className="flex items-center mt-3 cursor-pointer">
              <input type="checkbox" className="mr-3 h-4 w-4 text-indigo-600" />
              <span>{item}</span>
            </label>
          ))}
      </div>

      {/* Features */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <div
          className="flex justify-between items-center cursor-pointer select-none"
          onClick={() => toggleSection("feature")}
        >
          <h3 className="font-semibold text-lg text-gray-800">Features</h3>
          {sectionsOpen.feature ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {sectionsOpen.feature &&
          features.map((item) => (
            <label key={item} className="flex items-center mt-3 cursor-pointer">
              <input type="checkbox" className="mr-3 h-4 w-4 text-indigo-600" />
              <span>{item}</span>
            </label>
          ))}
      </div>

      {/* Condition*/}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <div
          className="flex justify-between items-center cursor-pointer select-none"
          onClick={() => toggleSection("condition")}
        >
          <h3 className="font-semibold text-lg text-gray-800">Condition</h3>
          {sectionsOpen.condition ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {sectionsOpen.condition &&
          conditions.map((item) => (
            <label key={item} className="flex items-center mt-3 cursor-pointer">
              <input type="radio" name="condition" className="mr-3 h-4 w-4 text-indigo-600" />
              <span>{item}</span>
            </label>
          ))}
      </div>

      {/* Ratings */}
      <div className="mb-6 border-b border-gray-300 pb-4">
        <div
          className="flex justify-between items-center cursor-pointer select-none"
          onClick={() => toggleSection("rating")}
        >
          <h3 className="font-semibold text-lg text-gray-800">Ratings</h3>
          {sectionsOpen.rating ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {sectionsOpen.rating &&
          ratings.map((rate) => (
            <label key={rate} className="flex items-center mt-3 cursor-pointer">
              <input type="checkbox" className="mr-3 h-4 w-4 text-indigo-600" />
              <div className="flex text-yellow-400">
                {[...Array(rate)].map((_, i) => (
                  <svg
                    key={i}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    className="w-4 h-4"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.966a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.462a1 1 0 00-.364 1.118l1.287 3.966c.3.921-.755 1.688-1.538 1.118l-3.388-2.462a1 1 0 00-1.176 0l-3.388 2.462c-.783.57-1.838-.197-1.538-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.393c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.966z" />
                  </svg>
                ))}
              </div>
            </label>
          ))}
      </div>

      {/* Price Range */}
      <div>
        <div
          className="flex justify-between items-center cursor-pointer select-none"
          onClick={() => toggleSection("price")}
        >
          <h3 className="font-semibold text-lg text-gray-800">Price Range</h3>
          {sectionsOpen.price ? <FiChevronUp /> : <FiChevronDown />}
        </div>
        {sectionsOpen.price && (
          <div className="mt-3 space-y-3">
            <div className="flex gap-2">
              <input
                type="number"
                placeholder="Min"
                value={priceRange.min}
                onChange={(e) => setPriceRange({ ...priceRange, min: e.target.value })}
                className="w-1/2 border border-gray-300 rounded px-2 py-1"
              />
              <input
                type="number"
                placeholder="Max"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: e.target.value })}
                className="w-1/2 border border-gray-300 rounded px-2 py-1"
              />
            </div>
            <button
              onClick={handleApplyPrice}
              className="w-full bg-[#0D6EFD] text-white py-1.5 rounded hover:bg-indigo-700 transition"
            >
              Apply
            </button>
          </div>
        )}
      </div>
    </aside>
  );
};

export default FilterSidebar;
