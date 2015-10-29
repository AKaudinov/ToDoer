var AppConstants = require('../constants/App-Constants.js');
var AppDispatcher = require('../dispatchers/App-Dispatcher.js');

var AppActions = {
	addItem: function(toDoItem){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.ADD_ITEM,
			toDoItem: toDoItem
		})
	},
	removeItem: function(index){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.REMOVE_ITEM,
			index: index
		})
	},
	editItem: function(toDoItem,index){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.EDIT_ITEM,
			toDoItem: toDoItem,
			index: index
		})
	},
	closeAlert: function(){
		AppDispatcher.handleViewAction({
			actionType: AppConstants.CLOSE_ALERT
		})
	}
}

module.exports = AppActions;