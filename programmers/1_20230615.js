//수박수박수박수박수박수?
//https://school.programmers.co.kr/learn/courses/30/lessons/12922

// 나의 풀이
// n / 2만큼은 수박을 반복하고 홀수일 경우 "수"를 추가하는 방식으로 처리
function solution(n) {
    var answer = "";
    answer += "수박".repeat(Math.floor(n / 2));
    return n % 2 === 0 ? answer : (answer += "수");
}

// 다른사람 풀이중 인상에 남는 코드
// slice로 원하는 길이까지 자르는 방식
const solution2 = (n) => "수박".repeat(n / 2 + 1).slice(0, n);
