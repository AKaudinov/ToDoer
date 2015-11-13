var AppConstants = require('../constants/App-Constants.js');
var AppDispatcher = require('../dispatchers/App-Dispatcher.js');

var AppActions = {
    addItem: function (toDoItem) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.ADD_ITEM,
            toDoItem: toDoItem
        })
    },
    removeItem: function (index) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_ITEM,
            index: index
        })
    },
    editItem: function (toDoItem, index) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.EDIT_ITEM,
            toDoItem: toDoItem,
            index: index
        })
    },
    removeAlert: function () {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.REMOVE_ALERT
        })
    },
    updateCheckBox: function (index, isDone) {
        AppDispatcher.handleViewAction({
            actionType: AppConstants.UPDATE_CHECKBOX,
            index: index,
            isDone: isDone
        })
    }
};

module.exports = AppActions;