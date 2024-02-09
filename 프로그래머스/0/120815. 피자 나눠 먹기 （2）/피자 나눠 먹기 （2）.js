function solution(n) {
    const pizza = 6;
    
    for(var i=1; i<=n; i++){
        if(((pizza*i) % n) === 0){
            return i;
        }
    }
}