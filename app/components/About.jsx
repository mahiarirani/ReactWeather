let React = require('react');

let About = () => (
    <div>
        <h1 className="text-center">About</h1>
        <p>This is a weather application built on React using the OpenWeatherMap.</p>
        <p>Here are links to the tools:</p>
        <ul>
            <li><a href="https://github.com/facebook/react">React</a> - Javascript Framework</li>
            <li><a href="http://openweathermap.org/">OpenWeatherMap</a> - Weather API</li>
        </ul>
    </div>
);

module.exports = About;