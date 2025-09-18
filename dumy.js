//map or filter jab bhi chalege ek naya array ayeaga
//map ke andar return karna bahut jyada jarori hai
// map har element ke andar kuch karta hai or dusre array me rakh deta hai
var arr = [1,2,3,4,5,65];
var double =arr.map((val)=>{
    return val*2
})

//ase bhi kar sakte hai 
var triple = arr.map(val=>val*3)
console.log(arr)
console.log(triple)
console.log(double)

// jo number 5 se bada hia unme 3 add kar do or jo chota thia usko asi hi vapas likh do
var state =[1,2,3,4,5,6,7,8,8,9,10];
var five =state.map(elem=>elem>5?elem+5:elem);
console.log(five);