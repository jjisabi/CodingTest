function solution(slice, n) {
    for(var i=1; i<=n; i++){
        if((slice*i) >= n){
            return i;
        }
    }
}