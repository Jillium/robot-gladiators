// Game States
// "WIN" - Player robot has defeated all enemy-robots
//  * Fight all enemy-robots
//  * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less




var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

//You can also log multiple values at once like this
console.log(playerName, playerAttack, playerHealth);


var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyNames);
console.log(enemyNames.length);
console.log(enemyNames[0]);
console.log(enemyNames[3]);



var fight = function(enemyNames) {
    while(playerHealth > 0 && enemyHealth > 0) {
    // ask player if they'd like to fight or run    
    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.");
    

     //if player chooses to skip confirm and then stop the loop 
      if (promptFight === "skip" || promptFight === "SKIP") {
    //confirm player wants to skip
    var confirmSkip = window.confirm("Are you sure you'd like to quit?")

        //if yes (true), leave fight
        if (confirmSkip) {
            window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
            playerMoney = playerMoney - 10;   
        console.log("playerMoney", playerMoney);
        break;
        }
    }
    

    //remove enemy's health by subtracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
          playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
      ); 
    
      //check enemy's health
      if (enemyHealth <= 0) {
          window.alert(enemyNames + " has died!");

          //award player money for winning
          playerMoney = playerMoney + 20;

          //leave while(loop) since enemy is dead
          break;
      } else {
          window.alert(enemyNames + " still has " + enemyHealth + " health left.");
      }

      // remove player's health by subtracting the amount set in the enemyAttack variable 
      playerHealth = playerHealth - enemyAttack;
      console.log(
          enemyNames + " attacked " + playerName + ". " + playerName + " now has " + playerHealth + " health remaining."
      );

      // check player's health
      if (playerHealth <+ 0) {
          window.alert(playerName + " has died!");
          //leave while() loop if player is dead
          break;
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left. ");
        }

       
       
    }
       
    
   };
   

// function to start a new game
var startGame = function() {
    //reset player stats
    playerHealth = 100;
    playerAttack = 10;
    playerMoney = 10;
    


    for(var i = 0; i < enemyNames.length; i++) {
        if (playerHealth > 0) {
            // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
            window.alert("Welcome to Robot Gladiators! Round " + (i + 1));
    
            // pick new enemy to fight based on the index of the enemyNames array
            var pickedEnemyName = enemyNames[i];
    
            // reset enemyHealth before starting new fight
            enemyHealth = 50;
    
            // use debugger to pause script from running and check what's going on at that moment in the code
            // debugger;
    
            // pass the pickedEnemyName variable's value into the fight function, where it will assume the value of the enemyName parameter
            fight(pickedEnemyName);
        }
    
        //if player isn't alive, stop the game
        else {
            window.alert('You have lost your robot in battle! Game Over!');
            break;
        }

        //play again
        //startGame();
    
    }
    // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
    endGame();
};

// function to end the entire game
var endGame = function() {
    // if player is still alive, player wins!
    if (playerHealth > 0) {
        window.alert("Great job, you've survived the Game! You now have a score of " + playerMoney + ".");
    }
    else {
        window.alert("You've lost your robot in battle.");
    }

    //ask the player if they'd like to play again
    var playAgainConfirm = window.confirm("Would you like to play again?");

    if (playAgainConfirm) {
        // restart the game
        startGame();
    }
    else {
        window.alert("Thank you for playing Robot Gladiators! Come back soon!");
    }
}

//start the game when the page loads
startGame();


// ask player if they want to play again- set the whole code in a function so it can repeat?
    //wrap the game logic in a startGame() function
    //when there are no more enemies call and endGame() function that alerts total stats and asks if they want to play again. If yes, call startGame()

// ask the player if they want to visit the shop after they defeat a robot- add something into code to make this available after each round
//After the player skips or defeats an emeny and there are still more robots to fight
    //Ask the player if they want to shop
    //If no continue as normal
    //If yes call the shop() function
    // In the shop() function, ask the player if they want to refill health, upgrade attack, or leave the shop
    //if refill, subtract money points from player and increase health
    //if upgrade, subtract money points from player and increase attack power
    // if leave, alert goodbye and exit the function
    //if any other invalid option, call shop() again 


