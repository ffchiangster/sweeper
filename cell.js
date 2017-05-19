function Cell (x, y, w) {
  // cells should have a state, revealed or not: true/false
  // image: true/false
  // number
  this.x = x;
  this.y = y;
  this.w = w;
  if (random(1) < 0.5) {
    this.bomb = true;
  } else {
    this.bomb = false;
  }
  this.revealed = false;
}

Cell.prototype.show = function() {
  stroke(0);
  noFill();
  rect(this.x, this.y, this.w, this.w);
  if (this.revealed) {
    if (this.bomb) {
      ellipse(this.x + this.w * 0.5, this.y + this.w * 0.5, this.w * 0.5);
    }
  }
}