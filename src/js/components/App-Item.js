var React = require('react');
var AppActions = require('../actions/App-Actions.js');

var Item = React.createClass({
	handler: function(itemId){
		var item = document.getElementById(itemId).value;
		AppActions.editItem(item, this.props.index);
	},
	render: function(){
		var itemId = "toDoItem" + this.props.index.toString();
		return(
			<input type="text" className="form-control" id={itemId} onChange={this.handler.bind(this,itemId)} defaultValue={this.props.item}/>
		)
	}
});

module.exports = Item;