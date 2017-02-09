'use strict';
const colors_json = require('../colors.json');

const SQUARE_SIZE = 20

const randomColorInPalette = (palette) => {
  const {_rgb} = palette[Math.floor(Math.random() * palette.length)]
  const r = _rgb[0];
  const g = _rgb[1];
  const b = _rgb[2];

  return {r,b,g};
}

const addSquare = (container, {r,b,g}) => {
  let colorBox = document.createElement('div');
  colorBox.className = 'color-box';
  colorBox.style['background-color'] = `rgb(${r}, ${g}, ${b})`;
  container.appendChild(colorBox);
}

const fillRow = (container, colors) => {
  let numSquares = 0;
  const squareLimit = Math.floor(window.innerWidth / SQUARE_SIZE)

  while (numSquares < squareLimit) {
    let {r,b,g} = randomColorInPalette(colors);
    addSquare(container, {r,g,b})
    numSquares++;
  }

  return container;
}

export default () => {
  let colorsContainer = document.createElement('div');
  colorsContainer.className = 'colors-container';
  
  let numRows = 0;
  const rowLimit = Math.ceil(window.innerHeight / SQUARE_SIZE)
  
  while (numRows < rowLimit) {
    for (const {file, colors} of colors_json.colors) {
      if(numRows < rowLimit) {
        let photoColors = document.createElement('div');
        photoColors.className = 'photo-colors';

        fillRow(photoColors, colors)
        numRows++;
        colorsContainer.appendChild(photoColors);
      }
    }
  }

  document.body.appendChild(colorsContainer);
}