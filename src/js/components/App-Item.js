var React = require('react');
var AppActions = require('../actions/App-Actions.js');
var Storage = require('../Storage/App-Storage.js');

var Item = React.createClass({
    handler: function (itemId) {
        var item = document.getElementById(itemId).value;
        if (item == "") {
            AppActions.removeItem(this.props.index);
            return;
        }
        AppActions.editItem(item, this.props.index);
    },
    render: function () {
        var itemId = "toDoItem" + this.props.index.toString();
        return (
            <input type="text" className="form-control" id={itemId} onChange={this.handler.bind(this,itemId)}
                   defaultValue={this.props.item}/>
        )
    }
});

module.exports = Item;