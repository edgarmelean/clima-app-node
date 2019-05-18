const argv = require('./config/yargs').argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const temperatura = require('./temperatura/temperatura');


/*.getLugarLatLon(argv.direccion)
    .then(console.log);*/

//clima.getClima(34.610001, -58.369999)
//        .then(console.log)
//        .catch(console.log);

const getInfo = async (direccion) => {

    try {
    const info = await lugar.getLugarLatLon(direccion);
    const temp = await clima.getClima(info.lat, info.lon);
    return `el clima de ${info.direccion} es de ${temp}°C.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;        
    }

}
getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);
