import React, { useState } from "react";
import ProductTable from "./components/ProductTable";

function Homepage() {
  const [products, setProducts] = useState([
    {
      id: 1,
      image: "",
      description: "Kwast",
      category: "Schilderen",
      stock: 10,
      price: 5.99,
    },
    {
      id: 2,
      image: "",
      description: "Verf",
      category: "Schilderen",
      stock: 10,
      price: 10.99,
    },
    {
      id: 3,
      image: "",
      description: "Doek",
      category: "Schilderen",
      stock: 10,
      price: 24.99,
    },
  ]);

  return (
    <section className="container">
      <div className="table-container">
        <h2 className="text-big">Shop hier je mooiste creatieve ideeën</h2>
        <ProductTable products={products} />
      </div>
    </section>
  );
}

export default Homepage;

/*****
<div>
    {products.map((product) => {
        return (
          <Product
                key={product.data.id}
                image={product.data.image}
                description={product.data.description}
                category={product.data.category}
                stock={product.data.stock}
                price={product.data.price}
          />
        )
    })}
    {loading && <Loader/>}
    {error && <ErrorMessage>Het ophalen van de data is mislukt. Probeer de pagina opnieuw te laden.</ErrorMessage>}
</div>
****/
