function rollDice() {
    
    let goldCoins = 0;
    for (let i = 0; i < 10; i++) {
        
        const roll = Math.floor(Math.random() * 6) + 1;         // This generates a random number between 0-5 and adds 1 (the +1 makes it 1-6 rather than 0-5)
        alert("You rolled a " + roll + ".")

        if (roll === 1) {
            alert("GAME OVER, no more rolls!");
            break;
        }
        if ((roll === 4) && (goldCoins != 0)) {        
            goldCoins--;
            alert("Total coin count: " + goldCoins);
            continue;
        }
        if (roll < 5){
            continue;
        }
        
        goldCoins += roll;                                      // keeps a running total  
        alert("Congrats! You win " + roll + " gold coins!" + "\nTotal coin count: " + goldCoins);
    }
    alert("You have won a total of " + goldCoins + " gold coins!");
}