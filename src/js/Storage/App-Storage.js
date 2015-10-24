var React = require('react');
var listStorage = "ToDolist";

var Storage = {
	setLocalStorage: function(storageName, data){
		localStorage.setItem(storageName, JSON.stringify(data));
	},
	retrieveLocalStorage: function(storageName){
		if(typeof storageName === "undefined" || storageName == null)
		{
			var tempList = localStorage.getItem(listStorage) != null ? JSON.parse(localStorage.getItem(listStorage)) : [];
			if(tempList.length == 0)
			{
				localStorage.removeItem(listStorage);
			}
			return tempList;
		}
		return JSON.parse(localStorage.getItem(storageName));
	},
	removeItemFromStorage: function(storageName){
		localStorage.removeItem(storageName);
	}
}

module.exports = Storage;