const team = {
  _players: [
    {firstName: 'Pablo',lastName: 'Sanchez',age: 21},
    {firstName: 'Ernesto',lastName: 'Spaghetti',age: 46},
    {firstName: 'Christos',lastName: 'Felange',age: 21},
  ],
  _games: [
  	{opponent: 'Oldies', teamPoints: 2, opponentPoints: 7},
  	{opponent: 'Brexiters', teamPoints: 3, opponentPoints: 0},
  	{opponent: 'Campaigners', teamPoints: 1, opponentPoints: 1},
  ],

  get players () {
    return this._players;
  },

  get games () {
    return this._games;
  },

  addPlayer (firstName, lastName, age) {
    let newPlayer = {
      firstName,
      lastName,
      age,
    };
    this._players.push(newPlayer);
  },

  addGame (opponent, teamPoints, opponentPoints) {
    let newGame = {
      opponent,
      teamPoints,
      opponentPoints,
    };
    this._games.push(newGame);
  },

};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Lisa', 'Leslie', 44);
team.addPlayer('Bugs', 'Bunny', 76);

team.addGame('Rabbits', 7, 5);
team.addGame('Dogs', 2, 1);
team.addGame('Cats', 6, 0);

console.log(team._games);
