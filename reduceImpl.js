const reduce=function(array,callbackFn){
    
    let result=array[0]
    for( i=1;i<array.length;i++){
       result= callbackFn(result,array[i])

    }
    return result
}

const array=[1,2,3,4,5]

var sumOfArray= reduce(array,(accumulator,currentValue)=> accumulator+currentValue,0)
console.log(sumOfArray)