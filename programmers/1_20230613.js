//약수의 합
//https://school.programmers.co.kr/learn/courses/30/lessons/12928

/**
 * 나의 풀이: for문을 돌려 i가 n의 약수인경우 합산하도록 처리
 */
function solution(n) {
    var answer = 0;

    for (let i = 1; i <= n; i++) {
        if (n % i === 0) {
            answer += i;
        }
    }
    return answer;
}

/**
 * 다른 사람의 풀이 중 인상 깊었던 코드
 * 연산할 양을 줄이기 위해서 약수의 짝까지 같이 더해주는 방식을 함
 * 5 * 5, 3 * 3 깉이 겹치는 약수의 경우 그 값을 한번 빼주는 처리를 한다.
 */
function resolution(n) {
    var answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            answer += i + n / i;
        }
    }
    i--;
    return i === n / i ? answer - i : answer;
}

