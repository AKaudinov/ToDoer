var React = require('react');
var AppStore = require('../stores/App-Store.js');

var StoreWatchMixin = function(callBack){
	return{
		getInitialState: function(){
			return callBack(this)
		},
		componentWillMount: function(){
			AppStore.addChangeListener(this._onChange)
		},
		componentWillUnmount: function(){
			AppStore.removeChangeListener(this._onChange)
		},
		_onChange: function(){
			this.setState(callBack(this))
		}
	}
}

module.exports = StoreWatchMixin;