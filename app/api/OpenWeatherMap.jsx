let axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f3aaf18ec64521479adc4f6e2032c41e&units=metric';

module.exports = {
    getTemp: function (location) {
        let encodedLocation = encodeURIComponent(location);
        let requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.cod && res.message){
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        },function (res) {
           throw new Error(res.message);
        });
    }
};