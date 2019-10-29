// #01
const array1 = ['Man', 'Gary', 47, true]
console.log(array1)


// #02
const array2 = ['Hello', 'wold', '!', 100, true, false, 'Best']
const div2 = document.querySelector('.div2')
div2.innerHTML = array2


// #03
const a = [2, 'hello', 17, 34, 'privet']
const div3 = document.querySelector('.div3')
div3.innerHTML = a.length


// #04
console.log(a[0], a[3], a[8]) // 8го элемента в массиве нет значение undefined


// #05
const div5 = document.querySelector('.div5')
div5.innerHTML = a[0] + a[2] + a[3]


// #06
const array6 = ['Human', 205, 01, 'January']
const div6 = document.querySelector('.div6')
div6.innerHTML = array6


// #07
let b = ['one', 1, 2, 'two']
b.push('hi', 'foo', 'bar')
const div7 = document.querySelector('.div7')
div7.textContent = b


// #08
let b8 = ['one', 1, 2, 'two']
b8.splice(2, 0, 3.14, 17)
b8.splice(5, 0, 5)
console.log(b8, b8.length)
const div8 = document.querySelector('.div8')
div8.innerHTML = `${b8}<br>b8.length = ${b8.length}`


// #09
const array9 = [0, 1, 2, false, 'Hi', 99, true, '0001', 'cat', '100']
console.log(array9[2], array9[6])
console.log(array9)


// #10
let array10 = [1, , , , 5, , , , , 10]
console.log(array10, a.length)
const div10 = document.querySelector('.div10')
div10.innerHTML = `${array10}<br>array10.length = ${array10.length}`