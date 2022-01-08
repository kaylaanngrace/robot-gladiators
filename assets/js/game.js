var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

// You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

// fight function (now with parameter for enemy's name)
var fight = function (enemyName) {
  //repeat and execute as long as enemy-robot is alive
  while(playerHealth > 0 && enemyHealth > 0) {

    // ask player of they'd like fight or run
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    
    // if player choses to skip
    if (promptFight === "skip" || promptFight === "SKIP") {
    // confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

      // if yes (true), leave fight 
      if (confirmSkip) {
        window.alert(playerName = " has decided to skip this fight. Goodbye!");
        //subtract money from playMoney for skipping 
        playerMoney = playerMoney - 10;
        console.log("playerMoney", playerMoney);
        break;
      }
    };

    // Subtract the value of 'playerAttack' from the value opf 'enemyHealth' and use that result to update the value in the 'enemyHealth' variable 
    enemyHealth = enemyHealth - playerAttack;

    // Log a resulting message to the console so we know that it worked. 
    console.log (
      playerName + " attacked " + enemyName + ". " + " now has " + enemyHealth + " health remaining. "
    );

    // check enemy's health
    if (enemyHealth <=0) {
      window.alert(enemyName + " has died!");
      break;
    } else {
      window.alert(enemyName + " still has " + enemyHealth + " health left.");
    };

    // Subtract the value of the 'enemyAttack' from the value of 'playerHealth' and use that result to update the value in the 'playerHealth' variable
    playerHealth = playerHealth - enemyAttack;

    // Log a resulting message to the console so we know that it worked.
    console.log(
      enemyName + " attacked " + playerName + ". " + playerName + " now has " + playerHealth +  " health remaining. "
    );

    // check player's health
    if (playerHealth <=0) {
      window.alert(playerName + " has died!");
      break;
    }
    else {
      window.alert(playerName + " still has " + playerHealth + " health left.");
    }
  }
};

//function to start a new game 
var startGame = function() {
  //reset player stats
  playerHealth = 100;
  playerAttack = 10;
  playerMoney = 10;
for (var i = 0; i < enemyNames.length; i++) {
    if(playerHealth > 0) {
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i + 1));  
      
      // pick new enemy to fight based on the index of the enmyNames array
      var pickedEnemyName = enemyNames[i];

      // rest enemyHealth before starting new fight
      enemyHealth = 50;

      //use debugger to pause script from running and check what's going on at the moment in code 
      //debugger

      // pass the pickedEnemyName variable's value into the fight function, where it will assumethe value of the enemyName parameter
      fight(pickedEnemyName);
    }
    // if player isn't alive, stop the game
    else {
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }
  }
  // after the loops ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
};

var endGame = function() {
  // if player is still alive, player wins1
  if (playerHealth > 0) {
    window.alert("Great job, you've survived the game! You now have a score of" + playerMoney + ".");
  }
  else {
    window.alert("You've lost your robot in battle.");
  }
  
  // ask player if they'd like to play again
  var playAgainConfirm = window.confirm("Would you like to play again?");
  
  if(playAgainConfirm) {
    //restart the game
    startGame();
  }
  else {
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
};

startGame();
 