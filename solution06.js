// 중복단어제거(filter)
// 특정 문자열을 찾는 filter

function solution(s) {
  let answer;
  answer = s.filter(function (v, i) {
    if (s.indexOf(v) === i) return true;
  });

  return answer;
}
let str = ["good", "time", "good", "time", "student"];
console.log(solution(str));
