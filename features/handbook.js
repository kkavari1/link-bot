//
// Provides the ePlus employee handbook for 2019 - NEEDS TO BE UPDATED TO 2020 BUT NOT ON eCONNECT
//

var fs = require("fs");

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(
    ["handbook"],
    "message,direct_message",
    async (bot, message) => {
      await bot.reply(message, {
        text: "ePlus Employee Handbook",
        files: [
          "https://cdn.glitch.com/54aa0692-b923-480e-9ffa-3a39e3889dc3%2FUS%20Employee%20Handbook%202019.pdf?v=1580317940690"
        ]
      });
    }
  );

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({
    command: "Handbook",
    text: "ePlus Employee Handbook"
  });
};
