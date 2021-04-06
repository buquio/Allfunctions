const abc = 'abcdefghijklmnopqrstuvwxyz'

const isPangram = (string) => {
    const processedString = [...new Set(string.toLowerCase().split(' ').join(''))].sort().join('')
    return abc===processedString
}

console.log(isPangram('The quick Brown fox jumps over the lazy DOG'))
console.log(isPangram('abcdefghijklmnopqrstuvwxyz'))
console.log(isPangram('abcdefghpqrstuvwxyz'))