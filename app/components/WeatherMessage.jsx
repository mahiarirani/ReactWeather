let React = require('react');

let WeatherMessage = ({temp, location}) => (
    <h1>It's {temp} in {location}</h1>
);

module.exports = WeatherMessage;

