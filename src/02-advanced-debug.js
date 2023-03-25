function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1
        }
      }
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2
        },
        "Bismak Biyombo": {
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12
        }
      }
    }
  };
}
console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  for (let gameKey in game) {
    // are you ABSOLUTELY SURE what 'gameKey' is?
    // use the debugger to find out!
    debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
      // are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      // what is 'data' at each loop through out this block?
      // when will the following line of code work and when will it break?
      let data = teamObj.player
      for (let key in data) {
        debugger
      }
    }
  }
}
function bigShoeRebounds() {
  let largestShoeSize = 0;
  let playerWithLargestShoe = null;
  const game = gameObject();
  
  // Iterate through all players to find the one with the largest shoe size
  for (const team in game) {
    const players = game[team].players;
    for (const playerName in players) {
      const player = players[playerName];
      if (player.shoe > largestShoeSize) {
        largestShoeSize = player.shoe;
        playerWithLargestShoe = player;
      }
    }
  }
  
  // Return the number of rebounds for the player with the largest shoe size
  return playerWithLargestShoe.rebounds;
}

function mostPointsScored() {
  let maxPoints = 0;
  let playerName = "";
  for (const team in gameObject()) {
    for (const player in gameObject()[team].players) {
      if (gameObject()[team].players[player].points > maxPoints) {
        maxPoints = gameObject()[team].players[player].points;
        playerName = player;
      }
    }
  }
  return playerName;
}

function winningTeam() {
  let homeTeamPoints = 0;
  let awayTeamPoints = 0;
  for (const player in gameObject().home.players) {
    homeTeamPoints += gameObject().home.players[player].points;
  }
  for (const player in gameObject().away.players) {
    awayTeamPoints += gameObject().away.players[player].points;
  }
  return homeTeamPoints > awayTeamPoints ? gameObject().home.teamName : gameObject().away.teamName;
}

function playerWithLongestName() {
  let longestName = "";
  for (const team in gameObject()) {
    for (const player in gameObject()[team].players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }
  return longestName;
}

function doesLongNameStealATon() {
  const game = gameObject(); 
  let mostSteals = 0;
let longestPlayerName='';
  // Find player with longest name
  for (const team in game) {
    for (const player in game[team].players) {
      if (player.length > longestPlayerName.length) {
        longestPlayerName = player;
      }
    }
  }

  console.log("longestPlayerName: ", longestPlayerName);
  console.log("home players: ", game.home.players);
  
  console.log("hom home players: ", game.home.players["Alan Anderson"]);


  // Find player with most steals
  for (const team in game) {
    for (const player in game[team].players) {
      if (game[team].players[player].steals > mostSteals) {
        mostSteals = game[team].players[player].steals;
      }
    }
  }

  // Check if player with longest name had most steals
  const homePlayer = game.home.players[longestPlayerName];
  const awayPlayer = game.away.players[longestPlayerName];
  if (homePlayer && awayPlayer) {
    return homePlayer.steals === mostSteals || awayPlayer.steals === mostSteals;
  } else if (homePlayer) {
    return homePlayer.steals === mostSteals;
  } else if (awayPlayer) {
    return awayPlayer.steals === mostSteals;
  } else {
    return false; // player not found in either team
  }
}


console.log(playerWithLongestName(gameObject()))
console.log(winningTeam())
console.log(mostPointsScored())
console.log(doesLongNameStealATon());
// then, call the function so it runs!
goodPractices()
