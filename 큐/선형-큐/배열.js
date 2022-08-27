/*
    배열 사용해서 선형 큐 구현
    프론트와 리어가 무한정 커진 수 있다는 단점이 있습니다.
    코딩 테스트에서 사용
*/

class Queue {
  constructor() {
    this.queue = [];
    this.front = 0;
    this.rear = 0;
  }

  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  // shift 메서드 사용시 선형시간 O(n) 되므로 적합하지 않고
  // 아래와 같이 작성해야 합니다.
  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front++;
    return value;
  }

  // 프론트 인덱스에 해당하는 값 반환
  peek() {
    return this.queue[this.front];
  }

  size() {
    return this.rear - this.front;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(4);
console.log(queue.dequeue()); // 1
queue.enqueue(8);
console.log(queue.size()); // 3
console.log(queue.peek()); // 2
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 4
