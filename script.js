const noButton = document.getElementById("no");
const yesButton = document.getElementById("yes");
const message = document.getElementById("message");

noButton.addEventListener("mouseenter", () => {
  const container = document.querySelector(".buttons");

  const maxX = container.offsetWidth - noButton.offsetWidth;
  const maxY = container.offsetHeight - noButton.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});

yesButton.addEventListener("click", () => {
  message.innerText = "Yay! ❤️ I knew you’d say yes 🥰";
});
