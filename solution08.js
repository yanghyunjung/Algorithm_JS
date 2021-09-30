// 재귀 함수(자기가 자기 자신을 호출)
// DFS
// 스택(후입선출)

function solution(n){
    function DFS(L){
        if(L==0) return;
        else{
            DFS(L-1);
            console.log(L);
        }
    }

    DFS(n)
}

solution(3);