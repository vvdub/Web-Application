// Dusten Peterson | CSC 3620 | Vue.js
new Vue({
   el: '#app',
   data: {
      playerHp: '',
      monsterHp: '',
      playerAttack: '',
      playerSpecial: '',
      monsterAttack: '',
      newGame: true,
      playingGame: false,
      gameLog: []
   },
   computed: {

   },
   methods: {
      // resets the values for a new game
      startOver: function() {
         this.playerHp = 100;
         this.monsterHp = 100;
         this.newGame = false;
         this.playingGame = false;
      },
      // player attack
      attack: function() {
         console.log(this.playingGame);
         playerAttack = Math.floor(Math.random() * 8) + 3;
         this.monsterHp = this.monsterHp - playerAttack;
         this.gameLog.unshift("Player hit the monster for " + playerAttack + " damage.");
         this.monsterTurn();
         this.playingGame = true;
         this.gameOver();
      },
      // player special attack
      specialAttack: function() {
         playerSpecial = Math.floor(Math.random() * 11) + 10;
         this.monsterHp = this.monsterHp - playerSpecial;
         this.gameLog.unshift("Player hit the monster really hard for " + playerSpecial + " damage.");
         this.monsterTurn();
         this.playingGame = true;
         this.gameOver();
      },
      // player heal only if health is under 90hp
      heal: function() {
         if(this.playerHp <= 90) { 
            this.playerHp = this.playerHp + 10;
            this.gameLog.unshift("Player heals for 10 HP.");
         }
         else {
            alert("Must be below 90 HP to heal.")
         }
         this.monsterTurn();
         this.playingGame = true;
         this.gameOver();
      },
      // monster turn to attack player
      monsterTurn: function() {
         monsterAttack = Math.floor(Math.random() * 8) + 5;
         this.playerHp = this.playerHp - monsterAttack;
         this.gameLog.unshift("Monster hit the player for " + monsterAttack + " damage.");
         this.gameOver();
      },
      //check for game over, either if the monster wins or if the player wins 
      gameOver: function() {
         if(this.playerHp <= 0) {
            alert("You lost. Press okay to play again.");
            this.gameLog.length = 0;
            this.startOver();
         }
         else if(this.monsterHp <= 0) {
            this.playingGame = false;
            alert("You won. Press okay to play again.");
            this.gameLog = [];
            console.log(this.playingGame);
            this.startOver();
         }
      },
      // give up the battle against the monster
      giveUp: function() {
         this.startOver();
         this.newGame = true;
         this.gameLog = [];
      }
   }
});
