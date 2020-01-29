//
// Provides the ePlus Sharefile link
//

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(
    ["sharefile"],
    "message,direct_message",
    async (bot, message) => {
      // Message the bot will return to the user when triggered
      await bot.reply(message, {
        markdown: "**https://eplus.sharefile.com/home/shared**"
      }); // Double Asterisk makes text bold
    }
  );

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({
    command: "ShareFile",
    text: "ePlus Sharefile - Corporate File Storage"
  });
};
