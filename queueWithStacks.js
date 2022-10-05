class Queue {
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }

  enqueue(value) {
    this.stack1.push(value);
  }

  dequeue() {
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }

    return this.stack2.pop();
  }
}

const queue = new Queue();

queue.enqueue(2);
queue.enqueue(7);
queue.enqueue(46);

console.log(queue.dequeue());
