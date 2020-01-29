//
// Provides the IT Help Desk link
//

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(
    ["IT Desk"],
    "message,direct_message",
    async (bot, message) => {
      // Message the bot will return to the user when triggered
      await bot.reply(message, { markdown: "**http://srm.eplus.com/**" }); // Double Asterisk makes text bold
    }
  );

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({
    command: "IT Desk",
    text: "ePlus IT Help Desk"
  });
};
