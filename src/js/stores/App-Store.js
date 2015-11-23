var AppDispatcher = require('../dispatchers/App-Dispatcher.js');
var AppConstants = require('../constants/App-Constants.js');
var Storage = require('../Storage/App-Storage.js');
var EventEmitter = require('events').EventEmitter;
var assign = require('react/lib/Object.assign');
var CHANGE_EVENT = 'change';
var ListStorage = "ToDolist";

var _list = [];

function _returnList() {
    return _list = Storage.retrieveLocalStorage();
}

function _removeItem(index) {
    _list[index] = null;
    if (!_list.some(function(item){return item != null})) {
        _list = [];
    }
    Storage.setLocalStorage(_list);
}

function _addItem(item) {
    _list.push({
        text: item,
        done: false
    });
    Storage.setLocalStorage(_list);
}

function _editItem(item, index) {
    _list[index].text = item;
    Storage.setLocalStorage(_list);
}

function _updateItemProgress(index, isDone) {
    _list[index].done = isDone;
    Storage.setLocalStorage(_list);
}

var AppStore = assign(EventEmitter.prototype, {
    emitChange: function () {
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function (callBack) {
        this.on(CHANGE_EVENT, callBack)
    },
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callBack)
    },

    getList: function () {
        return _returnList();
    },

    dispatcherIndex: AppDispatcher.register(function (payload) {
        var action = payload.action //this is our action from handleViewAction
        switch (action.actionType) {
            case AppConstants.ADD_ITEM:
                _addItem(action.toDoItem);
                break;
            case AppConstants.REMOVE_ITEM:
                _removeItem(action.index);
                break;
            case AppConstants.EDIT_ITEM:
                _editItem(action.toDoItem, action.index)
                break;
            case AppConstants.REMOVE_ALERT:
                break;
            case AppConstants.UPDATE_CHECKBOX:
                _updateItemProgress(action.index, action.isDone);
                break;
        }
        AppStore.emitChange();

        return true;
    })
});

module.exports = AppStore;