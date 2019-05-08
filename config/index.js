var fs = require('fs');

var tls = {
  key: fs.readFileSync('./config/server.key'),
  cert: fs.readFileSync('./config/server.crt')
};

module.exports = {
  constant: {
    LOOPBACK_CLIENT_ID: 'LOOPBACK_CLIENT_ID',
    TURN_BASE_URL: 'https://demo-node-apprtc.herokuapp.com',
    TURN_URL_TEMPLATE: '%s/turn',
    WSS_HOST_PORT_PAIRS: ['node-apprtc-ws.herokuapp.com'],
    RESPONSE_UNKNOWN_ROOM: 'UNKNOWN_ROOM',
    RESPONSE_UNKNOWN_CLIENT: 'UNKNOWN_CLIENT',
    RESPONSE_ROOM_FULL: 'FULL',
    RESPONSE_DUPLICATE_CLIENT: 'DUPLICATE_CLIENT',
  },
  server: {
    host: '0.0.0.0',
    port: 1360,
    tls: tls
  }
};
