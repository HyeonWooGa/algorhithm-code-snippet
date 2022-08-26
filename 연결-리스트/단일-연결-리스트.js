/*
단일 연결 리스트는 
각 Node와 하나의 SinglyLinkedList 로 구성되어 있습니다.
*/

class Node {
  constructor(value) {
    this.value = value; // 데이터 영역
    this.next = null; // 포인터 영역 : 생성시점에는 아무것도 가리키지 않습니다.
  }
}

// 노드끼리 엮어주는 기능만 할뿐, 자체적으로 노드를 갖지 않습니다.
class SinglyLinkedList {
  constructor() {
    this.head = null; // 헤드 포인터 영역
    this.tail = null; // 테일 포인터 영역
  }

  // 찾기 로직
  find(value) {
    let currNode = this.head; // 현재 노드 = 헤드포인터로 할당하여 초기화
    // 현재노드 === 찾고자하는 값 일 경우, 반복문 종료
    while (currNode.value !== value) {
      currNode = currNode.next; // 값을 찾을 때까지 다음 노드 순회
    }
    return currNode; // 반복문이 종료된 해당 노드 반환
  }

  // 추가 로직, 끝 부분
  append(newValue) {
    const newNode = new Node(newValue); // 새로운 노드 = 전달받은 노드 클래스 할당
    // 연결리스트에 아무런 값이 없다는 뜻
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  // 추가 로직, 중간 부분
  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  // 삭제 로직, O(n) 시간 복잡도로 구현, O(1) 시간 복잡도로 구현하고 싶으면 이전 노드 매개변수로 사용
  // 연결된 노드가 없는 노드는 자동으로 삭제됩니다.
  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    let displayString = "[";
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString.substring(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString);
  }
}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();

/*
 * [1, 2, 3, 4]
 * Node { value: 3, next: Node { value: 5, next: null } }
 * [1, 2, 5]
 * [1, 2, 10, 5]
 *
 */
