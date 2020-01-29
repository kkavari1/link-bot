//
// Provides the ePlus Guest Wifi pdf
//

var fs = require("fs");

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(
    ["wifi", "guest"],
    "message,direct_message",
    async (bot, message) => {
      await bot.reply(message, {
        text:
          "This document provides instructions on getting onto the ePlus Guess Wifi Network",
        files: [
          "https://cdn.glitch.com/54aa0692-b923-480e-9ffa-3a39e3889dc3%2Fguest_wireless.pdf?v=1580316470844"
        ]
      });
    }
  );

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({
    command: "Wifi",
    text: "ePlus Guest Wifi Access"
  });
};
