const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
require('dotenv').config();


const connect = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECT)
        console.log('Conectaste a la red musical')
    } catch {
        console.log('no se pudo conectar al stock')
    }
}

const connectUser = async () => {
    try {
        await mongoose.createConnection(process.env.USERS_DB_CONNECT)
        console.log('Conectaste a la red musical n° 2')
    } catch {
        console.log('no se pudo conectar a los usuarios')
    }
}


module.exports = {connect, connectUser}

