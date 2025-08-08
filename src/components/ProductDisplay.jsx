import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

const ProductDisplay = ({ filteredProducts, view, selectedFilters, handleRemoveFilter }) => {
  return (
    <div className="flex-1 bg-gray-100 p-4 rounded-lg">
      {selectedFilters.length > 0 && (
        <div className="mb-4 flex flex-wrap gap-2">
          {selectedFilters.map(({ type, value }, idx) => (
            <div
              key={idx}
              className="flex items-center bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm cursor-pointer"
              onClick={() => handleRemoveFilter(type, value)}
            >
              <span>{`${type}: ${value}`}</span>
              <button className="ml-1 font-bold">×</button>
            </div>
          ))}
        </div>
      )}

      <div className={view === "grid" ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" : "flex flex-col space-y-4"}>
        {filteredProducts.length === 0 && (
          <p className="text-gray-600">No products found with current filters.</p>
        )}

        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-300 rounded p-4 flex flex-col shadow-sm hover:shadow-md hover:scale-[1.02] transition-transform transition-shadow duration-200"
            style={{ maxHeight: "360px" }}
          >
            <img
              src={product.image}
              alt={product.name || product.title}
              className={view === "list" ? "w-28 h-28 object-contain" : "w-full h-40 object-contain mb-4"}
            />
            <div className="flex flex-col flex-1">
              <h3 className="font-semibold text-lg">{product.name || product.title}</h3>

              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }, (_, i) => (
                    <AiFillStar
                      key={i}
                      className={i < Math.floor(product.rating) ? "text-yellow-400" : "text-gray-300"}
                    />
                  ))}
                </div>
                <AiOutlineHeart
                  className="text-gray-400 cursor-pointer hover:text-red-500"
                  size={24}
                />
              </div>

              <div className="flex items-center gap-2 mb-2">
                <span className="text-green-700 font-bold">${product.price.toFixed(2)}</span>
                {product.oldPrice && (
                  <span className="line-through text-gray-400">${product.oldPrice.toFixed(2)}</span>
                )}
              </div>
              <p className="text-sm text-gray-600 flex-1">{product.description || ""}</p>
              {product.shipping && <p className="text-green-600 font-semibold mt-2">{product.shipping}</p>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
// css kl dekhoge
