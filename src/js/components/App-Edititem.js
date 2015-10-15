var React = require('react');
var AppActions = require('../actions/App-Actions.js');

var EditItem = React.createClass({
	handler: function(){
		document.getElementById('editButton').value = "Save";
		AppActions.editItem(this.props.item,this.props.index)
	},
	render: function(){
		return(
			<span className="input-group-btn">
				<button className="btn btn-warning" type="button" id="editButton" onClick={this.handler}>Edit</button>
			</span>
		)
	}
});

module.exports = EditItem;