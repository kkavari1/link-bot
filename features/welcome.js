//
// Welcome message
// sent as the bot is added to a Room
//
module.exports = function(controller) {
  controller.on("memberships.created", async (bot, message) => {
    await bot.reply(
      message,
      "Hey, I'm the ePlus Link Bot. Thanks for reaching out! \nI can help you quickly find some frequently acccessed corporate links and documenets."
    );

    if (message.data.roomType == "direct") {
      await bot.reply(message, {
        markdown: "Just type **help** to see what I can do for you!"
      });
    } else if (message.data.roomType == "group") {
      await bot.reply(message, {
        markdown:
          "Since this isn't a direct 1:1 space, to respond I need to be directly mentioned. Just type **@ePlus Link Bot help** to see what I can do for you!"
      });
    }
  });
};
