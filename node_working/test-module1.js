class calc{
    add(a,b){
        return a+b;
    }
    multiply(a,b){
        return a*b;
    }
}
module.exports=calc;    //used when we have to export single "thing"

//also we can write as:
// module.exports=class{
//     add(a,b){
//         return a+b;
//     }
//     multiply(a,b){
//         return a*b;
//     }
// }
