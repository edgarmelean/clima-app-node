const lugar = require('../lugar/lugar');

const clima = require('../clima/clima');

const getInfo = async (direccion) => {

    try {
    const info = await lugar.getLugarLatLon(direccion);
    const temperatura = await clima.getClima(info.lat, info.lon);
    return `el clima de ${info.direccion} es de ${temperatura}.`;
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;        
    }

}

module.exports = {
    getInfo
}