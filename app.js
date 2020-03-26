const sound = document.getElementById("sound");

const keys = document.querySelectorAll("#key").forEach((key) => {
  key.addEventListener("click", (event) => {
  event.currentTarget.classList.toggle("playing");
  sound.play();
});
});


