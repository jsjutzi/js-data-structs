class Queue {
    constructor() {
        this.data = []
    }

    enqueue(element) {
        // O(1)
        return this.data.push(element)
    }

    dequeue() {
        // O(n)
        return this.data.shift()
    }

    isEmpty() {
        return this.data.length === 0
    }
}

const our_queue = new Queue()

our_queue.pushToQueue(1)
our_queue.pushToQueue(2)
our_queue.pushToQueue(3)

our_queue.popFromQueue()

our_queue.data.forEach(item => {
    console.log(`queue item: ${item}`)
})

