let size = 16;
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");

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
    div.classList.add("bg-color");
  })
);

function deleteGrid() {
  cells.forEach((el) => el.classList.remove("cells"));
  rows.forEach((el) => el.classList.remove(".gridRow"));
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
      div.classList.add("bg-color");
    })
  );
}

btn.addEventListener("click", () => {
  size = prompt("Enter the grid size you want");
  createGrid(size);
});
