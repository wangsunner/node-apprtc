# node-apprtc
Nodejs based AppRTC server

## About
node-apprtc is a port of AppRTC from the Google WebRTC Demo to run entirely in the nodejs environment

## Demo
See the demo [here](https://demo-node-apprtc.herokuapp.com)

## Setup
```
$ git clone https://github.com/wangsunner/node-apprtc
$ cd node-apprtc
$ npm install

iptables -I INPUT -p tcp --dport 1360 -j ACCEPT
```

## Run node-apprtc
```
$ node index.js
```

Open your browser and navigate to http://localhost:4567

##To Do
- [ ] Implementing memcached or redis options
- [ ] Adding built-in websocket server

## License
MIT
