// 아무 이름을 가진 key 사용하는 object, 타입만 지정
type Words = {
  [key: string]: string;
};

/* const dict: Words = {
    "aim" : "for the TOP"
} */

class Dict {
  // 속성을 만들고 초기화하는 방법
  private words: Words;
  constructor() {
    this.words = {};
  }

  // 클래스를 타입처럼 사용, 클래스가 타입으로 지정되면 인스턴스가 된다
  add(word: Word) {
    if (this.words[word.term] === undefined) {
      this.words[word.term] = word.def;
    }
  }

  def(term: string) {
    return this.words[term];
  }
}

class Word {
  constructor(public term: string, public def: string) {}
}

const kimchi = new Word("kimchi", "food of Korea");

const dict = new Dict();

dict.add(kimchi);
dict.def("kimchi"); // "food of Korea"
