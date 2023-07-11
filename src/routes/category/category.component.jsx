// React / Hooks
import { useContext, useState, useEffect } from "react";

// React Router
import { useParams } from "react-router-dom";

// Components
import ProductCard from "../../components/product-card/product-card.component";

// Context
import { CategoriesContext } from "../../context/categories.context";

// Style
import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      <div className="category-container">
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </>
  );
};

export default Category;
