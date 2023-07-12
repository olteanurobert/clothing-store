// React / Hooks
import { createContext, useState, useEffect } from "react";

// Firebase
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

// Imports for method to store collection into Firebase
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from "../shop-data.js";

export const CategoriesContext = createContext({
  categoriesMap: {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  // Add/store collections into Firebase, so you don't have to do it manually
  // See addCollectionAndDocuments in firebase.utils.js
  // useEffect(() => {
  //   addCollectionAndDocuments("categories", SHOP_DATA);
  // }, []);

  useEffect(() => {
    // getCategoriesAndDocuments is an async function
    // to use inside of useEffect -> created getCategoriesMap as an async function
    const getCategoriesMap = async () => {
      // await getCategoriesAndDocuments
      const categoryMap = await getCategoriesAndDocuments();

      setCategoriesMap(categoryMap);
    };

    // invoke getCategoriesMap
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
