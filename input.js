const { MOVE_UP, MOVE_DOWN, MOVE_LEFT, MOVE_RIGHT } = require('./constants');
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);

  return stdin;
};

const handleUserInput = function(key) {
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') {
    connection.write(MOVE_UP);
  } else if (key === 's') {
    connection.write(MOVE_DOWN);
  } else if (key === 'a') {
    connection.write(MOVE_LEFT);
  } else if (key === 'd') {
    connection.write(MOVE_RIGHT);
  } else {
    if (key === '1') connection.write('Say: HELLO');
    if (key === '2') connection.write('Say: LOL');
    if (key === '3') connection.write('Say: I AM A SNAKE!!');
  }
};

module.exports = {
  setupInput
};