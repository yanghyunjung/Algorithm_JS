function solution(a, b, c) {
  let answer = "YES",
    max;
  let sum = a + b + c;
  if (a < b) max = a;
  else max = b;
  if (c > max) max = c;

  if (sum - max <= max) answer = "NO";

  return answer;
}

console.log(solution(2, 3, 11));

// 작은 두 수의 합이 가장 큰 수 보다 커야함.
