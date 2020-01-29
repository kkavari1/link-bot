//
// Welcome message
// sent as the bot is added to a Room
//
module.exports = function(controller) {
  controller.on("memberships.created", async (bot, message) => {
    let markDown = `Hi, I am the **${controller.adapter.identity.displayName}!**  \n`;
    markDown += "Type `help` to learn more about my skills.  ";

    if (message.data.roomType == "group") {
      markDown += `\n_Note that this isn't a direct 1:1 space.\n  I will answer only if mentioned!  \n`;
      markDown += `For help, enter: ${controller.checkAddMention(
        message.data.roomType,
        "help"
      )}_`;
    }

    await bot.reply(message, { markdown: markDown });
  });
};
