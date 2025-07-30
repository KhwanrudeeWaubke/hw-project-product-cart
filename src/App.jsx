import React, { useEffect, useState } from "react";
import BtnCatery from "./components/BtnCatery";
import CardProducts from "./components/CardProducts";

function App() {
  const [products, setProducts] = useState([]);
  const [productsByCatergory, setProductsCatergory] = useState([]);
  const [categories, setCategories] = useState([]);

  // const categoriesBy =Array.from (new Set (products.map((el) => el.categories)))

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setProductsCatergory(data);
      });
  };

  const arr = [];

  products.map((item) => {
    console.log(!categories.includes.category);

    if (!categories.includes(item.category)) {
      setCategories([...categories, item.category]);
    }
  });

  const hdlClickCategory = (category) => {
    const result = category !== "All"
      ? products.filter((item) => item.category === category)
      : products;
    setProductsCatergory(result);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  // console.log("products", products);
  console.log("categories", categories);
  console.log("productsByCatergory", productsByCatergory);

  return (
    <div className="p-8 space-y-4">
      <h1 className="text-5xl mb-10">Products Fetch & Filter</h1>
      <hr />

      <div className="flex gap-2">
        {categories.map((item) => (
          <BtnCatery
            key={item}
            item={item}
            hdlClickCategory={hdlClickCategory}
          />
        ))}

        <BtnCatery hdlClickCategory={hdlClickCategory} item="All" />
      </div>

      <button>Show all products</button>

      <div className="grid grid-cols-1 xl:grid-cols-5 lg:grid-cols-4 sm:grid-cols-3  gap-5">
        {productsByCatergory.map((item) => (
          <CardProducts key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

export default App;
