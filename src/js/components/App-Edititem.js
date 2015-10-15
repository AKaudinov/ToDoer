var React = require('react');
var AppActions = require('../actions/App-Actions.js');

var EditItem = React.createClass({
	handler: function(){
		AppActions.editItem(this.props.item,this.props.index)
	},
	render: function(){
		return(
			<span className="input-group-btn">
				<button className="btn btn-warning" type="button" onClick={this.handler}>Edit</button>
			</span>
		)
	}
});

module.exports = EditItem;