1;
2;
3;
4;
5;
6;
7;
8;
9;
10;
11;
12;
13;
14;
15;
16;
17;
18;
19;
20;
21;
22;
23;
24;
25;
26;
27;
28;
29;
30;
31;
32;
33;
34;
35;
36;
37;
38;
39;
40;
41;
42;
43;
44;
45;
46;
47;
48;
49;
50;
51;
52;
53;
54;
55;
56;
57;
58;
59;
class Node {
  constructor(value = "root") {
    this.value = value;
    this.children = new Map();
    this.count = 0;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currentNode = this.root;
    for (const char of word) {
      if (!currentNode.children.has(char))
        currentNode.children.set(char, new Node(char));
      currentNode = currentNode.children.get(char);
      currentNode.count++;
    }
  }

  loop(node = this.root) {
    for (const [key, val] of node.children) {
      console.log(val);
      this.loop(val);
    }
  }

  searchCount(word) {
    let count = 0;
    let node = this.root;
    for (const char of word) {
      count++;
      node = node.children.get(char);
      if (node.count === 1) break;
    }

    return count;
  }
}

function solution(words) {
  const trie = new Trie();
  let answer = 0;

  for (const word of words) {
    trie.insert(word);
  }

  for (const word of words) {
    const count = trie.searchCount(word);
    answer += count;
  }

  return answer;
}
