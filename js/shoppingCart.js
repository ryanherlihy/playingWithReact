import React from 'react';

const {
	Component,
} = React;

class ShoppingCart extends Component {
	render () {
		var groceries = this.props.groceries.map((item, index) => {
			return (
				<li key={index}>{item}</li>
			)
		});
		console.log(groceries);
		return (
			<div className="shopping-cart" >
				<h2>Shopping Cart</h2>
				<ul>{groceries}</ul>
			</div>
		)
	}
};

export default ShoppingCart;