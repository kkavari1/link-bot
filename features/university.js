//
// Provides the ePlus University link
//

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(
    ["university"],
    "message,direct_message",
    async (bot, message) => {
      // Message the bot will return to the user when triggered
      await bot.reply(message, {
        markdown: "**https://eplusuniversity.bizlibrary.com/**"
      }); // Double Asterisk makes text bold
    }
  );

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({
    command: "University",
    text: "ePlus University - Online Learning"
  });
};
