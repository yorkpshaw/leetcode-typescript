/* https://leetcode.com/problems/min-stack/ */

var MinStack = function() {
    this.minStack = [];
    this.container = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.container.push(val);
    if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
        this.minStack.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    var x = this.container.pop();
    if (x === this.minStack[this.minStack.length - 1]) {
        this.minStack.pop(x);
    }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.container[this.container.length -1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.minStack[this.minStack.length - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */






class MinStack {
    private minStack: number[];
    private container: number[];

    constructor() {
        this.minStack = [];
        this.container = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.container.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        const x = this.container.pop();
        if (x === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop(); // Corrected line: pop the minimum value from minStack if it is popped from container
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.container[this.container.length - 1];
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * const obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * const param_3 = obj.top();
 * const param_4 = obj.getMin();
 */
