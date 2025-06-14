class Stack {
	items;
	constructor() {
		// Initialize your stack
		this.items = [];
	}

	push(element) {
		// Add element to the top
		this.items.push(element);
	}

	pop() {
		// Remove and return top element
		return this.items.pop();
	}

	peek() {
		// Return top element without removing
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		// Check if stack is empty
		return this.items.length === 0;
	}

	size() {
		// Return number of elements
		return this.items.length;
	}

	clear() {
		// Remove all elements
		this.items = [];
	}
}

module.exports = Stack;
