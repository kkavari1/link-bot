//
// Provides the MS Outlook Web App link
//

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(
    ["outlook"],
    "message,direct_message",
    async (bot, message) => {
      // Message the bot will return to the user when triggered
      await bot.reply(message, { markdown: "**https://email.eplus.com/**" }); // Double Asterisk makes text bold
    }
  );

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({
    command: "Outlook",
    text: "Microsoft Outlook Web Client"
  });
};
