'use strict';


var _ = require('lodash');
var winston = require('winston');


module.exports.level = function level(name, level) {

    var logger = this.get(name);
    logger.transports.console.level = level;
};

module.exports.get = function get(name) {

    var loggerName = _.upperFirst(_.camelCase(name));

    if(!winston.loggers.has(loggerName)) {
        winston.loggers.add(loggerName, {
            console: {
                level: 'info',
                label: loggerName,
                colorize: true,
                timestamp: true
            }
        });
    }

    return winston.loggers.get(loggerName);
}
