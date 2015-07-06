import React from 'react'

const {
	Component,
} = React;

class GroceryItem extends Component {

	// selectItem () {
		
	// }

	render () {
		var list = this.props.list.map((item, index) => {
			return (
				<li key={index}>{item.item}</li>
			)
		});
		return (
			<div className="grocery-item">
				{list}
			</div>
		)
	}
};

export default GroceryItem;