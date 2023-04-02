const
  rpcGenerator = require("discordrpcgenerator"),

  // Add your client id in the index.js file
  IMAGE = "anime",
  SONG = "/vaulting",
  ARTIST = "/2fake";

module.exports = (client, 1091969152568270930) => rpcGenerator.getRpcImage(CLIENT_ID, IMAGE)
  .then(image => client.user.setPresence(
    rpcGenerator.createSpotifyRpc(client)
      .setApplicationId(CLIENT_ID)
      .setAssetsLargeImage(image.id)
      .setDetails(SONG)
      .setState(ARTIST)
      .toDiscord()
  ));
