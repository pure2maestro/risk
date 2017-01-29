function Game () {
  this.territories = _shuffle([
    new Territory (1, 'Alaska', 1, [32, 2, 6]),
    new Territory (2, 'Alberta', 1, [1, 6, 7, 9]),
    new Territory (3, 'Central America', 1, [4, 9, 13]),
    new Territory (4, 'Eastern United States', 1, [3, 7, 8, 9]),
    new Territory (5, 'Greenland', 1, [6, 7, 8, 15]),
    new Territory (6, 'Northwest Territory', 1, [1, 2, 5, 7]),
    new Territory (7, 'Ontario', 1, [2, 4, 5, 6, 8, 9]),
    new Territory (8, 'Eastern Canada', 1, [4, 5, 7]),
    new Territory (9, 'Western United States', 1, [2, 3, 4, 7]),
    new Territory (10, 'Argentina', 2, [11, 12]),
    new Territory (11, 'Brazil', 2, [1, 3, 4, 25]),
    new Territory (12, 'Peru', 2, [10, 11, 13]),
    new Territory (13, 'Venezuela', 2, [3, 11, 12]),
    new Territory (14, 'Great Britain', 3, [15, 16, 17, 20]),
    new Territory (15, 'Iceland', 3, [5, 14, 17]),
    new Territory (16, 'Northern Europe', 3, [14, 17, 18, 19, 20]),
    new Territory (17, 'Scandinavia', 3, [14, 15, 16, 19]),
    new Territory (18, 'Southern Europe', 3, [16, 19, 20, 23, 25, 33]),
    new Territory (19, 'Russia', 3, [16, 17, 18, 27, 33, 37]),
    new Territory (20, 'Western Europe', 3, [14, 16, 18]),
    new Territory (21, 'Central Africa', 4, [22, 23, 25, 26]),
    new Territory (22, 'East Africa', 4, [21, 23, 24, 25, 26, 33]),
    new Territory (23, 'Egypt', 4, [18, 22, 25, 33]),
    new Territory (24, 'Madagascar', 4, [22, 26]),
    new Territory (25, 'North Africa', 4, [11, 18, 20, 21, 22, 23]),
    new Territory (26, 'South Africa', 4, [21, 22, 24]),
    new Territory (27, 'Afghanistan', 5, [19, 28, 29, 33, 37]),
    new Territory (28, 'China', 5, [1, 29, 34, 35, 36, 37]),
    new Territory (29, 'India', 5, [1, 2, 33, 35]),
    new Territory (30, 'Irkutsk', 5, [32, 34, 36, 38]),
    new Territory (31, 'Japan', 5, [32, 34]),
    new Territory (32, 'Kamchatka', 5, [1, 30, 31, 34, 38]),
    new Territory (33, 'Middle East', 5, [18, 19, 22, 23, 27, 29]),
    new Territory (34, 'Mongolia', 5, [28, 30, 31, 32, 36]),
    new Territory (35, 'Southeast Asia', 5, [28, 29, 40]),
    new Territory (36, 'Siberia', 5, [28, 30, 34, 37, 38]),
    new Territory (37, 'Ural', 5, [19, 27, 28, 36]),
    new Territory (38, 'Yakutsk', 5, [30, 32, 36]),
    new Territory (39, 'Eastern Australia', 6, [41, 42]),
    new Territory (40, 'Indonesia', 6, [35, 41, 42]),
    new Territory (41, 'New Guinea', 6, [39, 40, 42]),
    new Territory (42, 'Western Australia', 6, [39, 40, 41])
  ]);

  this.players = [];
  this.stacksTurnedIn = 0;
}

Game.prototype.start = function (playersArg){
  /*
   *  For now, there will always only be 3 players. Two humans, one neutral.
   *
   */

   if (playersArg.length !== 2){
     return false;
   }

   this.players = this.players.concat(playersArg);
   var neutralPlayer = new Player(3, "Kaiser the Neutral");
   this.players.push(neutralPlayer);





};