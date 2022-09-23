class Stack {
    constructor() {
        this.data = []
    }

    pushToStack(element) {
        // O(1)
        this.data.push(element)
    }

    popFromStack() {
        // O(1)
        this.data.pop()
    }

    isEmpty() {
        return this.data.length === 0
    }
}

const our_stack = new Stack()

our_stack.pushToStack(1)
our_stack.pushToStack(2)
our_stack.pushToStack(3)

our_stack.data.forEach(item => {
    console.log(`stack item: ${item}`)
})
