# Level Creation Guide
This file briefly covers the other files within the 'data' folder, as well as how to add your own levels, playlists, and cards.

## cards.js
This file is split into three sections:
- const card: An array with the list of cards in the game. They do not have to be in alphabetical order. Each index is an object that contains each card's name, description, and background color.
- function cardAction: This function is called when a card is successfully played. It contains a switch statement that performs the card's specific action. Many of these will check or alter a feature (see below).
- function setCardColor: This function will set the specific rgba background color for each card with the corresponding color. Most are transparent so that the card backgrounds are visible through the color.

## levels.js
This file contains arrays, each of which constitutes a playlist. The first item in each array is the playlist info. Every subsequent item is a level within the playlist. Below is a list of elements within each level:
- name [string]: The name of the level.
- dialogue [object]: Contains two arrays, which themselves contain lines of dialogue for the start and end of the level.
- deck [array]: An array of arrays. For each subarray, insert the name of the card followed by the amount that should be within the card deck.
- shuffle [boolean]: Use false for puzzle-based levels, where you want the cards to be fixed.
- feature [object]: A list of unique features that can be applied. See list below for more information on each one.

## playlists.js
Levels are placed within playlists. This file contains a function that adds playlists to the main array. To add your custom playlist, simply add the array name it is contained in to the list.

## Features
Features are listed within each level. If the features are disabled, the cards associated with them will do nothing.
- health [boolean]: Adds three hearts of heath that can be depleted by Knife, Bleed, etc. Once the plaayer's health reaches zero, they lose the level.
- sanity [boolean]: The sanity meter starts at twenty, and drains one point each turn. Once it reaches zero, the player loses the level.
- timer [integer]: Adds a timer on the screen. The player must finish the level before the timer reaches zero or the player loses. (Set the value to -1 to disable the feature.)

# Conclusion
Hopefully this guide helped you interpret the crazy code I have constructed! Please reach out if you have any questions or run into any problems.