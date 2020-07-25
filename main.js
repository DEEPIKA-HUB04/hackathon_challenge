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
element3.innerHTML = "wrong Guess :"
element1.appendChild(element3);

var element4 = document.createElement("span")
element4.setAttribute("id","wrong");
element4.innerHTML = "0";
element4.style.paddingLeft = "10px"
element3.appendChild(element4);

var element5 = document.createElement("span")
element5.setAttribute("id","maxwrong");
element5.innerHTML = "of"
element5.style.paddingLeft = "10px"
element3.appendChild(element5);


