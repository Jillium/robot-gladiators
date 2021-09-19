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

window.alert("Welcome to Robot Gladiators!");

var fight = function(enemyNames) {
    // Alert players that they are starting the round
    
    var promptFight = window.prompt("Would you like to Fight or Skip this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    

   // if player chooses to fight, then fight
   if (promptFight === "fight" || promptFight === "FIGHT") {
       // remove enemy's health by subracting the amount set in the playerAttack variable
      enemyHealth = enemyHealth - playerAttack;
      console.log(
          playerName + " attacked " + enemyNames + ". " + enemyNames + " now has " + enemyHealth + " health remaining."
      ); 
    
      if (enemyHealth <= 0) {
          window.alert(enemyNames + " has died!");
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
        } else {
            window.alert(playerName + " still has " + playerHealth + " health left. ");
        }

        //if player chooses to skip
   } else if (promptFight === "skip" || promtFight === "SKIP") {
       //confirm player wants to skip
       var confirmSkip = window.confirm("Are you sure you'd like to quit?")

       //if yes (true), leave fight
       if (confirmSkip) {
           window.alert(playerName + " has decided to skip this fight. Goodbye!");
        // subtract money from playerMoney for skipping
        playerMoney = playerMoney - 2;   
       }
       // if no (false), ask question again by running fight() again
       else {
           fight();
       }

   }
   
};

for(var i = 0; i < enemyNames.length; i++) {
    fight(enemyNames[i]);
}
