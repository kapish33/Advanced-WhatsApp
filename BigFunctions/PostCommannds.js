const fetch = require("node-fetch");
async function setCommand(key, value) {
  // post to server
  const response = await fetch(
    "https://whatsappmeserver.herokuapp.com/commands",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        key: key,
        value: value,
      }),
    }
  );
  const result = await response.json();
  return result;
}
module.exports = setCommand;
