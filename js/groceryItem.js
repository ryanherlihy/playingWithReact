import React from 'react'

const {
	Component,
} = React;

class GroceryItem extends Component {
	render () {
		<div>
			<li>{this.props.item}</li>
		</div>
	}
};

export default GroceryItem;