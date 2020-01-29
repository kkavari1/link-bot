//
// Respond to various 'hello' words, attach file by URL and from local file system
var fs = require("fs");

module.exports = function(controller) {
  controller.hears(
    ["hi", "hello", "howdy", "hey", "aloha", "hola", "bonjour", "oi"],
    "message,direct_message",
    async (bot, message) => {
      await bot.reply(
        message,
        "Hey! Thanks for reaching out!\nI'm a simple bot that helps ePlus employees find corporate links."
      );
      await bot.reply(message, {
        markdown:
          "You can type `help` to see available commands that I can execute"
      });
    }
  );

  controller.commandHelp.push({ command: "Hello", text: "Greetings!" });
};
