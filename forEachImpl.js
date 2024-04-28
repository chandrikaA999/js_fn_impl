const forEach=function(array,callbackFn){
    for(let i=0;i<array.length;i++){
        callbackFn(array[i])
    }
}
const array=["chandrika","kusuma","phaneendra"]
var result=forEach(array,ele=>console.log(`Hi ${ele}`))