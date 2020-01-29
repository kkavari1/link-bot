//
// Provides the ePlus employee benefits guide for 2020
//

var fs = require("fs");

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(
    ["benefits"],
    "message,direct_message",
    async (bot, message) => {
      await bot.reply(message, {
        text: "2020 ePlus Employee Benefits Guide",
        files: [
          "https://cdn.glitch.com/54aa0692-b923-480e-9ffa-3a39e3889dc3%2F2020%20ePlus%20Benefits%20Guide.pdf?v=1580317498413"
        ]
      });
    }
  );

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({
    command: "Benefits",
    text: "2020 ePlus Employee Benefits Guide"
  });
};
