import image from "../images/cards/2C.png";

let doneBtn = document.querySelector(".doneBtn");
let welcomePage = document.querySelector(".welcomeSection");
doneBtn.addEventListener("click", function() {
  welcomePage.classList.add("hide");
});

window.onload = function() {
  let welcomeContent = document.querySelector(".welcomeContent");
  function animate() {
    welcomeContent.classList.add("animate");
  }
  setTimeout(animate, 2000);
};

// sliding background images

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000); // Change image every 5 seconds
}

let cards = [
  "2c6bb09a4c2eee665ee68092a0f89e36.png",
  "5a0ccbce123246e698c6fe2ab50bd7d5.png",
  "76d35dc0a61ada1bd14ed8d8fb76e9f7.png",
  "a7cfea0e817306ccbd2074331c81a2e4.png",
  "60150d5e4fc80ca11844e2d5d78f3e38.png",
  "e8742854db9267557d773abd01d6938c.png",
  "4801a4ae108fd98d3f7997535f1e6fa5.png",
  "2c960e6939c61ee1b069fe9b4aa158b6.png",
  "b9c67676d3d3e64111cbfb68ac01b82b.png",
  "a9219fdec7897eecbb9edc6a62b29f5b.png",
  "019d35b092e73cd6bd3e04fdca904775.png",
  "c1f62d58d122388f16c87580e57aeb50.png",
  "b2854489f49054a9bb569f7b2f6f7f95.png",
  "cb3d0efd28e0ae458d9fbfdcade52bbf.png",
  "82ef97189eaa20eec9bf463acef13019.png",
  "5234026e3aa5bcd00a80d9108524fe88.png",
  "c0bb1739ca89cf5941260bfeeaa2b3cb.png",
  "6adaf0ca5187c6449ff8b89125a81ae8.png",
  "f01799789a5567260dc3051e0fa9c643.png",
  "f1f5f23939cb9ed000576ec62da6d4a7.png",
  "6c158958e787485a3af825c96e3746a9.png",
  "ac4adb725c2581e157979664257bf499.png",
  "4edf0d23a548a388a38bfa2dcbdf7f66.png",
  "11be00a1160cd9327c5e643444827a37.png",
  "81b79fe5bfa8bd8d8871e38a5c8e7dde.png",
  "f87446b240f1253401fd98d24076615a.png",
  "8b2984242c07ec84efe28d8dd06cc2ae.png"
];

function displayImages(cards) {
  var deck1 = document.querySelector(".deck-1");
  var deck2 = document.querySelector(".deck-2");
  var deck3 = document.querySelector(".deck-3");
  deck1.innerHTML = "";
  deck2.innerHTML = "";
  deck3.innerHTML = "";
  for (var i = 0; i < 9; i++) {
    // create the image element
    var imageElement = document.createElement("img");
    imageElement.setAttribute("src", cards[i]);
    imageElement.setAttribute("alt", `card${i}`);
    // append the element to the container
    deck1.appendChild(imageElement);
  }
  for (var i = 9; i < 18; i++) {
    // create the image element
    var imageElement = document.createElement("img");
    imageElement.setAttribute("src", cards[i]);
    imageElement.setAttribute("alt", `card${i}`);
    // append the element to the container
    deck2.appendChild(imageElement);
  }
  for (var i = 18; i < 27; i++) {
    // create the image element
    var imageElement = document.createElement("img");
    imageElement.setAttribute("src", cards[i]);
    imageElement.setAttribute("alt", `card${i}`);
    // append the element to the container
    deck3.appendChild(imageElement);
  }
}

displayImages(cards);

function deckBuilder(arr, pos, itr) {
  let movedArr = moveDeck(arr, pos, itr);
  let newarr = [];
  if (itr != 2) {
    let counter1 = 0,
      counter2 = 9,
      counter3 = 18;
    for (let i = 0; i < 27; ) {
      newarr[i] = movedArr[counter1];
      counter1++;
      i++;
      newarr[i] = movedArr[counter2];
      counter2++;
      i++;
      newarr[i] = movedArr[counter3];
      counter3++;
      i++;
    }
  }
  if (itr == 2) {
    newarr = movedArr;
  }
  return newarr;
}

function moveDeck(arr, pos, itr) {
  let arr1 = arr.slice(0, 9);
  if (itr != 2) {
    arr1 = arr1.reverse();
  }
  let arr2 = arr.slice(9, 18);
  if (itr != 2) {
    arr2 = arr2.reverse();
  }
  let arr3 = arr.slice(18, 27);
  if (itr != 2) {
    arr3 = arr3.reverse();
  }
  let newarr = [];
  if (pos == 1) {
    newarr = [...arr1, ...arr2, ...arr3];
  } else if (pos == 2) {
    newarr = [...arr2, ...arr1, ...arr3];
  } else if (pos == 3) {
    newarr = [...arr3, ...arr1, ...arr2];
  }
  return newarr;
}

function displayResults(arr) {
  var imageElement = document.querySelector(".finalCard");
  imageElement.setAttribute("src", arr[6]);
  document.querySelector(".finalPopUp").classList.add("visible");
}

let resultArr1 = [],
  resultArr2 = [],
  resultArr3 = [];

function startMagic(pos, itr) {
  console.log(pos, itr);
  if (itr == 0) {
    resultArr1 = deckBuilder(cards, pos + 1, itr);
    displayImages(resultArr1);
  } else if (itr == 1) {
    resultArr2 = deckBuilder(resultArr1, pos + 1, itr);
    displayImages(resultArr2);
  } else if (itr == 2) {
    resultArr3 = deckBuilder(resultArr2, pos + 1, itr);
    displayResults(resultArr3);
  }
}
let iteration = 0;
let deck = document.querySelectorAll(".deck");
for (let i = 0; i < deck.length; i++) {
  deck[i].addEventListener("click", function(e) {
    if (iteration < 3) {
      startMagic(i, iteration);
    }
    iteration++;
  });
}
