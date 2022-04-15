class Stack {
  constructor() {
    this.data = [];
  }
  peek() {
    if (this.data.length === 0) {
      return null;
    }
    return this.data[this.data.length - 1];
  }
  push(value) {
    this.data.push(value);
    return this;
  }
  pop() {
    if (this.data.length === 0) {
      return null;
    }
    this.data.pop();
    return this;
  }
}

const myStack = new Stack();

myStack.push("Google");
myStack.push("Udemy");
myStack.push("LinkedIn");
myStack.pop();
myStack.pop();
console.log(myStack.peek());

console.log(myStack);
