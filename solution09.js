// 이진수 출력(재귀)

function solution(n){
    let answer=""; // answer를 스트링 시켜도 되고 안시켜도 되고
    function DFS(n){
        if(n===0) return;
        else{
            DFS(parseInt(n/2)); // 마지막에 들어간 데이터를 먼저 처리하기 위해
            answer+=String(n%2); // String화 시킴
        }
    }
    DFS(n);
    return answer;
}

console.log(solution(11));