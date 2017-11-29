let React = require('react');
let WeatherForm = require('WeatherForm');
let WeatherMessage = require('WeatherMessage');
let OpenWeatherMap = require('OpenWeatherMap');
let ErrorModal = require('ErrorModal');

let Weather = React.createClass({
    getInitialState: function () {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        let that = this;

        this.setState({
            isLoading: true,
            errorMessage: undefined
        });

        OpenWeatherMap.getTemp(location).then(function (temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            })
        }, function (error) {
            that.setState({
                isLoading: false,
                errorMessage: error.message
            });
        });
    },
    render: function () {
        let {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading)
                return <h3 className="text-center">Fetching weather...</h3>;
            else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}/>
            }
        }

        function renderError() {
            if (typeof errorMessage === 'string')
                return (
                    <ErrorModal message={errorMessage}/>
                );
        }

        return (
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
                {renderError()}
            </div>
        );

    }
});

module.exports = Weather;