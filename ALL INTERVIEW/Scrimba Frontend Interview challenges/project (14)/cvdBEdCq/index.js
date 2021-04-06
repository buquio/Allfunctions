const map = (array, callback) => {
   return array.reduce((accumulator,value)=>{
     return [...accumulator, callback(value)]
   },[])
}


console.log(map([1, 2, 3], (v) => v * v)); // [2,3,4]