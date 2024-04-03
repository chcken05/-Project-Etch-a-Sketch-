let size = 16;
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
let opacity = 0.1;

for (let i = 0; i < size; i++) {
  let gridRow = document.createElement("div");
  container.appendChild(gridRow).className = "gridRow";
  for (let j = 0; j < size; j++) {
    let cell = document.createElement("div");
    gridRow.appendChild(cell).className = "cells";
  }
}

let cells = document.querySelectorAll(".cells");
let rows = document.querySelectorAll(".gridRow");

cells.forEach((div) =>
  div.addEventListener("mouseover", () => {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    div.style.backgroundColor = "#" + randomColor;
    div.className = "colored";
  })
);

function deleteGrid() {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

function createGrid(size) {
  deleteGrid();

  for (let i = 0; i < size; i++) {
    let gridRow = document.createElement("div");
    container.appendChild(gridRow).className = "gridRow";
    for (let j = 0; j < size; j++) {
      let cell = document.createElement("div");
      gridRow.appendChild(cell).className = "cells";
    }
  }

  let cells = document.querySelectorAll(".cells");

  cells.forEach((div) =>
    div.addEventListener("mouseover", () => {
      let randomColor = Math.floor(Math.random() * 16777215).toString(16);
      div.style.backgroundColor = "#" + randomColor;
    })
  );
}

btn.addEventListener("click", () => {
  size = prompt("Enter the grid size you want");
  if (size <= 100) {
    createGrid(size);
  } else {
    alert("The maximum grid size is 100");
  }
});
