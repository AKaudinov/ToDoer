var React = require('react');
var Item = require('./App-Item.js');
var AddItem = require('./App-AddItem.js');
var RemoveItem = require('./App-RemoveItem.js');
var AppStore = require('../stores/App-Store.js');
var StoreWatchMixin = require('../mixins/StoreWatchMixin.js');

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
	},
	updateRead: function(){
		document.getElementById('readItem').readOnly = false;
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
								<button className="btn btn-warning" type="button" id={buttonid} onClick={this.updateCheckBtn.bind(this,buttonid)}>To do</button>
							</span>
							<Item item = {listItem} index={i}/>
							<RemoveItem index = {i}/>
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

