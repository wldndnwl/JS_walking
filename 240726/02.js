// 파일을 만들어 나이가 19 이상이면 “안녕하세요”, 아니라면 “나가세요”를 반환하는 함수인 `checkAge` 함수를 완성해보세요.

function checkAge(age) {
  if (age >= 19) {
    // console.log("안녕하세요")
    return "안녕하셍요";
  } else if (age < 19) {
    // console.log("나가세요;")
    return "나가세요";
  }
}

// 함수 실행
console.log(checkAge(19));
console.log(checkAge(2));

// `*checkAge*` 함수가 숫자(`*age`)*를 매개 변수로 받아 19 이상일 때에는 *“안녕하세요”*라는 문자열을, 19 미만일 때에는 “나가세요”라는 문자열을 반환하도록 `*checkAge*`  함수를 완성해주세요.
// 실제 숫자를 매개변수로 받도록 `*checkAge`* 함수를 실행하여 “*안녕하세요*” 혹은 “나가세요”를 콘솔에 출력해보세요.
