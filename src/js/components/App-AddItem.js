var React = require('react');
var AppActions = require('../actions/App-Actions.js');

var AddItem = React.createClass({
	handler: function(){
		var itemValue = document.getElementById('itemInput').value;
		if(itemValue == "")
		{
			return;
		}
		document.getElementById('itemInput').value = "";
		AppActions.addItem(itemValue)
	},
	render: function(){
		return(
			<div className="col-lg-6" align="center">
			<div className="form-group">
				<label className="control-label">Add Item</label>
					<div className="input-group">
						<input type="text" className="form-control" id="itemInput"/>
						<span className="input-group-btn">
							<button className="btn btn-primary" type="button" onClick={this.handler}>Add item</button>
						</span>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = AddItem;