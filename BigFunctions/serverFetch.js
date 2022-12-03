const fetch = require("node-fetch");
var requestOptions = {
  method: "GET",
  redirect: "follow",
};

async function getCommands() {
  const response = await fetch(
    "https://whatsappmeserver.herokuapp.com/commands"
  );
  const result = await response.json();
  return result;
}
module.exports = getCommands;
