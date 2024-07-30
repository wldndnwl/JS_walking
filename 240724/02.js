let lion = {
  name: "심바",
  age: 3,
  main: "참",
  line: "하쿠나마타타",
};

lion.line = function () {
  return "하쿠나마타타";
};

console.log(lion.line());

// let entries = Object.entries(lion);
// console.log(entries);

// let assign  = lion.line;
// console.log(assign);

// let { line } = lion;
// console.log(line);
