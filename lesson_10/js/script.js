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