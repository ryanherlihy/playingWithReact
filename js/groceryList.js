import React from 'react';
import GroceryItem from './groceryItem';

const {
	Component,
} = React;

class GroceryList extends Component {

	render () {
		var list = this.props.list.map((item, index) => {
			return (
				<li key={index} onClick={this.props.select.bind(this)}>{item}</li>
			)
		});
		return (
			<div className="groceries" >
				<h2>Grocery List</h2>
				<ul>
					{list}
				</ul>
			</div>
		);
	}

};

export default GroceryList;