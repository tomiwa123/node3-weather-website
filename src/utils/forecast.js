const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=5d561061a4fba6c8f2de096d37d321e8&query=${latitude},${longitude}`

    request({
        url,
        json: true
    }, (error, {body}) => {
        if (error) {
            callback("Unable to connect to weather services", undefined)
        } else if (body.error) {
            callback("Unable to find location", undefined)
        } else {
            callback(undefined, 
                `The temperature is currently ${body.current.temperature} and it feels like ${body.current.feelslike}. The humidity is ${body.current.humidity}%`)
        }
    })
}

module.exports = forecast
