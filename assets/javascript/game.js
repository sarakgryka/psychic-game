let wins = 0 ;
let losses = 0;
let guessesLeft = 9;
let GuessesSoFar = 

let randomLetter = function (){

    let letters = "abcdefghijklmnopqrstuvwxyz";

    return letters.substr( Math.floor(Math.random() * 26), 1);

}


let compGuess = randomLetter();
randomLetter();
console.log(compGuess)


document.onkeyup = function(event) {


    let userGuess = event.key;
    
   
    if (userGuess === compGuess) {
        wins++;
        guessesLeft = 9;
        }
   

    if (userGuess !== compGuess && guessesLeft !== 0) {
             guessesLeft-- ; }

    else if (guessesLeft <= 1) {
        losses++;
        guessesLeft = 9;
    }

    else if ()




        
        
console.log("new");
   
console.log(userGuess);
console.log(wins);
console.log(guessesLeft);
console.log(losses);
       }
          
   // if (userGuess !== compGuess && guessesLeft < 9) {
   //     guessesLeft--; }

    //else if (guessesLeft === 0) {
    //    losses++;
      //  guessesLeft = 9;

      
    

    






    

   
   

