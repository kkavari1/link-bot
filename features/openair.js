//
// Provides the Open Air link
//

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(
    ["open", "openair", "time", "timesheets"],
    "message,direct_message",
    async (bot, message) => {
      // Message the bot will return to the user when triggered
      await bot.reply(message, {
        markdown:
          "**https://sso.eplus.com/idp/startSSO.ping?PartnerSpId=https://www.openair.com/saml.pl?o=B**"
      }); // Double Asterisk makes text bold
    }
  );

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({
    command: "OpenAir",
    text: "OpenAir - Submit Timesheets"
  });
};
