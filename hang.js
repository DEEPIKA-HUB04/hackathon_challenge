
var words = [
	"python",
	"javascript",
	"mongodb",
	"json",
	"java",
	"html",
	"css",
	"c",
	"csharp",
	"golang",
	"kotlin",
	"php",
	"sql",
	"ruby"
]

//var difficultWords = [ "Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia"]

var answer = "";
var maxwrong = 6;
var wrong = 0;
var correct = 0;
var guessed = [];
var currentWordStatus = null;

// function to generate random words
function randomWord() {

    return answer = words[Math.floor(Math.random() * words.length)];
    
  }


  // function to display buttons and 
  function displayButtons() {
    var  button = 'abcdefghijklmnopqrstuvwxyz'.split('').map(alphabet =>
      `
        <button
          style = "background-color:coral; margin : 8px 8px ; width: 40px;font-size : 20px;"
          id='` + alphabet + `'
          onClick="Guess('` + alphabet + `')"
        >
          ` + alphabet + `
        </button>
      `).join('');
  
    document.getElementById('keypress').innerHTML = button;
  }

  function Guess(selectedLetter){
    guessed.indexOf(selectedLetter) === -1 ? guessed.push(selectedLetter) : null;
    document.getElementById(selectedLetter).setAttribute('disabled', true);

    if (answer.indexOf(selectedLetter) >= 0) {   
        correct++;
        document.getElementById("count").innerHTML = correct;                                         // if the guessed letter is correct will display the letter
      guessWord(); 
      seeIfGameWon();
      nextlevel();
    }
    
    else if (answer.indexOf(selectedLetter) === -1) {              // if not correct will increment wrong count by 1.
        
        wrong++;
         updateMistakes();
        seeIfGameLost();
        updatePic();
    }

  }
  function updatePic() {
    document.getElementById('hangmanphoto').src = 'images/' + wrong + '.jpg';
  }
  
  function seeIfGameWon() {
    if (currentWordStatus === answer) {   
      document.getElementById('keypress').innerHTML = 'Score : ' + correct + " " + 'HURRAY YOU WON!!!' ;
    }  
   
  }

  function nextlevel() {

    
      
  }
  
  function seeIfGameLost() {
    if (wrong === maxwrong) {
      document.getElementById('fillwords').innerHTML = 'The answer was: ' + answer;
      document.getElementById('keypress').innerHTML = 'OOPS YOU LOST!!!';
    }
  }


  // function to provide blank dashes depending on the random answer generated
  function guessWord() {
    currentWordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('fillwords').innerHTML = currentWordStatus;
  }

  function updateMistakes() {
    document.getElementById('wrong').innerHTML = wrong;
  }
  
  function reset() {
    wrong= 0;
    guessed = [];
    document.getElementById('hangmanphoto').src = 'images/0.jpg';
  
    randomWord();
    guessWord();
    updateMistakes();
    displayButtons();
  }
  
  document.getElementById("maxwrong").innerHTML = maxwrong; 
  randomWord();
 displayButtons();
 guessWord();

 // NEXT LEVEL

 /*function nextlevel (difficultWords){
    return answer = difficultWords[Math.floor(Math.random() * difficultWords.length)];
 }*/

