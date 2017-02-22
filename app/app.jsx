const React = require('react');
const ReactDOM = require('react-dom');
const {Route, Router, IndexRoute, hashHistory} = require('react-router');
var Main = require('Main');


//Load foundation
require('style-loader!css-loader!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

//app css
require('style-loader!css-loader!sass-loader!appStyle');

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={Main}>

    </Route>
  </Router>,
  document.getElementById('app')
);
