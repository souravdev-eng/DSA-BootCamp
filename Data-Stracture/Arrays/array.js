class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }
  get(index) {
    return this.data[index];
  }
  push(item) {
    this.data[this.length] = item;
    this.length++;
    return this.length;
  }
  pop() {
    delete this.data[this.length - 1];
    this.length--;
  }
  delete(index) {
    this.unShift(index);
  }
  unShift(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length--;
  }
}

const myArray = new MyArray();
myArray.push("Hello");
myArray.push("I am");
myArray.push("Sourav");
// myArray.delete(0);
myArray.pop();
console.log(myArray);
// console.log(myArray.delete(1));
