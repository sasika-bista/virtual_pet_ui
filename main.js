const inName = document.getElementById("inputName");
const petName = document.getElementsByClassName("name")[0];
const food = document.querySelector(".food");
const feedbtn = document.querySelector(".feed");
const saveName = localStorage.getItem("name");

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
  food.innerHTML = '<img src="1.png" alt="" />';
  setTimeout(() => {
    food.innerHTML = '<img src="2.png" alt="" />';
  }, 200);
  setTimeout(() => {
    food.innerHTML = '<img src="3.png" alt="" />';
  }, 400);
  setTimeout(() => {
    food.innerHTML = '<img src="4.png" alt="" />';
  }, 600);
  setTimeout(() => {
    food.innerHTML = '<img src="5.png" alt="" />';
  }, 800);
  setTimeout(() => {
    food.innerHTML = '<img src="6.png" alt="" />';
  }, 1000);
  setTimeout(() => {
    food.innerHTML = '<img src="7.png" alt="" />';
  }, 1200);
  setTimeout(() => {
    food.innerHTML = '<img src="8.png" alt="" />';
  }, 1400);
  setTimeout(() => {
    food.innerHTML = '<img src="9.png" alt="" />';
  }, 1600);
  setTimeout(() => {
    food.innerHTML = "";
  }, 1600);
}
