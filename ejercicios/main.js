// 1)
function changeText(){
    let newText = "Hello Javascript World!";
    document.getElementById("change").innerHTML = newText;
}

// 2)
function changeFontSize(){
    document.getElementById("size").setAttribute("style", "font-size: 40px;");
}

// 3-a)
function hideP(){
    document.getElementById("first").setAttribute("hidden", "");
}
// 3-b)
function showP(){
    document.getElementById("second").removeAttribute("hidden", "");
}

// 4)
function captureUrl(){
    let url = window.location;
    document.getElementById("url").innerHTML = url;
}

// 5)
let forms = document.getElementsByTagName("form").namedItem("form2");
document.getElementById("nameForm").innerHTML = forms.name;

// 6)
function changeBgColor(){
    let bgColors = ["red", "grey", "green", "white", "blue", "pink"];
    let def = parseInt(Math.random() * (bgColors.length));
    document.body.style.backgroundColor = bgColors[def];
}

// 7)
function toUpper(){
    document.getElementById("upper").setAttribute("style", "text-transform: uppercase;");
}

// 8)

let elementsA = document.getElementsByTagName("a");
elementsA = elementsA.length;
let text = document.getElementById("numAnchors").textContent + elementsA;
document.getElementById("numAnchors").innerHTML = text;

