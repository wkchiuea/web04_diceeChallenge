
const IMGPATH = "images/dice";

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

document.querySelector(".img1").setAttribute("src", `${IMGPATH}${randomNumber1}.png`);
document.querySelector(".img2").setAttribute("src", `${IMGPATH}${randomNumber2}.png`);

var finalMsg = "";
if (randomNumber1 == randomNumber2) {
    finalMsg = "Draw!";
} else {
    finalMsg = `Player ${(randomNumber1 > randomNumber2) ? randomNumber1 : randomNumber2} wins!`
}

document.querySelector("h1").innerHTML = finalMsg;
