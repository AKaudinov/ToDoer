var React = require('react');
var AppActions = require('../actions/App-Actions.js');

var ValidationAlert = React.createClass({
	render: function(){
		return (
				<div className="alert alert-warning alert-dismissible">
					<button type="button" className="close" data-dismiss="alert">x</button>
					<strong>an input cannot be empty</strong>
				</div>
		)
	}
});

module.exports = ValidationAlert;