import React from "react";

const ProductCard = props=>
{
	return(
	<div>
		<h3>Name : {props.product.name}</h3>
		<p> Cost : <strong>{props.product.price}</strong></p>
		<hr />
		<br />
	</div>
	);
}

export default ProductCard;
