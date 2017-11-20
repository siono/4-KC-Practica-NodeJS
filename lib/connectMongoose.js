'use strict';

const mongoose = require('mongoose');

var databaseUri = process.env.DATABASE_URI || process.env.MONGODB_URI;

if(!databaseUri){
    console.log('DATABASE_URI not specified, created bbdd dev');
    databaseUri = 'mongodb://localhost:27017/dev';
}

const conn = mongoose.connection;

conn.on('error', err => {
    console.log('Error de conexión', err);
    process.exit(1);
});

conn.once('open', () => {
    console.log('Conectado a MongoDB');
});

mongoose.connect(databaseUri);

module.exports= databaseUri;

