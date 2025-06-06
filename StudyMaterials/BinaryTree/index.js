class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.isEmpty()) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(root, newNode) {
    if (newNode.value < root.value) {
      if (root.left === null) {
        root.left = newNode;
      } else {
        this.insertNode(root.left, newNode);
      }
    } else {
      if (root.right === null) {
        this.right = newNode;
      } else {
        this.insertNode(root.right, newNode);
      }
    }
  }
}

const BST = new BinarySearchTree();
console.log(` is empty ? ${BST.isEmpty()}`); // true
BST.insert(10);
BST.insert(5);
BST.insert(15);
BST.insert(20);
