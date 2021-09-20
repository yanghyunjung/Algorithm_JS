function solution(n){
    let answer;
    answer=Math.ceil(n/12);
    // 주어진 숫자보다 크거나 같은 숫자 중 가장 작은 숫자를 Integer 로 반환
    return answer;
}

console.log(solution(178));