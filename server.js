
var logger = require('./logger');
var config = require('./config').load({
    env: process.env.NODE_ENV,
    logger: logger.get('Config')
});
