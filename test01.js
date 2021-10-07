function solution(price) {
    var answer = [];
    for (var i = 0; i < price.length - 1; i++) {
      var day = 1;
      for (var j = i + 1; j < price.length; j++) {
        if (price[i] >= price[j]) {
          day += 1;
        } else {
          answer.push(day);
          break;
        }
        if (j == price.length - 1) {
          answer.push(-1);
        }
      }
    }
    answer.push(-1);
    return answer;
  }