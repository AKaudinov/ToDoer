var React = require('react');
var AppActions = require('../actions/App-Actions.js');
var Storage = require('../Storage/App-Storage.js');

var RemoveItem = React.createClass({
    handler: function () {
        AppActions.removeItem(this.props.index)
    },
    render: function () {
        return (
            <span className="input-group-btn">
				<button className="btn btn-danger" type="button" onClick={this.handler}>x</button>
			</span>
        )
    }
});

module.exports = RemoveItem;