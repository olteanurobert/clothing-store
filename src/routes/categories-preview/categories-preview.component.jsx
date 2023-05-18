// React / Hooks
import { useContext } from "react";

// Context
import { CategoriesContext } from "../../context/categories.context";

// Components
import CategoryPreview from "../../components/category-preview/category-preview.component";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
        // <Fragment key={title}>
        //   <h2>{title}</h2>
        //   <div className="products-container">
        //     {categoriesMap[title].map((product) => (
        //       <CategoryPreview key={product.id} product={product} />
        //     ))}
        //   </div>
        // </Fragment>
      })}
    </>
  );
};

export default CategoriesPreview;
