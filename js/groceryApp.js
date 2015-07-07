import React from 'react';
import GroceryList from './groceryList';
import ShoppingCart from './shoppingCart';

const {
	Component,
} = React;

class GroceryApp extends Component {

	constructor(props) {
		super(props);

		this.state = {
			list: [
				'Apples',
				'Bananas',
				'Bread',
				'Milk',
			],		
			groceries: []	
		}
	}

	selectGrocery(e) {
		this.setState({
			list: this.state.list.filter((item) => {
				return item !== e.target.innerText;
			}),
			groceries: this.state.groceries.concat(e.target.innerText)
		});
	}

	render () {
		return (
			<div className="grocery-app">
				<GroceryList list={this.state.list} select={this.selectGrocery.bind(this)} />
				<ShoppingCart groceries={this.state.groceries} />
			</div>
		)
	}
};

export default GroceryApp;