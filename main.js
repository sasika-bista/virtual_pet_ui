const inName = document.getElementById("inputName");
const petName = document.getElementsByClassName("name")[0];
const food = document.querySelector(".food");
const petSurface = document.querySelector(".pet");
const feedbtn = document.querySelector(".feed");
const saveName = localStorage.getItem("name");
const playbtn = document.querySelector(".playbtn");
const bathbtn = document.querySelector(".bathbtn");
const readbtn = document.querySelector(".readbtn");
const sleepbtn = document.querySelector(".sleepbtn");
showName();

inName.addEventListener("input", () => {
  console.log(inName.value);
  petName.innerHTML = inName.value;
  localStorage.setItem("name", inName.value);
});

inName.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("rnter pressed");
    inName.innerHTML = " ";
  }
});

function showName() {
  if (saveName != "") {
    petName.innerHTML = saveName;
    inName.placeholder = saveName;
  }
}

feedbtn.addEventListener("click", () => {
  console.log("pet iss fed");
  givefood();
});

function givefood() {
  food.innerHTML = '<img src="apple/1.png" alt="" />';
  setTimeout(() => {
    food.innerHTML = '<img src="apple/2.png" alt="" />';
  }, 200);
  setTimeout(() => {
    food.innerHTML = '<img src="apple/3.png" alt="" />';
  }, 400);
  setTimeout(() => {
    food.innerHTML = '<img src="apple/4.png" alt="" />';
  }, 600);
  setTimeout(() => {
    food.innerHTML = '<img src="apple/5.png" alt="" />';
  }, 800);
  setTimeout(() => {
    food.innerHTML = '<img src="apple/6.png" alt="" />';
  }, 1000);
  setTimeout(() => {
    food.innerHTML = '<img src="apple/7.png" alt="" />';
  }, 1200);
  setTimeout(() => {
    food.innerHTML = '<img src="apple/8.png" alt="" />';
  }, 1400);
  setTimeout(() => {
    food.innerHTML = '<img src="apple/9.png" alt="" />';
  }, 1600);
  setTimeout(() => {
    food.innerHTML = "";
  }, 1600);
}

function pet() {
  petSurface.style.backgroundImage = 'url("catlove.png")';
  setTimeout(() => {
    petSurface.style.backgroundImage = 'url("catsit.png")';
  }, 1000);
}

function play() {
  petSurface.style.backgroundImage = 'url("catplay.png")';
  petSurface.style.backgroundSize = "contain";
  petSurface.style.width = "30rem";
  setTimeout(() => {
    petSurface.style.backgroundImage = 'url("catplayflip.png")';
  }, 1000);
  setTimeout(() => {
    petSurface.style.backgroundImage = 'url("catsit.png")';
    petSurface.style.backgroundSize = "cover";
    petSurface.style.width = "20rem";
  }, 2000);
}

function bath() {
  petSurface.style.backgroundImage = 'url("cathbathy.gif")';
  setTimeout(() => {
    petSurface.style.backgroundImage = 'url("catsparkel.gif")';
  }, 1000);
  setTimeout(() => {
    petSurface.style.backgroundImage = 'url("catsit.png")';
    petSurface.style.backgroundSize = "cover";
    petSurface.style.width = "20rem";
  }, 2000);
}

function read() {
  petSurface.style.backgroundImage = 'url("read.png")';
  setTimeout(() => {
    petSurface.style.backgroundImage = 'url("catsit.png")';
    petSurface.style.backgroundSize = "cover";
    petSurface.style.width = "20rem";
  }, 1000);
}

function sleep() {
  petSurface.style.backgroundImage = 'url("sleep.png")';
  petSurface.style.backgroundSize = "contain";
  petSurface.style.width = "30rem";
  setTimeout(() => {
    petSurface.style.backgroundImage = 'url("catsit.png")';
    petSurface.style.backgroundSize = "cover";
    petSurface.style.width = "20rem";
  }, 1000);
}

petSurface.addEventListener("mousedown", () => {
  console.log("You are rubbing the surface!");
  pet();
});

playbtn.addEventListener("click", () => {
  play();
});

bathbtn.addEventListener("click", () => {
  bath();
});

readbtn.addEventListener("click", () => {
  read();
});

sleepbtn.addEventListener("click", () => {
  sleep();
});
