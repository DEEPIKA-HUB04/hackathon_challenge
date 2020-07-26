
var words =["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda",
"Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus",
"Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands",
"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia",
"Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti",
"Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Estonia","Ethiopia","Falkland Islands",
"Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana",
"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau",
"Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland",

]
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


  // function to display buttons and also parse the seleced letter when onclick is done
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
// function to check guessed letter correct or not and will do respective action accordingly
  function Guess(selectedLetter){
    guessed.indexOf(selectedLetter) === -1 ? guessed.push(selectedLetter) : null;
    document.getElementById(selectedLetter).setAttribute('disabled', true);

    if (answer.indexOf(selectedLetter) >= 0) {   
        correct++;
        document.getElementById("count").innerHTML = correct;  
      guessWord(); 
      seeIfGameWon();
       
    }
    
    else if (answer.indexOf(selectedLetter) === -1) {              
        
        wrong++;
         updateMistakes();
        seeIfGameLost();
        updatePic();
    }

  }

  //function to display man parts depending on wrong varaible count
  function updatePic() {
    document.getElementById('hangmanphoto').src = 'images/' + wrong + '.jpg';
  }
  
  // function to display score and greeting if WON the Game
  function seeIfGameWon() {
    if (currentWordStatus === answer) {   
      document.getElementById('keypress').innerHTML = 'Score : ' + correct + " " + 'HURRAY YOU WON!!!' ;
    }  
  }

//function to display answer and also lost statment if LOST the Game
  
  function seeIfGameLost() {
    if (wrong === maxwrong) {
      document.getElementById('fillwords').innerHTML = 'The answer was: ' + answer;
      document.getElementById('keypress').innerHTML = 'OOPS YOU LOST!!!';
    }
  }


  // function to display the correctly guessed word 
  function guessWord() {
    currentWordStatus = answer.split('').map(letter => (guessed.indexOf(letter) >= 0 ? letter : " _ ")).join('');
  
    document.getElementById('fillwords').innerHTML = currentWordStatus;
  }

  //function to update the wrong count
  function updateMistakes() {
    document.getElementById('wrong').innerHTML = wrong;
  }

  // on clicking the reset button will intialize all actions from first
  function reset() {
    wrong= 0;
    correct = 0;
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

  
