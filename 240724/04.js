let lion = {
  name: "심바",
  age: 3,
  main: "참",
  line: "하쿠나마타타",
};

// 나이를 추가하는 함수입니다.
function incrementAge(lion) {
  return (lion.age += 1);
}

console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));
console.log(incrementAge(lion));
