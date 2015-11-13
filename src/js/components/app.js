var React = require('react');
var List = require('./App-List.js');

var App = React.createClass({
    render: function () {
        return <div align="center">
            <List />
        </div>
    }
});

module.exports = App;