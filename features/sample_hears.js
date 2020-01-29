/**
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License.
 */
module.exports = function(controller) {
  // use a regular expression to match the text of the message
  controller.hears(
    new RegExp(/^\d+$/),
    ["message", "direct_message"],
    async function(bot, message) {
      await bot.reply(message, {
        text:
          "Sorry, none of my available commands contain any numbers. Please try again."
      });
    }
  );

  // match any one of set of mixed patterns like a string, a regular expression
  controller.hears(
    ["allcaps", new RegExp(/^[A-Z\s]+$/)],
    ["message", "direct_message"],
    async function(bot, message) {
      await bot.reply(message, { text: "WHY ARE YOU YELLING AT ME?!" });
    }
  );
};
