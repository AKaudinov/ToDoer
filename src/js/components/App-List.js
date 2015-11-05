var React = require('react');
var Item = require('./App-Item.js');
var AddItem = require('./App-AddItem.js');
var RemoveItem = require('./App-RemoveItem.js');
var AppStore = require('../stores/App-Store.js');
var StoreWatchMixin = require('../mixins/StoreWatchMixin.js');
var Storage = require('../Storage/App-Storage.js');
var ToDoImage = '/assets/ToDoArrow.png';
var CompletedImage ='/assets/CompletedCheckBox.png';

function getTodoList(){
	return {listItems: AppStore.getList()}
}


var List = React.createClass({
	mixins:[StoreWatchMixin(getTodoList)],
	updateCheckBtn: function(btnid){
		var chckBox = document.getElementById(btnid);
		if(chckBox.className == "btn btn-success")
		{
			chckBox.value = "/assets/CompletedCheckBox.png";
			chckBox.className = "btn btn-info";
		}
		else
		{
			chckBox.value = "/assets/ToDoArrow.png";
			chckBox.className = "btn btn-success";
		}

		var button = {
			detail: chckBox.className,
			val: chckBox.value
		}
		Storage.setLocalStorage(btnid, button);
	},
	getClassName: function(btnid){
		var button = Storage.retrieveLocalStorage(btnid);
		var details = button != null ? button.detail : "btn btn-success";
		return details;
	},
	getValue: function(btnid){
		var button = Storage.retrieveLocalStorage(btnid);
		var value = button != null ? button.val : ToDoImage;
		return value;
	},
	render: function(){
		if(this.state.listItems != null)
		{
			var listItems = this.state.listItems.map(function(listItem,i){
				if(listItem != null)
				{
					var buttonid = "btnCheck" + [i].toString();
					return(
					<div className="col-lg-12" key={i}>
						<div className="form-group">
							<div className="input-group">
								<span className="input-group-btn">
									<button className={this.getClassName(buttonid)} type="submit" id={buttonid} onClick={this.updateCheckBtn.bind(this,buttonid)}>
										<img src={this.getValue(buttonid)} width="17" height="15"/>
									</button>
								</span>
								<Item item = {listItem} index={i} buttonId={buttonid} />
								<RemoveItem index = {i} buttonId={buttonid} />
							</div>
						</div>
					</div>
					);
				}	
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

