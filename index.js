var myGame = new Game();
var player1 = new Player(1, 'anthony');
var player2 = new Player(2, 'gio');

myGame.start([player1, player2]);

myGame.deploy(4, 9);
console.table(myGame.territories);
//myGame.attack(4, 7);

var map = [
    ["0.0.49"],
    ["0.0.15", "1.5.6", "0.0.12", "5.10.2", "0.0.14"],
    ["0.0.3", "1.1.3", "0.0.2", "1.6.4", "0.0.4", "1.5.4", "0.0.5", "3.4.1", "3.6.2", "0.0.3", "5.11.1", "5.10.4", "5.12.6", "5.6.3", "0.0.4"],
    ["0.0.1", "1.1.4", "1.6.7", "0.0.4", "1.5.2", "0.0.2", "3.2.1", "0.0.3", "3.4.3", "3.6.3", "5.11.4", "5.10.3", "5.12.4", "5.6.5", "0.0.3"],
    ["0.0.1", "1.1.1", "0.0.2", "1.1.1", "1.2.4", "1.7.1", "0.0.2", "1.8.2", "0.0.10", "3.4.1", "0.0.1", "3.6.5", "5.11.4", "5.10.1", "5.4.3", "5.12.2", "5.6.1", "0.0.2", "5.6.1", "0.0.4"], // check england, asia 4 touching 6
    ["0.0.4", "1.2.4", "1.7.3", "1.8.4", "0.0.6", "3.1.2", "3.3.3", "3.6.5", "5.1.3", "5.11.1", "5.10.1", "5.4.4", "5.8.1", "5.4.1", "5.6.1", "0.0.6"],
    ["0.0.4", "1.9.4", "1.4.2", "1.7.1", "1.8.1", "1.4.1", "1.8.1", "0.0.8", "3.7.2", "3.5.3", "3.6.3", "5.1.5", "5.2.1", "5.8.6", "5.6.1", "0.0.6"],
    ["0.0.3", "1.9.5", "1.4.3", "0.0.10", "3.7.2", "0.0.2", "3.5.1", "5.7.3", "3.6.1", "0.0.1", "5.1.3", "5.2.4", "5.8.2", "5.2.1", "5.8.1", "0.0.2", "5.5.1", "0.0.4"],
    ["0.0.3", "1.9.3", "1.4.5", "0.0.10", "4.5.3", "0.0.4", "5.7.4", "5.3.3", "5.2.6", "0.0.1", "5.8.1", "5.5.2", "0.0.4"],
    ["0.0.4", "1.3.2", "1.4.4", "0.0.11", "4.5.3", "4.3.4", "5.7.4", "5.3.4", "5.2.6", "0.0.7"],
    ["0.0.5", "1.3.2", "0.0.13", "4.5.4", "4.3.4", "0.0.1", "5.7.3", "0.0.2", "5.3.4", "5.9.1", "5.2.3", "0.0.7"],
    ["0.0.5", "1.3.3", "0.0.2", "1.3.2", "0.0.8", "4.5.6", "4.2.3", "5.7.3", "0.0.2", "5.3.2", "0.0.2", "5.9.2", "0.0.2", "6.2.1", "0.0.6"],
    ["0.0.8", "1.3.1", "0.0.11", "4.5.6", "4.2.4", "0.0.5", "5.3.1", "0.0.3", "5.9.2", "0.0.1", "6.2.1", "0.0.6"],
    ["0.0.8", "1.3.1", "2.4.4", "0.0.7", "4.5.5", "4.1.2", "4.2.4", "0.0.4", "5.3.1", "0.0.13"],
    ["0.0.9", "2.4.2", "2.2.3", "0.0.10", "4.1.4", "4.2.2", "0.0.9", "6.2.1", "0.0.1", "6.2.1", "0.0.7"],
    ["0.0.9", "2.3.2", "2.2.5", "0.0.8", "4.1.4", "4.2.1", "0.0.10", "6.2.1", "0.0.2", "6.2.1", "0.0.1", "6.3.3", "0.0.2"],
    ["0.0.9", "2.3.2", "2.2.6", "0.0.8", "4.6.1", "4.1.1", "4.6.1", "4.2.1", "0.0.20"],
    ["0.0.10", "2.3.3", "2.2.3", "0.0.8", "4.6.5", "0.0.1", "4.4.1", "0.0.12", "6.4.1", "6.1.1", "0.0.1", "6.1.1", "0.0.2"],
    ["0.0.11", "2.3.2", "2.2.3", "0.0.9", "4.6.3", "0.0.2", "4.4.1", "0.0.11", "6.4.2", "6.1.3", "0.0.2"],
    ["0.0.11", "2.1.2", "2.3.1", "2.2.1", "0.0.10", "4.6.3", "0.0.13", "6.4.3", "6.1.3", "0.0.2"],
    ["0.0.11", "2.1.3", "2.2.1", "0.0.10", "4.6.2", "0.0.14", "6.4.4", "6.1.2", "0.0.2"],
    ["0.0.11", "2.1.3", "0.0.30", "6.1.2", "0.0.3"],
    ["0.0.11", "2.1.2", "0.0.31", '6.1.1', "0.0.4"],
    ["0.0.12", "2.1.1", "0.0.36"],
    ["0.0.12", "0.0.37"],
];

function checkMapValidity(mapArray) {
    for (var i = 0; i < mapArray.length; ++i) {
        var rowTotal = 0;
        for (var j = 0; j < mapArray[i].length; ++j) {
            var data = mapArray[i][j];
            var dataSplit = data.split(".");
            if (dataSplit.length !== 3) console.log("fallo " + data);
            for (var k = 0; k < dataSplit.length; ++k) {
                if (isNaN(dataSplit[k])) console.log("not a number " + data);
            }
            rowTotal += parseInt(dataSplit[2]);
        }
        if (rowTotal != 49) console.log("row total = " + rowTotal + " on row " + i);
    }
}


var printTerritory = function(event) {
    var territoryID = this.getAttribute('territory');
    if (territoryID === 0) console.log('water!');
    else //console.log('territory is ' + territoryID);
    console.log("Territory " + territoryID + ", " + myGame.territories[territoryID - 1].name);
};

function removeBackgroundColorOfDivs (){
  var divs = document.getElementsByClassName('territory');
  console.log("divs length is " + divs.length);
  for (var i = 0; i < divs.length; ++i){
    var div = divs[i];
    div.setAttribute('style', "background: rgba(54, 25, 25, 0)");
  }
}

function getBodyHTML (){
  return document.body.innerHTML;
}

function setTerritoryClickTriggers (){
  var pixelDivs = document.getElementsByClassName('mapPixel');
  for (var i = 0; i < pixelDivs.length; ++i){
    var pixelDiv = pixelDivs[i];
    pixelDiv.onclick = printTerritory;
  }
}


function createDivs(mapArray) {
    for (var i = 0; i < mapArray.length; ++i) {
        var rowDiv = document.createElement("div");
        rowDiv.setAttribute('class', 'row');

        for (var j = 0; j < mapArray[i].length; ++j) {
            var data = mapArray[i][j];
            var dataSplit = data.split(".");
            var continentID = parseInt(dataSplit[0]);
            var territoryID = parseInt(dataSplit[1]);
            var pixelTimes = parseInt(dataSplit[2]);

            // try to get correct territoryID.
            for (var k = 0; k < myGame.territories.length; ++k) {
                if (myGame.territories[k].continentID === continentID) {
                    var firstTerritoryID = myGame.territories[k].id;
                    territoryID += firstTerritoryID - 1;
                    break;
                }
            }

            /*
            console.log('continentID = ' + continentID + ", territoryID = " + territoryID);
            if (continentID !== 0)
            console.log("continent " + continentID + " , territory " + dataSplit[1] +
              " is " + myGame.territories[territoryID - 1].name);
            */

            for (var l = 0; l < pixelTimes; ++l) {
                var colDiv = document.createElement('div');
                if (continentID === 0) {
                    colDiv.setAttribute('class', 'mapPixel');
                    colDiv.setAttribute('territoryID', territoryID);
                    colDiv.setAttribute('continentID', continentID);
                } else {
                    colDiv.setAttribute('class', 'mapPixel continent' + continentID +
                        " territory territory" + territoryID);
                    colDiv.setAttribute('territory', territoryID);
                    colDiv.onclick = printTerritory;
                }

                colDiv.setAttribute('territoryID', territoryID);
                colDiv.setAttribute('continentID', continentID);
                rowDiv.append(colDiv);
            }
        }
        var boardDiv = document.getElementById('board');
        boardDiv.append(rowDiv);
    }

}

//checkMapValidity(map);
//createDivs(map);
//console.log(getBodyHTML());
//removeBackgroundColorOfDivs();
setTerritoryClickTriggers();

/*
 *  Inteface plan:
 *    1. Ask user to choose how many people will play. (5 buttons)
 *    2. Based on this result, prompt user for player1 name, player2 name, etc.
 *    3. Create the player objects array, pass it to Game.start().
 *    4. Show board with one unit of owner on each territory.
 *    5. While there are still units to deploy, cycle through each player prompting
 *       them to choose one of their territories to deploy a unit in.
 *            - if player is a computer (player.alive === false), randomly place
 *            in one of their territories.
 *    6. Now cylce through player turns:
 *        Deployment phase:
 *          a. players recruit reinforcements based on territories
 *             owned (distributeReinforcements(playerID)).
 *          b. player allocates units to his territories. He/she can do place
 *             more than one unit on a territory at a time, if they wish.
 *          c. click DONE button to move to next phase.
 *        Attacking phase:
 *          a. player chooses from/to territories and clicks ATTACK button to
 *             attack. Results are shown.
 *          b. click DONE button to move to next phase.
 *        Fortification phase:
 */
