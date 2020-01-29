//
// Provides the ePlus employee recognition
//

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(
    ["Recognition"],
    "message,direct_message",
    async (bot, message) => {
      // Message the bot will return to the user when triggered
      await bot.reply(message, { markdown: "**https://eplus.kazoohr.com/**" }); // Double Asterisk makes text bold
    }
  );

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({
    command: "Recognition",
    text: "ePlus Employee Recognition"
  });
};
