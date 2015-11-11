var React = require('react');
var listStorage = "ToDolist";

var Storage = {
	setLocalStorage: function(storageName, data){
		localStorage.setItem(storageName, JSON.stringify(data));
	},
	retrieveLocalStorage: function(){
			var tempList = localStorage.getItem(listStorage) != null ? JSON.parse(localStorage.getItem(listStorage)) : [];
			if(tempList.length == 0)
			{
				localStorage.removeItem('ToDolist');
			}
			return tempList;
	}
}

module.exports = Storage;