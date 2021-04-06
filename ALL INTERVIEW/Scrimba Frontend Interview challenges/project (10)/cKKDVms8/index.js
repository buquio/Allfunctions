const encode = (string)=>{
    return string.replace(/(\w)\1+/g, (m,v) => `${m.length}${v}`)
}

const decode = (string)=>{
    return string.replace(/(\d+)(\w)/g, (x,y,z) => z.repeat(y))
}


console.log(encode('wwwwwwwwiiuuuu')) // 3w2i4u
console.log(decode('2u3a4o')) // uuaaaoooo 