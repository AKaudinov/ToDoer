var React = require('react');
var AppActions = require('../actions/App-Actions.js');

var ValidationAlert = React.createClass({
	handler: function(){
		AppActions.closeAlert();
	},
	render: function(){
		return (
				<div className="alert alert-danger alert-dismissible">
					<button type="button" className="close" data-dismiss="alert" onClick={this.handler}>x</button>
					<strong>an input cannot be empty</strong>
				</div>
		)
	}
});

module.exports = ValidationAlert;