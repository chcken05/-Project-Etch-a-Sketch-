const rows = 16;
const cols = 16;
const container = document.querySelector(".container");

for (let i = 0; i < rows; i++) {
  let gridRow = document.createElement("div");
  container.appendChild(gridRow).className = "gridRow";
  for (let j = 0; j < cols; j++) {
    let cells = document.createElement("div");
    gridRow.appendChild(cells).className = "cells";
  }
}
