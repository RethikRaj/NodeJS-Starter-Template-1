const express = require('express');

const { ServerConfig , Logger} = require('./config'); // ./config/index.js == ./config

const app = express();

const apiRoutes = require('./routers')

app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, ()=>{
    console.log(`Server is running on port ${ServerConfig.PORT}`);
    Logger.info('Succesfully started the server')
})