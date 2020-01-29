//
// Provides the Concur travel & expense reports link
//

module.exports = function(controller) {
  // Trigger(s) for activating the command
  controller.hears(
    ["concur", "travel", "expense", "expense report", "expenses"],
    "message,direct_message",
    async (bot, message) => {
      // Message the bot will return to the user when triggered
      await bot.reply(message, {
        markdown: "**https://www.concursolutions.com/home.asp**"
      }); // Double Asterisk makes text bold
    }
  );

  // Adds this command to the list of commands returned when typing 'help'
  controller.commandHelp.push({
    command: "Concur",
    text: "Concur Travel & Expense Reports"
  });
};
