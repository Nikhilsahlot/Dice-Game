
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var diceimage1 = "dice" + randomNumber1 + ".png";
  var image1 = document.querySelector(".img1");
  image1.setAttribute("src", diceimage1);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var diceimage2 = "dice" + randomNumber2 + ".png";
  var image2 = document.querySelector(".img2");
  image2.setAttribute("src", diceimage2);
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 wins";
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 2 wins 🚩";
  } else {
    document.querySelector("h1").innerHTML = "🚩Draw 🚩";
  }
  playSound("diceroll2");
  function playSound(name) {
    var audio = new Audio(name + ".mp3");
    audio.play();

}

