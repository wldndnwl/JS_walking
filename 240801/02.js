let tutorNames = ["최원장", "김르탄", "윤창식", "박가현", "김병연", "내배캠"];

// sort() 메서드를 활용하여 다음과 같은 결과가 나오도록 코드를 작성해 주세요.
// 결과: ['김병연', '김르탄', '내배캠', '박가현', '윤창식', '최원장']

// 튜터님 이름이 담긴 배열을 가나다순으로 정렬하는 코드를 작성해주세요.
// 이 아래에 코드를 작성해주세요!

tutorNames.sort(function (a, b) {
  //   if (a < b) return -1;
  //   if (a > b) return 1;
  //   return 0;
  return a.localeCompare(b);
});

// 서치해서 어케 했는데 왜 이렇게 나오는지 전혀! 모르겠음 ㅎ

console.log(tutorNames);
