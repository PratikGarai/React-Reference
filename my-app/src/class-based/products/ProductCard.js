import React from 'react';

class ProductCard extends React.Component{

	render(){
		return(
		<div>
			<h3>{this.props.p.product_label}</h3>
			<img src="{this.props.p.product_url}" />
			<hr />
		</div>
		); 
	}
}

export default ProductCard;
