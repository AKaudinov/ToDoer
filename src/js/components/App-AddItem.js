var React = require('react');
var AppActions = require('../actions/App-Actions.js');
var ValidationAlert = require('./App-ValidationAlert.js');


var AddItem = React.createClass({
	getInitialState: function(){
		return{
			isValid: true
		}
	},
	handler: function(){
		var itemValue = document.getElementById('itemInput').value;
		if(itemValue == "")
		{
			this.setState({isValid: false});
			return;
		}
		this.setState({
			isValid: true
		});
		console.log(this);
		document.getElementById('itemInput').value = "";
		AppActions.addItem(itemValue)
	},
	render: function(){
		return(
			<div className="col-lg-6" align="center">
			<div className="form-group">
				<label className="control-label"><strong>Add Item</strong></label>
					<div className="input-group">
						<input type="text" className="form-control" id="itemInput"/>
						<span className="input-group-btn">
							<button className="btn btn-primary" type="button" onClick={this.handler}>Add item</button>
						</span>
					</div>
				</div>
					{this.state.isValid != true ? <ValidationAlert /> : <span/>}
			</div>
		)
	}
});

module.exports = AddItem;