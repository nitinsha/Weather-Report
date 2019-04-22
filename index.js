const express = require('express'),
        bodyParser = require('body-parser'),
        weatherRouteHandler = require('./routes/weatherRouteHandler'),
        swaggerUi = require('swagger-ui-express'),
        app = express(),
        swaggerDocument = require('./swagger/swagger.json');
app.use(bodyParser.json());
app.use('/api/v1/weather', weatherRouteHandler);
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(swaggerDocument));

app.listen(3000, ()=>{
    console.log("Server started on port 3000");    
})

module.exports = app