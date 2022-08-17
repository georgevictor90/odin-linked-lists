class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(headNode) {
    this.HEAD = headNode;
  }

  append(value) {
    let tmp = this.HEAD;
    while (tmp.next != null) {
      tmp = tmp.next;
    }
    tmp.next = new Node(value);
  }

  prepend(value) {
    let tmp = this.HEAD;
    this.HEAD = new Node(value);
    this.HEAD.next = tmp;
  }

  size() {
    let tmp = this.HEAD;
    let count = 1;
    while (tmp.next != null) {
      tmp = tmp.next;
      count++;
    }
    return count;
  }

  head() {
    return this.HEAD;
  }

  tail() {
    let tmp = this.HEAD;
    while (tmp.next != null) {
      tmp = tmp.next;
    }
    return tmp;
  }

  at(index) {
    let tmp = this.HEAD;
    let count = 0;
    if (index < 0) return null;
    while (tmp.next != null && count < index) {
      tmp = tmp.next;
      count++;
    }
    if (index > count) return null;
    return tmp;
  }

  pop() {
    let tmp = this.HEAD;
    while (tmp.next.next != null) {
      tmp = tmp.next;
    }
    tmp.next = null;
  }

  contains(value) {
    let tmp = this.HEAD;
    while (tmp != null && tmp.value !== value) {
      tmp = tmp.next;
    }
    return tmp != null ? true : false;
  }

  find(value) {
    let tmp = this.HEAD;
    let count = 0;
    while (tmp != null && tmp.value !== value) {
      tmp = tmp.next;
      count++;
    }
    return tmp != null ? count : null;
  }

  toString() {
    let tmp = this.HEAD;
    let string = "";
    while (tmp != null) {
      string += `(${tmp.value}) -> `;
      tmp = tmp.next;
    }
    string += "null";
    return string;
  }

  insertAt(value, index) {
    let tmp = this.HEAD;
    let prev;
    let count = 0;
    if (index < 0) return null;
    if (index === 0) {
      this.HEAD = new Node(value);
      this.HEAD.next = tmp;
      return;
    }
    while (tmp.next != null && count != index) {
      prev = tmp;
      tmp = tmp.next;
      count++;
    }
    if (index > count) return null;
    let newNode = new Node(value);
    newNode.next = tmp;
    tmp = newNode;
    prev.next = tmp;
  }

  removeAt(index) {
    let tmp = this.HEAD;
    let prev;
    let count = 0;
    if (index < 0) return null;
    if (index === 0) {
      this.HEAD = tmp.next;
      return;
    }
    while (tmp.next != null && count != index) {
      prev = tmp;
      tmp = tmp.next;
      count++;
    }
    if (index > count) return null;

    prev.next = tmp.next;
  }
}
