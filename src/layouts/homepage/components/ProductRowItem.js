import React from 'react';

function ProductRowItem (props) {
    return(
        <tr className="table-row">
            <td className="table-row-image">{props.image}</td>
            <td className="table-row-text">{props.description}</td>
            <td className="table-row-text">{props.category}</td>
            <td className="table-row-num">{props.stock}</td>
            <td className="table-row-num">{"€ " + props.price}</td>
        </tr>
    );
}

export default ProductRowItem;