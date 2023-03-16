import React from 'react';
import ProductRowItem from "./ProductRowItem";

function ProductTable (props) {
    return(
        <table>
            <thead>
                <tr className="table-row table-row-header">
                    <th className="table-row-text">Image</th>
                    <th className="table-row-text">Description</th>
                    <th className="table-row-text">Category</th>
                    <th className="table-row-text">Stock</th>
                    <th className="table-row-text">Price</th>
                </tr>
            </thead>
            <tbody>
            {props.products.map(product => (
                <ProductRowItem
                    key={product.id}
                    image={product.image}
                    description={product.description}
                    category={product.category}
                    stock={product.stock}
                    price={product.price}
                />
            ))}
            </tbody>
        </table>
    );
}

export default ProductTable;