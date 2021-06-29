const net = require("net");
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP, // IP address here,
    port: PORT // PORT number here,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to game server');

    // send name to the server
    conn.write("Name: JTJ");

    // setInterval(() => conn.write("Move: up"), 50)

    // receive messages from the server
    conn.on("data", (data) => {
      console.log(data);
    });
  });
  
  return conn;
};

module.exports = {
  connect
};