const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: 'A4',
  orientation: 'landscape',
  units: 'cm',
  pixelsPerInch: 300 
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'orange';
    context.fillRect(0, 0, width, height);

    //path API
    context.beginPath;
    context.arc(width / 2, height / 2, 2, 0, Math.PI * 2, false);
    context.fillStyle = 'red'
    context.fill();

    // Outline the path
    context.linewidth = width * 0.05;
    context.strokeStyle = 'blue';
    context.stroke();
  };
};

canvasSketch(sketch, settings);
