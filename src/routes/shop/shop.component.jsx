// React / Hooks
import { Routes, Route } from "react-router-dom";

// Context
// import { CategoriesContext } from "../../context/categories.context";

// Components
import CategoriesPreview from "../categories-preview/categories-preview.component";
// import CategoryPreview from "../../components/category-preview/category-preview.component";

// Styles
import "./shop.styles.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
    </Routes>
  );
};

export default Shop;
