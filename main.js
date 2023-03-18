function findOdd(A) {
    for(let i = 0; i <A.length; i++){
        let sum = 0;
       for(let j = 0; j <A.length;j++){
        if(A[i] === A[j]){
            sum+=1;
        }
       }
       if(sum % 2 === 1){
        return A[i];
       }
    }

}

console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1]));