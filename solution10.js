// 이진트리 순회(깊이우선탐색)
// 중위순회 출력 - 부모는 왼쪽자식 먼저 탐색하고 오른쪽자식 가야함
// 후위순회 출력 - 왼쪽, 오른쪽 자식 탐색하고 마지막에 부모!

function solution(v){
    let answer;
    function DFS(v){
        if(v>7) return;
        else{
            DFS(v*2);
            DFS(v*2+1);
            console.log(v);
        }
    }

    DFS(v);
    return answer;
}

console.log(solution(1));