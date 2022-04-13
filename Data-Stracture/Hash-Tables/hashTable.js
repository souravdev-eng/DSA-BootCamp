console.clear();

class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length - 1; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this._hash(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    let address = this._hash(key);
    const currentData = this.data[address];
    if (currentData) {
      for (let i = 0; i < currentData.length; i++) {
        if (currentData[i][0] === key) {
          return currentData[i][1];
        }
      }
    }
    return undefined;
  }
  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]);
      }
    }
    return keysArray;
  }
}

const myHashTable = new HashTable(20);
console.log(myHashTable._hash("Grepss"));

myHashTable.set("grapes", 1000);
myHashTable.set("orange", 20);
myHashTable.set("MackBook", 1);

// console.log(myHashTable.get("orange"));
// console.log(myHashTable.get("grapes"));
// console.log(myHashTable.get("MackBook"));

// console.log(myHashTable.keys());

// console.log(myHashTable.data);
