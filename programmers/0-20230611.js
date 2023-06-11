// x사이의개수
// https://school.programmers.co.kr/learn/courses/30/lessons/181867

function solution(myString) {
    var answer = [];    
    myString.split("x").forEach((str) => answer.push(str.length))
    return answer;
}

