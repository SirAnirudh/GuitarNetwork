const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const {sequelize} = require('./models');
const app = express();
const config = require('./config/config');



//handle logs
//app.use(morgan('combined'));

//allow app to parse json requests
app.use(bodyParser.json());

//allow worldwide client to access this
app.use(cors());


require('./routes') (app);

//setup backend localhost ONCE sequelize has synced with the sql lite database
sequelize.sync({force: false}).then(() =>{
    app.listen(config.port);
    console.log("server has started on port 8081")
});
