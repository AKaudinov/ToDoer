var React = require('react');
var AddItem = require('./App-AddItem.js');
var EditItem = require('./App-EditItem.js');
var RemoveItem = require('./App-RemoveItem.js');
var AppStore = require('../stores/App-Store.js');
var StoreWatchMixin = require('../mixins/StoreWatchMixin.js');

function getTodoList(){
	return {listItems: AppStore.getList()}
}

var List = React.createClass({
	mixins:[StoreWatchMixin(getTodoList)],
	updateProgress: function(){
		document.getElementById('btnCheck').value = "√";
	},
	render: function(){
		if(this.state.listItems != null)
		{
			var listItems = this.state.listItems.map(function(listItem,i){
				return(
					<div className="col-lg-12" key={i}>
					<div className="form-group">
						<div className="input-group">
							<span className="input-group-btn">
							<button className="btn btn-notify" type="button" id="btnCheck" onClick={this.updateProgress}>S</button>
							</span>
							<input readOnly type="text" className="form-control" defaultValue={listItem}/>
							<RemoveItem index = {i}/>
							<EditItem item = {listItem} index = {i}/>
						</div>
					</div>
					</div>
				);	
			})
		}
		return (
			<div className="well bs-component">
				<form className="form-horizontal">
					<fieldset>
						<legend>To do list</legend>
						{listItems}
						<AddItem />
					</fieldset>
				</form>
			</div>
		)
	}
});

module.exports = List;

