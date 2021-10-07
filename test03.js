function solution(office, k) {
    var answer = -1;
    var employee = -1;
  
    var search_len = office.length - k + 1;
    for (var i = 0; i < search_len; i++) {
      for (var j = 0; j < search_len; j++) {
        var sum = 0;
  
        for (var ii = i; ii < i + k; ii++) {
          for (var jj = j; jj < j + k; jj++) {
            sum += office[ii][jj];
          }
        }
  
        if (employee < sum) {
          employee = sum;
        }
      }
    }
  
    answer = employee;
    return answer;
  }