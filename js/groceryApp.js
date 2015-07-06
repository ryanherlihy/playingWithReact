import React from 'react';
import GroceryList from './groceryList';
import ShoppingCart from './shoppingCart';

const {
	Component,
} = React;

class GroceryApp extends Component {
	render () {
		return (
			<div className="grocery-app">
				<GroceryList />
				<ShoppingCart
			</div>
		)
	}
};