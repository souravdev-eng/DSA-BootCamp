console.clear();

class DoublyLinkedList {
  constructor(value) {
    this.head = { value: value, next: null, prev: null };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = { value: value, next: null, prev: null };
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = { value: value, next: null };
    this.head.prev = newNode;
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

    const newNode = { value: value, next: null, prev: null };
    const leader = this.traversedToIndex(index - 1);
    const follower = leader.next;

    leader.next = newNode;
    newNode.prev = leader;
    newNode.next = follower;
    follower.prev = newNode;
    const res = follower.prev;
    console.log(this);
    this.length++;
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
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(30);
myLinkedList.append(500);
myLinkedList.prepend(5);
myLinkedList.insert(1, 25);
// myLinkedList.insert(3, 555);
// myLinkedList.remove(1);
// myLinkedList.remove(1);
// console.log({ myLinkedList });
// console.log(myLinkedList.tail.prev);
console.log(myLinkedList.printList());
