var React = require('react');
var Item = require('./App-Item.js');
var AddItem = require('./App-AddItem.js');
var RemoveItem = require('./App-RemoveItem.js');
var AppStore = require('../stores/App-Store.js');
var StoreWatchMixin = require('../mixins/StoreWatchMixin.js');
var Storage = require('../Storage/App-Storage.js');

function getTodoList(){
	return {listItems: AppStore.getList()}
}


var List = React.createClass({
	mixins:[StoreWatchMixin(getTodoList)],
	updateCheckBtn: function(btnid){
		var chckBox = document.getElementById(btnid);
		if(chckBox.innerHTML == "To do")
		{
			chckBox.innerHTML = "√";
			chckBox.className = "btn btn-info";
		}
		else
		{
			chckBox.innerHTML = "To do";
			chckBox.className = "btn btn-warning";
		}

		var button = {
			detail: chckBox.className,
			value: chckBox.innerHTML
		}
		Storage.setLocalStorage(btnid, button);
		//localStorage.setItem(btnid, JSON.stringify(button));
	},
	getClassName: function(btnid){
		var button = Storage.retrieveLocalStorage(btnid);
		//JSON.parse(localStorage.getItem(btnid));
		var details = button != null ? button.detail : "btn btn-warning";
		return details;
	},
	getValue: function(btnid){
		var button = Storage.retrieveLocalStorage(btnid);
		//JSON.parse(localStorage.getItem(btnid));
		var value = button != null ? button.value : "To do";
		return value;
	},
	render: function(){
		if(this.state.listItems != null)
		{
			var listItems = this.state.listItems.map(function(listItem,i){
				var buttonid = "btnCheck" + [i].toString();
				return(
					<div className="col-lg-12" key={i}>
					<div className="form-group">
						<div className="input-group">
							<span className="input-group-btn">
								<button className={this.getClassName(buttonid)} type="button" id={buttonid} onClick={this.updateCheckBtn.bind(this,buttonid)}>{this.getValue(buttonid)}</button>
							</span>
							<Item item = {listItem} index={i}/>
							<RemoveItem index = {i} buttonID={buttonid}/>
						</div>
					</div>
					</div>
				);	
			},this);
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

