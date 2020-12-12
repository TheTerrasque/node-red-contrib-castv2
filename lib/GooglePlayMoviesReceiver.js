"use strict";
const util = require('util');
const MediaReceiverBase = require('./MediaReceiverBase');

function GooglePlayMoviesReceiver(client, session) {
    MediaReceiverBase.apply(this, arguments);
}

GooglePlayMoviesReceiver.APP_ID = '9381F2BD';
GooglePlayMoviesReceiver.APP_NAME = 'GooglePlayMovies';

util.inherits(GooglePlayMoviesReceiver, MediaReceiverBase);

module.exports = GooglePlayMoviesReceiver;
