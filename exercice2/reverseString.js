const hello = 'hello world'
let newHello = []

for (let i = hello.length - 1; i >= 0; i--) {
	console.log('i', hello[i])
	newHello.push(hello[i])
}
const j = newHello.join(' ')
console.log('newHello', j)

const newWordHello = hello.split('')
console.log('newWordHello', newWordHello)

function reverseString(word) {
	const newWord = word.split('').reverse().join(' ')
	return newWord
}

console.log('function', reverseString('hello mamma'))
