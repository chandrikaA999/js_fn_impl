const filter=function(array,callbackFn){
    var resultArray=[]
    for(let i=0;i<array.length;i++){
        if(callbackFn(array[i]))
        resultArray.push(array[i])
    }
    return resultArray;
}

const array=[1,2,3,4,5,6];
var evenNumberArray=filter(array,(ele)=>ele%2===0)
console.log(evenNumberArray)