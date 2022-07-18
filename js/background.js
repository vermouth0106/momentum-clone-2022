const imgBox = document.querySelector(".background");

const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.className = "background-img";

bgImage.src = `img/${chosenImage}`;

imgBox.appendChild(bgImage);
