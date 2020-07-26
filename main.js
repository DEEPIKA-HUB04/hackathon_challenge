
var element1 = document.createElement("div");
element1.setAttribute("id","first")
element1.style.width = "900px";
element1.style.height = "730px";
element1.style.margin = "0 auto";
element1.style.color = "white"
element1.style.fontFamily = "Roboto Mono"
document.body.append(element1);

var element2 = document.createElement("h1")
element2.style.textAlign  = "center";
element2.style.padding = "20px"
element2.style.color = "fuchsia"
element2.innerHTML = "HANGMAN "
element1.appendChild(element2);

var element3 = document.createElement("div")
element3.style.float = "right"
element3.style.paddingRight = "0 20px"
element1.style.color = "darkred"
element3.innerHTML = "wrong Guess :"
element1.appendChild(element3);

var element4 = document.createElement("span")
element4.setAttribute("id","wrong");
element4.innerHTML = "0";
element4.style.paddingRight = "10px"
element3.appendChild(element4);

var slash = document.createElement("span")
slash.innerHTML = "/"
element3.appendChild(slash);

var element5 = document.createElement("span")
element5.setAttribute("id","maxwrong");
element5.style.paddingLeft = "10px"
element3.appendChild(element5);

var right = document.createElement("div")
right.style.float = "right"
right.style.padding = " 0 20px"
right.style.color = "darkgreen"
right.innerHTML = "right guess : "
element3.appendChild(right);

var rightCount = document.createElement("span")
rightCount.setAttribute("id","count")
right.appendChild(rightCount)


var element6 = document.createElement("div")
element6.style.textAlign = "center";
element1.appendChild(element6);

var image = document.createElement("img")
image.setAttribute("id","hangmanphoto")
image.setAttribute("src","images/0.jpg")
element6.appendChild(image)

var element7 = document.createElement("p")
element7.innerHTML = "Guess the word";
element6.appendChild(element7)


var element8 = document.createElement("p")
element8.setAttribute("id","fillwords")
element6.appendChild(element8)

var element9 = document.createElement("div")
element9.setAttribute("id","keypress");
element6.appendChild(element9)

var element10 = document.createElement("button")
element10.setAttribute("type","button")
element10.setAttribute("id","btn")
element10.setAttribute("onClick","reset()")
element10.style.backgroundColor = "crimson";
element10.style.marginTop = "20px";
element10.style.width = "200px"
element10.style.height = "50px"
element10.style.fontSize = "30px"
element10.innerHTML = "Reset"
element6.appendChild(element10)