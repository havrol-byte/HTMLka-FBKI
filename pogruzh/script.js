function getRandomColor() {
  return `rgb(${Math.floor(Math.random()*256)},
              ${Math.floor(Math.random()*256)},
              ${Math.floor(Math.random()*256)})`;
}

document.getElementById("table").addEventListener("click", function(e) {
  if (e.target.tagName === "TD") {
    e.target.style.backgroundColor = getRandomColor();
  }
});

document.getElementById("tree").addEventListener("click", function(e) {
  let li = e.target.closest("li");
  if (!li) return;

  let childUl = li.querySelector(":scope > ul");
  if (!childUl) return;

  if (childUl.style.display === "none") {
    childUl.style.display = "block";
    li.classList.add("open");
  } else {
    childUl.style.display = "none";
    li.classList.remove("open");
  }

  e.stopPropagation();
});