require("../styles/main.scss");

var React = require('react');
var App = require('./components/app');

window.React = React; // export for http://fb.me/react-devtools

React.render(<App />, document.getElementById('app'));
