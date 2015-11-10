var React = require('react');
var Item = require('./App-Item.js');
var AddItem = require('./App-AddItem.js');
var RemoveItem = require('./App-RemoveItem.js');
var AppStore = require('../stores/App-Store.js');
var StoreWatchMixin = require('../mixins/StoreWatchMixin.js');
var Storage = require('../Storage/App-Storage.js');
var AppActions = require('../actions/App-Actions.js');
var ToDoImage = '/assets/ToDoArrow.png';
var CompletedImage ='/assets/CompletedCheckBox.png';

function getTodoList(){
	return { listItems: AppStore.getList() };
}

var List = React.createClass({
	mixins:[StoreWatchMixin(getTodoList)],
	updateCheckBox: function(itemIndex, isDone){
		AppActions.updateCheckBox(itemIndex, isDone);
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
									<button className={listItem.done ? "btn btn-info" : "btn btn-primary"} type="button" id={buttonid} onClick={this.updateCheckBox.bind(this,i,listItem.done ? false : true)}>
										<img src={listItem.done ? CompletedImage : ToDoImage} width="17" height="15"/>
									</button>
								</span>
								<Item item = {listItem.text} index={i} buttonId={buttonid}/>
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

