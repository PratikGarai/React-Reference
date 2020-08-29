import React from 'react';
import ProductCard from './ProductCard.js';
import products from './products.json'

const ProductFrame = ()=> {
	const finished_stuff = products.products.map(item => <ProductCard key={item.id} product={item} />) 
	return(
		[finished_stuff]
	);
}

export default ProductFrame;
