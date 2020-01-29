//
// Provides the eConnect Homepage link
//

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(
    ["home", "home page", "econnect"],
    "message,direct_message",
    async (bot, message) => {
      // Message the bot will return to the user when triggered
      await bot.reply(message, {
        markdown: "**https://econnect.eplus.com/Pages/default.aspx**"
      }); // Double Asterisk makes text bold
    }
  );

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({
    command: "Homepage",
    text: "eConnect Homepage"
  });
};
