// 문자열정수의합
// https://school.programmers.co.kr/learn/courses/30/lessons/181849

function solution(num_str) {
    var answer = 0;
    num_str.split("").forEach(num => {
        const newNum = Number(num)
        answer += newNum
    })
    return answer;
}
