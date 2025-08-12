import { AiFillStar, AiOutlineHeart } from "react-icons/ai";

const ProductDisplay = ({ products, view }) => {
  return (
    <div className="flex-1 bg-gray-100 p-4 rounded-lg">
      <div
        className={
          view === "grid"
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
            : "flex flex-col space-y-4"
        }
      >
        {products.length === 0 && (
          <p className="text-gray-600">No products available.</p>
        )}

        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border border-gray-300 rounded p-4 shadow-sm hover:shadow-md hover:scale-[1.01] transition duration-200"
          >
            {view === "list" ? (
              // LIST VIEW
              <div className="flex items-start gap-4">
               
                <img
                  src={product.image}
                  alt={product.name || product.title}
                  className="w-28 h-28 object-contain flex-shrink-0"
                />

                {/* Center */}
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">
                    {product.name || product.title}
                  </h3>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <AiFillStar
                        key={i}
                        className={
                          i < Math.floor(product.rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-sm text-gray-500">
                      ({product.reviews})
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-green-700 font-bold">
                      ${product.price.toFixed(2)}
                    </span>
                    {product.oldPrice && (
                      <span className="line-through text-gray-400">
                        ${product.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Des */}
                  <p className="text-sm text-gray-600 mb-1">
                    {product.description || ""}
                  </p>

                  {/* Shipping */}
                  {product.shipping && (
                    <span className="text-green-600 font-semibold text-sm block mb-1">
                      {product.shipping}
                    </span>
                  )}

                  {/* p.Detail */}
                  <button className="text-blue-500 text-sm font-medium hover:underline">
                    View details
                  </button>
                </div>

                {/* icon */}
                <AiOutlineHeart
                  className="text-gray-400 cursor-pointer hover:text-red-500 mt-1"
                  size={22}
                />
              </div>
            ) : (
              // GRID VIEW 
              <div className="flex flex-col">
                <img
                  src={product.image}
                  alt={product.name || product.title}
                  className="w-full h-40 object-contain mb-4"
                />

                <h3 className="font-semibold text-lg mb-1">
                  {product.name || product.title}
                </h3>

                <div className="flex items-center gap-1 mb-2">
                  {Array.from({ length: 5 }, (_, i) => (
                    <AiFillStar
                      key={i}
                      className={
                        i < Math.floor(product.rating)
                          ? "text-yellow-400"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-sm text-gray-500">
                    ({product.reviews})
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className="text-green-700 font-bold">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.oldPrice && (
                    <span className="line-through text-gray-400">
                      ${product.oldPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <p className="text-sm text-gray-600 mb-2">
                  {product.description || ""}
                </p>

                {product.shipping && (
                  <span className="text-green-600 font-semibold text-sm mb-2 block">
                    {product.shipping}
                  </span>
                )}

                <button className="text-blue-500 text-sm font-medium hover:underline self-start">
                  View details
                </button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductDisplay;
