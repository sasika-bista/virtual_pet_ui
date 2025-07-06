const inName = document.getElementById("inputName");
const petName = document.getElementsByClassName("name")[0];
const food = document.querySelector(".food");
const petSurface = document.querySelector(".pet");
const feedbtn = document.querySelector(".feed");
const saveName = localStorage.getItem("name");

const saveXp = localStorage.getItem("exp");
const playbtn = document.querySelector(".playbtn");
const bathbtn = document.querySelector(".bathbtn");
const readbtn = document.querySelector(".readbtn");
const sleepbtn = document.querySelector(".sleepbtn");
const age = document.querySelector(".age");

// span to measure the size
const span = document.createElement("span");
span.style.visibility = "hidden";
span.style.whiteSpace = "pre";
span.style.position = "absolute";
span.style.font = window.getComputedStyle(inName).font;
document.body.appendChild(span);

// to be called at start
showName();

const savedExp = localStorage.getItem("exp");
if (savedExp !== null) {
  exp_points = Number(savedExp);
}

// exp increaseing visuals in css
function setXP(current, max) {
  const fill = document.querySelector(".expbar");
  const percent = (current / max) * 100;
  fill.style.background = `linear-gradient(to right, #c8b6ff 0%, #c8b6ff ${percent}%, white ${percent}%, white 100%`;
  fill.innerHTML = `<span class="xp-text">${current} / ${max} XP</span>`;
}

// set age and exp
function setAge() {
  let saveAge = localStorage.getItem("age");
  if (saveAge === null) {
    console.log("age reverted to 1");
    saveAge = 1;
    localStorage.setItem("age", saveAge);
  }
  console.log("age= ", saveAge);
  console.log("exp = ", exp_points);

  if (exp_points >= 100) {
    console.log("level up");
    newAge = Number(saveAge) + 1;
    console.log("new gae", newAge);
    console.log("working before adding nw age");
    localStorage.setItem("age", newAge);
    exp_points = 0;
    age.innerHTML = newAge;
    setXP(exp_points, 100);
    console.log(exp_points);
    console.log("working before adding nw exp");
    localStorage.setItem("exp", exp_points);
  } else {
    setXP(exp_points, 100);
    // console.log("hi working here");
    localStorage.setItem("exp", exp_points);
    age.innerHTML = saveAge;
  }
}

// get input name
inName.addEventListener("input", () => {
  span.textContent = inName.value || " ";
  inName.style.width = `${span.offsetWidth + 30}px`;
  console.log(inName.value);
  petName.innerHTML = inName.value;
  localStorage.setItem("name", inName.value);
});

// exit input field on enter
inName.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    console.log("enter pressed");
    inName.placeholder = saveName;
    inName.blur();
  }
});

// show name on load
function showName() {
  if (saveName != null) {
    petName.innerHTML = saveName;
    inName.placeholder = saveName;
    span.textContent = saveName || " ";
    inName.style.width = `${span.offsetWidth + 30}px`;
    exp_points = saveXp;
    setXP(exp_points, 100);
    setAge();
  } else {
    span.textContent = "enter your pet name";
    inName.placeholder = "enter your pet name";
    exp_points = 0;
    localStorage.setItem("exp", exp_points);
    setXP(0, 100);
    setAge();
  }
}

// feed function
feedbtn.addEventListener("click", () => {
  console.log("pet iss fed");
  givefood();
});

// render eating images
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

  exp_points += 10;
  setAge();
}

// pet/ love the pet
function pet() {
  petSurface.style.backgroundImage = 'url("catlove.png")';
  setTimeout(() => {
    petSurface.style.backgroundImage = 'url("catsit.png")';
  }, 1000);
  exp_points += 0.5;
  setAge();
}

//  play with the cat
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
  exp_points += 10;
  setAge();
}

// bath the cat
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
  exp_points += 10;
  setAge();
}

// make the cat read
function read() {
  petSurface.style.backgroundImage = 'url("read.png")';
  petSurface.style.backgroundSize = "contain";
  petSurface.style.width = "30rem";
  setTimeout(() => {
    petSurface.style.backgroundImage = 'url("catsit.png")';
    petSurface.style.backgroundSize = "cover";
    petSurface.style.width = "20rem";
  }, 1000);
  exp_points += 10;
  setAge();
}

// make the cat sleep
function sleep() {
  petSurface.style.backgroundImage = 'url("sleep.png")';
  petSurface.style.backgroundSize = "contain";
  petSurface.style.width = "30rem";
  setTimeout(() => {
    petSurface.style.backgroundImage = 'url("catsit.png")';
    petSurface.style.backgroundSize = "cover";
    petSurface.style.width = "20rem";
  }, 1000);
  exp_points += 10;
  setAge();
}

// on mose press in pet
petSurface.addEventListener("mousedown", () => {
  console.log("You are rubbing the surface!");
  pet();
});

// play bttn click event
playbtn.addEventListener("click", () => {
  play();
});

// bath btn click event
bathbtn.addEventListener("click", () => {
  bath();
});

// read btn clikc
readbtn.addEventListener("click", () => {
  read();
});

// sleep btn click
sleepbtn.addEventListener("click", () => {
  sleep();
});
