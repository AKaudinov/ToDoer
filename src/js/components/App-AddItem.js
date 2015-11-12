var React = require('react');
var AppActions = require('../actions/App-Actions.js');
var StoreWatchMixin = require('../mixins/StoreWatchMixin.js');


function setValidState(){
	return {isValid: true}
}

var AddItem = React.createClass({
	mixins: [StoreWatchMixin(setValidState)],
	handler: function(){
		var itemValue = document.getElementById('itemInput').value;
		if(itemValue == "")
		{
			this.setState({isValid: false});
			return;
		}
		document.getElementById('itemInput').value="";
		AppActions.addItem(itemValue)
	},
	keyHandler: function(event){
		if(event.keyCode == 13)
		{
			this.handler();
			event.preventDefault();
		}
	},
	errorHandler: function(){
		var item = document.getElementById('itemInput');
		if(item.value != "" && !this.state.isValid){
			AppActions.removeAlert();
		}
	},
	render: function(){
		var errorStyle={
				border: '2px solid red'
		};
		return(
			<div className="col-lg-6" align="center">
			<div className="form-group">
				<label className="control-label"><strong>Add Item</strong></label>
					<div className="input-group">
						<input type="text" className="form-control" id="itemInput" onChange={this.errorHandler} style={this.state.isValid == true ? {border: 'none'} : errorStyle} onKeyDown={this.keyHandler}/>
						<span className="input-group-btn">
							<button className="btn btn-success" type="button" onClick={this.handler}>Add item</button>
						</span>
					</div>
				</div>
			</div>
		)
	}
});

module.exports = AddItem;