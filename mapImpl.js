const map=function(array,callbackFn) 
{
    var resultArray=[]
    for(let i=0;i<array.length;i++){
        resultArray.push(callbackFn(array[i]))
    }    
    return resultArray
}

const array=[1,2,3,4,5];
const doubleArray=map(array,(ele)=>ele*2)
console.log(doubleArray)