function solution(estimates, k) {
    let answer = 0;
    const reducer = (A, B) => A + B;
    var max_sum = 0;
  
    for (var i = 0; i < estimates.length - k + 1; i++) {
      var subarray = estimates.slice(i, i + k);
      var temp = subarray.reduce(reducer);
      if (max_sum < temp) {
        max_sum = temp;
      }
    }
  
    answer = max_sum;
  
    return answer;
  }
  