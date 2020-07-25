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
function randomWord() {
    return answer = words[Math.floor(Math.random() * words.length)];
  }
 console.log( randomWord());

  