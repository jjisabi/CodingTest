function solution(array) {
    const middle = Math.floor(array.length / 2);
    
    array.sort(function (a,b){
        return a-b;
    })
    
    return array[middle];
}