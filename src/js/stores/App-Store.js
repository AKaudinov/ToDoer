var AppDispatcher = require('../dispatchers/App-Dispatcher.js');
var AppConstants = require('../constants/App-Constants.js');
var Storage = require('../Storage/App-Storage.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');
var CHANGE_EVENT = 'change';
var ListStorage = "ToDolist";

var _list = Storage.retrieveLocalStorage();

function _removeItem(index){
	_list[index].inList = false;
	_list[index] = null;
	if(!_list.some(item => item != null))
	{
	_list = [];
	}
	Storage.setLocalStorage(ListStorage, _list);
}

function _addItem(item){
	item['inList'] = true;
	_list.push(item);
	Storage.setLocalStorage(ListStorage, _list);
}

function _editItem(item,index){
	_list[index] = item;
	Storage.setLocalStorage(ListStorage, _list);
}

var AppStore = assign(EventEmitter.prototype,{
	emitChange: function(){
		this.emit(CHANGE_EVENT)
	},
	addChangeListener: function(callBack){
		this.on(CHANGE_EVENT, callBack)
	},
	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callBack)
	},

	getList: function(){
		return _list
	},

	dispatcherIndex: AppDispatcher.register(function(payload){
		var action = payload.action //this is our action from handleViewAction
		switch(action.actionType){
			case AppConstants.ADD_ITEM:
			_addItem(payload.action.toDoItem);
			break;
			case AppConstants.REMOVE_ITEM:
			_removeItem(payload.action.index);
			break;
			case AppConstants.EDIT_ITEM:
			_editItem(payload.action.toDoItem,payload.action.index)
			break;
		}
		AppStore.emitChange();

		return true;
	})
})

module.exports = AppStore;