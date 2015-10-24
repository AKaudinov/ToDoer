var Dispatcher = require('flux').Dispatcher;
var assign = require('react/lib/Object.assign');

var AppDispatcher = assign(new Dispatcher(),{
	handleViewAction: function(action,index){
		console.log('action', action);
		if(typeof index === "undefined" || index == null){
			this.dispatch({
				source: 'VIEW_ACTION',
				action: action,
			})
		}
		else {
			this.dispatch({
				source: 'VIEW_ACTION',
				action: action,
				index: index
			})
		}
	}
})

module.exports = AppDispatcher;	