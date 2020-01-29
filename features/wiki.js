//
// Provides the ePlus Wiki link
//

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(["wiki"], "message,direct_message", async (bot, message) => {
    // Message the bot will return to the user when triggered
    await bot.reply(message, {
      markdown: "**https://wiki.eplus.com/index.action#all-updates**"
    }); // Double Asterisk makes text bold
  });

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({ command: "Wiki", text: "ePlus Wikipedia" });
};
