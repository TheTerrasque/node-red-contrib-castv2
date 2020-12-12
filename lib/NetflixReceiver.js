"use strict";
const util = require('util');
const MediaReceiverBase = require('./MediaReceiverBase');

function NetflixReceiver(client, session) {
    MediaReceiverBase.apply(this, arguments);
}

NetflixReceiver.APP_ID = 'CA5E8412';
NetflixReceiver.APP_NAME = 'Netflix';

util.inherits(NetflixReceiver, MediaReceiverBase);

module.exports = NetflixReceiver;
