const React = require('react');
var Nav = require('Nav');

//stateless functional component
var Main = (props) => {
  return (
    <div>
      <Nav/>
      <div>
        <div>
          <p>main.jsx Rendered</p>
          {props.children}
        </div>
      </div>
    </div>
  );
};

module.exports = Main;
