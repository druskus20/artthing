import p5 from 'p5';

// Closure for the p5 instance
let sketch = function(p: p5) {
  let x = 100;
  let y = 100;

  p.setup = function() {
    p.createCanvas(700, 410);
  };

  p.draw = function() {
    p.background(0);
    p.fill(255);
    p.rect(x, y, 50, 50);
  };
};

// Create a new instance of a p5 class
new p5(sketch);
