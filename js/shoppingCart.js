import React from 'react';

const {
	Component,
} = React;

class ShoppingCart extends Component {
	render () {
		return (
			<div className="shopping-cart">
				<h2>Shopping Cart</h2>
				<ul>{this.props.groceries}</ul>
			</div>
		)
	}
};

export default ShoppingCart;