const axios = require('axios');


const getClima = async( lat, lon ) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=-${lat}&lon=${lon}&appid=00d1808820d42b4b90f5b0d2114af380&units=metric`)
    
    return resp.data.main.temp;

}

module.exports = {
    getClima
}