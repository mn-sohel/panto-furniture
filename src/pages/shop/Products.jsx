import React, { useState } from "react";
import { products } from "../../utils/products";
import ProductCard from "./ProductCard";
import btnIcon from "../../assets/button-icon.png";
import Button from "../../components/Button";

const Products = ({ headLine }) => {
  const categories = ["Chair", "Beds", "Sofa", "Lamp"];
  const [selectedCategory, setSelectedCategory] = useState("Chair");
  const [visibleProducts, setVisibleProducts] = useState(4);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  const loadMoreProducts = () => {
    setVisibleProducts((prev) => prev + 4);
  };

  return (
    <div>
      <div className="section-container">
        <h2 className="text-4xl font-bold text-center my-8">{headLine}</h2>

        {/* category tabs */}
        <div className="bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16">
          <div className="flex flex-col sm:flex-row items-center md:justify-center gap-4">
            {categories.map((category, index) => (
              <button
                onClick={() => {
                  setSelectedCategory(category);
                  setVisibleProducts(4);
                }}
                key={index}
                className={`py-1.5 sm:px-5 px-8 rounded-full hover:bg-[#E58411] hover:text-white transition-colors ${
                  selectedCategory === category
                    ? "bg-white text-[#E58411]"
                    : "text-[#1E1E1E]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        {/* product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.slice(0, visibleProducts).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        {/* button for showing more product */}
        {visibleProducts < filteredProducts.length && (
          <div className="flex justify-center items-center mt-8">
            {/* <Button text="View More"/> */}
            <button
                onClick={loadMoreProducts} 
                className="text-base font-semibold text-[#E58411] flex items-center gap-1">
              View More
              <img src={btnIcon} alt="" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
