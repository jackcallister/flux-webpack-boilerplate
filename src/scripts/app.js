require("../styles/main.scss");

var React = require('react');
var Component = require('./components/component');

window.React = React; // export for http://fb.me/react-devtools

var App = React.createClass({

  render: function() {
    return <Component />;
  }

});

React.render(<App />, document.getElementById('app'));
