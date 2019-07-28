const request = require('request');

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/a34da9e157fcbb51590168982cc2f272/' + encodeURIComponent(latitude) + ',' + encodeURIComponent(longitude) + '?units=si';

    request({ url, json: true }, (error, {body}) => {
        if (error) {
            callback('Unable to Connect to weather service!', undefined);
        } else if (body.error)  {
            callback('Unable to find location. Try another search', undefined);
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + " degrees celsius. The precipitation is " + body.currently.precipProbability + ". The current wind speed is " + body.currently.windSpeed + " m/s.")
        }
    });
};

module.exports = forecast;