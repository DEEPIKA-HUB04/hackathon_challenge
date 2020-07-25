var element1 = document.createElement("div");
element1.style.width = "1000px";
element1.style.height = "1000px";
element1.style.margin = "0 auto";
element1.style.backgroundColor = "brown";
element1.style.color = "white"
document.body.append(element1);

var element2 = document.createElement("h1")
element2.style.textAlign  = "center";
element2.style.padding = "20px"
element2.innerHTML = "HANGMAN "
element1.appendChild(element2);

var element3 = document.createElement("div")
element3.style.float = "right"
element3.style.paddingRight = "20px"
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
element10.setAttribute("onClick","reset()")
element10.style.backgroundColor = "blue";
element10.innerHTML = "Reset"
element6.appendChild(element10)
