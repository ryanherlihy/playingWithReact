import React from 'react';
import GroceryItem from './groceryItem';

const {
	Component,
} = React;

class GroceryList extends Component {

	constructor(props) {
		super(props);

		this.state = {
			list: [
				{item: 'Apples', selected: false},
				{item: 'Carrots', selected: false},
				{item: 'Bread', selected: false},
				{item: 'Milk', selected: false},
			]
		}
	}

	render () {
		var list = this.state.list.map((item, index) => {
			return (
				<li key={index} onClick={this.selectGrocery.bind(this)}>{item.item}</li>
			)
		});
		return (
			<div className="groceries">
				<h2>Grocery List</h2>
				<ul>
					{list}
				</ul>
			</div>
		);
	}

	selectGrocery(e) {
		this.setState({list: this.state.list.filter((item) => {
			return item.item !== e.target.innerText;
		})});
	}

};

export default GroceryList;