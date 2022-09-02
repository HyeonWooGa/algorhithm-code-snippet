// 알고리즘

//// 요소 추가
////// 1. 만약, 추가된 요소의 우선순위가 부모 정점보다 높다면 순서를 바꿉니다.
////// 2. 추가된 요소가 부모 정점보다 우선순위가 높은 경우 순서를 바꾸는 과정을 반복합니다.
////// 3. 결국, 가장 우선순위가 높은 정점이 루트가 됩니다. (최대 힙 완성)

//// 요소 삭제 (노드의 갯수보다 삭제연산을 더 많이 요청하는 경우 예외처리)
////// 1. 루트 정점이 제거된 후 가장 마지막 정점이 루트에 위치합니다.
////// 2. 루트 정점의 두 자식 정점 중 우선순위가 더 높은 정점과 바꿉니다.
////// 3. 따라서, 가장 우선순위가 높은 정점이 루트가 됩니다. (최대 힙 완성)
////// 4. 두 자식 정점이 우선순위가 더 낮을 때 까지 반복합니다.
////// 5. 결국, 1) 가장 우선순위가 높은 정점은 루트가 되고 2) 모든 부모 정점은 항상 자식 정점보다 우선순위가 높게 됩니다.

//////// 정점 : 노드(Node)

class MaxHeap {
  constructor() {
    this.heap = [null]; // 이진-트리 배열 첫 요소는 항상 null
  }

  // 요소 추가
  push(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    // 추가된 요소의 부모 요소보다, 추가된 요소의 우선순위가 높은 경우, while 문 진입
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      // 추가된 요소가 한 단계씩 올라가며, 로직을 반복합니다.
      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  // 요소 삭제
  pop() {
    // 예외처리, 노드의 갯수보다 삭제 연산을 더 많이하는 요청하는 경우

    if (this.size() === 1) {
      return "삭제할 노드가 없습니다.";
    }

    if (this.size() === 2) {
      return this.heap.pop();
    }

    // 루트 정점 요소 제거
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }

      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;
    }

    return returnValue;
  }

  // 트리 배열의 갯수 반환하는 함수(메서드) 생성
  size() {
    return this.heap.length;
  }
}

// 요소 추가 테스트

const heap = new MaxHeap();

heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);

console.log(heap.heap);
// [ null, 63, 54, 45, 27, 36 ]

// 요소 삭제 테스트

const array = [];

array.push(heap.pop()); // 63
array.push(heap.pop()); // 54
array.push(heap.pop()); // 45
array.push(heap.pop()); // 36
array.push(heap.pop()); // 27

console.log(array);
// [63, 54, 45, 36, 27] - Heap Sort!!! Carzy!!!! Awesome!!!!!

// 노드의 갯수보다 삭제연산을 더 많이 요청하는 경우
array.push(heap.pop()); // '삭제할 노드가 없습니다.'
array.push(heap.pop()); // '삭제할 노드가 없습니다.'

console.log(array);
// [63, 54, 45, 36, 27, '삭제할 노드가 없습니다.', '삭제할 노드가 없습니다.']
