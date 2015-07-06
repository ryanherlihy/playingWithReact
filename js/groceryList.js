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
				'One',
				'Two',
				'Three',
				'Four'
			],
		}
	}

	render () {
		return (
			<div className="groceries">
				<ul>
					<GroceryItem list={this.state.list} />
				</ul>
			</div>
		);
	}
};

export default GroceryList;