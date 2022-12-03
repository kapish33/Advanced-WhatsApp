const fetch = require("node-fetch");

async function getSahajNumbers() {
  const response = await fetch("https://whatsappmeserver.herokuapp.com/sahaj");
  const result = await response.json();
  return result;
}
module.exports = getSahajNumbers;
