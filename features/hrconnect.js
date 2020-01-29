//
// Provides the HRConnect link
//

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(
    ["hrconnect"],
    "message,direct_message",
    async (bot, message) => {
      // Message the bot will return to the user when triggered
      await bot.reply(message, {
        markdown:
          "**https://gateway.ultiproworkplace.com/?cpi=eplus:saml20:prod**"
      }); // Double Asterisk makes text bold
    }
  );

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({
    command: "HRConnect",
    text: "HRConnect Benefits Management"
  });
};
