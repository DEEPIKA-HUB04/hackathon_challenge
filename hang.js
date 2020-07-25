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

let answer = "";
let maxwrong = 6;
let wrong = 0;
let guessed = [];
let currentWordStatus = null;

// function to generate random words
function randomWord() {
    return answer = words[Math.floor(Math.random() * words.length)];
  }


  // function to display buttons and 
  function displayButtons() {
    let button = 'abcdefghijklmnopqrstuvwxyz'.split('').map(alphabet =>
      `
        <button
          style = "background-color:blue; margin : 8px 4px ; width: 30px"
          id='` + alphabet + `'
          onClick="Guess('` + alphabet + `')"
        >
          ` + alphabet + `
        </button>
      `).join('');
  
    document.getElementById('keypress').innerHTML = button;
  }

  

  // function to provide blank dashes depending on the random answer generated
  function guessWord() {
    currentWordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('fillwords').innerHTML = currentWordStatus;
  }

  function updateMistakes() {
    document.getElementById('wrong').innerHTML = wrong;
  }
  
  

  document.getElementById("maxwrong").innerHTML = maxwrong; 
  randomWord();
 displayButtons();
 guessWord();