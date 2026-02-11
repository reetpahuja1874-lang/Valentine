function nextPage(num) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById("page" + num).classList.add("active");
}

let noScale = 1;
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

yesBtn.onclick = () => {
  nextPage(3);
};

noBtn.onclick = () => {
  noScale -= 0.15;
  noBtn.style.transform = `scale(${noScale})`;

  if (noScale <= 0.3) {
    noBtn.style.display = "none";
  }
};
