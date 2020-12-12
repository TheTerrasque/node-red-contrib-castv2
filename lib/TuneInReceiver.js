"use strict";
const util = require('util');
const MediaReceiverBase = require('./MediaReceiverBase');

function TuneInReceiver(client, session) {
    MediaReceiverBase.apply(this, arguments);
}

TuneInReceiver.APP_ID = '12F05308';
TuneInReceiver.APP_NAME = 'TuneIn';

util.inherits(TuneInReceiver, MediaReceiverBase);

module.exports = TuneInReceiver;
