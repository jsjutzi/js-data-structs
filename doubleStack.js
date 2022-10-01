class DoubleStack {
  constructor(n) {
    this.data = new Array(n);
    this.size = n;
    this.topOfStackOne = -1;
    this.topOfStackTwo = this.size;
  }

  pushToStackOne(element) {
    // Check to see if we have room in stack one
    if (this.topOfStackOne < this.topOfStackTwo - 1) {
      this.topOfStackOne++;
      this.data[this.topOfStackOne] = element;
    } else {
      console.log("performing this action would cause stack overflow");
    }
  }

  pushToStackTwo(element) {
    // Check to see if we have room in stack two
    if (this.topOfStackOne < this.topOfStackTwo - 1) {
      this.topOfStackTwo--;
      this.data[this.topOfStackTwo] = element;
    } else {
      console.log("performing this action would cause stack overflow");
    }
  }

  popFromStackOne() {
    if (this.topOfStackOne >= 0) {
      let x = this.data[this.topOfStackOne];
      this.topOfStackOne--;
      return x;
    } else {
      console.log("performing this action will cause stack underlfow");
    }
  }

  popFromStackTwo() {
    if (this.topOfStackTwo < this.size) {
      let x = this.data[this.topOfStackTwo];
      this.topOfStackTw++;
      return x;
    } else {
      console.log("performing this action will cause stack underlfow");
    }
  }

  isEmpty() {
    return this.data.length === 0;
  }
}