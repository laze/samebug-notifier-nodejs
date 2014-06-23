/**
 * Samebug Node.js Notifier Recorder
 *
 */

'use strict';

var samebugRecorder = function() {
    var _samebugRecorder = this,
        http = require('https');

    _samebugRecorder.send = function(options) {
        write('Sanyi');
//        var data = JSON.stringify(options.message);
//
//        var httpOptions = {
//            host: 'api.raygun.io',
//            port: 443,
//            path: '/entries',
//            method: 'POST',
//            headers: {
//                'Content-Type': 'application/json',
//                'Content-Length': data.length,
//                'X-ApiKey': options.apiKey
//            }
//        };
//        var request = http.request(httpOptions, function (response) {
//            if (options.callback) {
//                options.callback(response);
//            }
//        });
//
//        request.write(data);
//        request.end();
    };
};