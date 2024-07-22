const images = [
  "밤.jpg",
  "노을.jpg",
  "서울.jpg",
  "일본거리.jpg",
  "일본거리2.jpg",
  "일본.jpg",
  "서울거리.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${chosenImage}`;

document.body.appendChild(bgimage);

bgimage.classList.add("backgroundImage");
