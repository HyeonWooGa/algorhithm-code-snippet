class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    let currentNode = this.root;
    for (const char of string) {
      if (!currentNode.children.has(char)) {
        currentNode.children.set(char, new Node(1));
      } else {
        const children = currentNode.children.get(char);
        children.value++;
        currentNode.children.set(char, children);
      }
      currentNode = currentNode.children.get(char);
    }
  }

  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }
    return true;
  }

  search(string) {
    let currentNode = this.root;
    let result = 0;
    for (const char of string) {
      const children = currentNode.children.get(char);
      if (children.value === 1) {
        result += 1;
        return result;
      }
      result += 1;
      currentNode = currentNode.children.get(char);
    }
    return result;
  }
}

function solution(words) {
  const trie = new Trie();
  let result = 0;

  for (const word of words) {
    trie.insert(word);
  }

  for (const word of words) {
    result += trie.search(word);
  }
  return result;
}
