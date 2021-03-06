console.clear();

class LinkedList {
  constructor(value) {
    this.head = { value: value, next: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = { value: value, next: null };
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = { value: value, next: null };
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      array.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return array;
  }
  insert(index, value) {
    if (index >= this.length) this.append(value);

    const newNode = { value: value, next: null };
    const leader = this.traversedToIndex(index - 1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
  }

  traversedToIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
  remove(index) {
    const leader = this.traversedToIndex(index - 1);
    const unwantedNode = leader.next;
    leader.next = unwantedNode.next;
    this.length--;
  }
  reverse() {
    if (!this.head.next) {
      return this.head;
    }

    let first = this.head;
    this.tail = this.head;
    let scend = first.next;

    while (scend) {
      const temp = scend.next;
      scend.next = first;
      first = scend;
      scend = temp;
    }
    this.head.next = null;
    this.head = first;
    return this;
  }
}

const myLinkedList = new LinkedList(10);
myLinkedList.append(30);
myLinkedList.prepend(5);
myLinkedList.insert(1, 25);
myLinkedList.insert(2, 555);
myLinkedList.remove(1);
myLinkedList.reverse();
console.log(myLinkedList.printList());
// console.log(myLinkedList);
