const listRadio = document.querySelectorAll("input[name='radio']");
const form = document.getElementById("form");
const cardMenu = document.getElementById("card-menu");
const cardSuccess = document.getElementById("card-success");
const ratingUser = document.querySelector(".card-rating span");
const backButton = document.getElementById("back");

let ratingValue;

function formSubmitHandler(e) {
  e.preventDefault();
  if (!ratingValue) {
    return alert("choose one rating");
  }

  cardMenu.style.display = "none";
  cardSuccess.style.display = "flex";
  ratingUser.innerHTML = ratingValue;
}

function backButtonHandler() {
  cardMenu.style.display = "block";
  cardSuccess.style.display = "none";
}

listRadio.forEach((input) => {
  input.addEventListener("change", (e) => {
    ratingValue = e.target.value;
  });
});

backButton.addEventListener("click", backButtonHandler);

form.addEventListener("submit", formSubmitHandler);
