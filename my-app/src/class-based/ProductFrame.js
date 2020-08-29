import React from 'react';
import ProductCard from './ProductCard.js';
import products from './products.json';

class ProductFrame extends React.Component{

	render(){
		const new_list = products.products.map(item => <ProductCard key={item.product_id} p={item} />);
		return (
			[new_list]
		);
	}
}

export default ProductFrame;
