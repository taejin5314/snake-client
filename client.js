const net = require("net");

const connect = function() {
  const conn = net.createConnection({
    host: '10.0.2.15', // IP address here,
    port: '50541' // PORT number here,
  });

  conn.setEncoding("utf8");

  conn.on("connect", () => {
    console.log('Successfully connected to game server');
    conn.write("Name: TJT");
    conn.on("data", (data) => {
      console.log(data);
    });
  });
  
  return conn;
};

module.exports = {
  connect
};