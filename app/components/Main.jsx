let React = require('react');
let Nav = require('Nav');

let Main = (props) => (
    <div>
        <Nav/>
        <h2>Main Component</h2>
        {props.children}
    </div>
);

module.exports = Main;