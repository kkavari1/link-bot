# Simple ePlus Corporate Link/Document Webex Teams Bot


** This is NOT officially supported or endorsed by ePlus and was created as a side-project for testing, exploration, and internal use by an ePlus engineer. **


- Add the bot to a space by inviting epluslinkbot@webex.bot
  - Type "Help" for information on how to use the bot 


- Project Page: https://glitch.com/~kiakavari
- Bot page: https://developer.webex.com/my-apps/eplus-link-bot
- Built using: https://github.com/CiscoDevNet/botkit-template


- Still considered a work in progress.. To Do:
  - Prevent welcome message from fireing off 2x - memberships.created is used to determine when the bot is added to a space, but both the user and the bot are creating a new membership to a room, therefore the welcome message appears 2x
  - Create an exportable .html file for quickly adding all the links to user's browser bookmarks
  - Create a command that will allow users of the bot to suggest new commands and links to be added to the bot
  - Further testing & catch exceptions 
  - You tell me! :)
