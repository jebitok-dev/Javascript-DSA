// nodes (head node- prepend)5 -> 'hi' -> 8 -> 11 (tail node- append)

class LinkedList {
  constructor(value) {
    this.head = value; // first element of the list 
    this.next = null; // last element of the list
  }

  append(value) {
    const newNode = {value: value, next: null}
    if(this.tail) {
      this.tail.next = newNode;
    } 
    this.tail = newNode;
    if(!this.head) {
      this.head = newNode
    }
  }

  prepend(value) {
    const newNode = {value: value, next: this.head}
    this.head = newNode;
    if(!this.tail) {
      this.tail = newNode;
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);

    if(existingNode) {
      const newNode = {value: value, next: existingNode.next};
      existingNode.next = newNode;
    }
  }

  find(value) {
    if(!this.head) {
      return null
      ;
    }

    let curNode = this.head;

    while(curNode) {
      if(curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }

    return null;
  }

  delete(value) {
    if(!this.head) {
      return;
      // throw err
    }

    while(this.head && this.head.value === value) {
      this.head = this.head.next;
    }

    let curNode = this.head;

    while(curNode.next) {
      if(curNode.next.value === value) {
        curNode.next = curNode.next.next
      } else {
        curNode = curNode.next;
      }
    }

    if(this.tail.value === value) {
      this.tail = curNode;
    }

  }

  toArray() {
    const el = [];

    let curNode = this.head;
    while (curNode) {
      el.push(curNode);
      curNode = curNode.next;
    } 

    return el;
  }
}

const linkedList1 = new LinkedList();

linkedList1.append(1);
linkedList1.append('Hello World!');
linkedList1.append('Sharon');
linkedList1.append(false);
linkedList1.append(18.55);
linkedList1.prepend('WAGMI')

console.log(linkedList1.toArray())

linkedList1.delete('Sharon')
linkedList1.delete('WAGMI')

console.log(linkedList1.find('Hello World!'))
linkedList1.insertAfter(-1, 1)
console.log(linkedList1.toArray())
