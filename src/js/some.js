var k = require("./one.js");
function someFun(param) {
  console.log("consoling", k);
  return "hello fuckers , this is the param sent by you" + param;
}

module.exports = someFun;
