'use strict';


var fs = require('fs');


module.exports.load = function(options) {

    options = options || {};
    var basePath = options.basePath || './config';
    var env = options.env || 'development';
    var logger = options.logger || console;
    var filePath = basePath + '/' + env + '.json';

    logger.info('Loading config from ' + filePath);
    logger.debug('Env: ' + env);

    var config;
    try {
        config = require(filePath);
        logger.info('Loaded config ' + env);
        return config;
    } catch(err) {
        throw err;
    }
};
