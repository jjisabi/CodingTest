function solution(n, k) {
    var result = Math.floor(n/10);

    if(result > k){
        return (12000 * n) + (2000 * (result - k));
    }else{
        return (12000 * n) + (2000 * (k - result));
    }
}