//binary search tree supports three ops: insert, removal, find

class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }

  insert(key, value) {
    //a null key means empty tree
    if (this.key == null) {
      //sets inserted key as root node
      this.key = key;
      this.value = value;
    }

    //if new key is less than current node key
    else if (key < this.key) {
      if (this.left == null) {
        //!!! confused on third param 'this'
        this.left = new BinarySearchTree(key, value, this);
      } 
     else {
        this.left.insert(key, value);
      }
    } 
    
    // if new key is greater than current node
     else if (key > this.key) {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } 
      else {
        this.right.insert(key, value);
      }
    }

  }
}

const BST = new BinarySearchTree();
BST.insert(3)
BST.insert(1)
BST.insert(4)
BST.insert(6)
BST.insert(9) //wont insert
BST.insert(2)
BST.insert(5) //wont insert
BST.insert(7) //wont insert

console.log(BST)