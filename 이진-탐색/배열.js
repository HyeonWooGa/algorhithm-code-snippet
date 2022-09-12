/*
    코딩 테스트에서 이진 탐색을 사용할 경우 대부분 이와 같이 사용합니다.
*/

const array = [1, 2, 3, 4, 5, 6, 7];

function binarySearch(array, findValue) {
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);
  while (left <= right) {
    if (array[mid] === findValue) {
      return mid;
    }

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

console.log(binarySearch(array, 3)); // 2
console.log(binarySearch(array, 7)); // 6
console.log(binarySearch(array, 8)); // -1
