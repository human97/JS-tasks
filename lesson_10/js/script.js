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
console.log(array10, array10.length)
const div10 = document.querySelector('.div10')
div10.innerHTML = `${array10}<br>array10.length = ${array10.length}`


// #11
const btn11 = document.querySelector('.btn11')
const div11 = document.querySelector('.div11')
const c = [77, 88, 99, 66]
/*
c.splice(0, 1, c[2])
c.splice(2, 1, c[0])
btn11.onclick = () => div11.textContent = c
*/
btn11.onclick = () => {
    let c1 = c[0]
    c[0] = c[2]
    c[2] = c1
    div11.textContent = c
}


// #12
function func_12(array) {
    let e12 = array.length - 1 //индекс последнего элемента массива
    let e0 = array[0] // первый элемент массива
    array[0] = array[e12]
    array[e12] = e0
    console.log(array)
}

func_12([0, true, '99', 56, null, 100])


// #13
const d = ['y', 4, 22, 'o']
const div13 = document.querySelector('.div13')
let out13 = ''
for (let i = 0; i < d.length; i++) {
    out13 += `${d[i]}&nbsp;`
}

div13.innerHTML = out13


// #14
const e = [1, 2, 3, 'hello', 66]
const div14 = document.querySelector('.div14')
let out14 = ''
for (let i = e.length - 1; i >= 0; i--) {
    out14 += `${e[i]}&nbsp;`
}

div14.innerHTML = out14


// #15
const d15 = [0, 2, 5, -4, 6, 22, -9, -12, 8, 12, 13, 78]
const div15 = document.querySelector('.div15')
let out15 = ''
for (let i = 0; i < d15.length; i++) {
    if (d15[i] > 0) {
        out15 += `${d15[i]}&nbsp;`
    }
}

div15.innerHTML = out15


// #16
const div16 = document.querySelector('.div16')
let d15Event = []
let d15Odd = []
console.log(d15Event)
for (let i = 0; i < d15.length; i++) {
    if (d15[i] % 2 === 0) {
        d15Event.push(d15[i])
    } else {
        d15Odd.push(d15[i])
    }
}

div16.innerHTML = `<p>Event numbers: ${d15Event}</p><br><p>Odd numbers: ${d15Odd}</p>`


// #17
const div17 = document.querySelector('.div17')
let e17 = [3, 0, 2, 6, 0, 1, 3, 1, 9, 0, 2, 0]
let count17 = 0
for (let i = 0; i < e17.length; i++) {
    if (e17[i] === 0) {
        count17++
    }
    // вариант с тернарным выражением
    //e17[i] === 0 ? count17++ : count17
}

div17.textContent = count17


// #18
const div18 = document.querySelector('.div18')

let max = e17[0]
for (let i = 1; i < e17.length; i++) {
    e17[i] > max ? max = e17[i] : max
}

div18.textContent = max


// #19
let f = [-3, 0, 45, 22, 123, -485, 98, 34]
const div19 = document.querySelector('.div19')
let max18 = f[0]
let index18 = 0
for (let i = 0; i < f.length; i++) {
    if (f[i] > max18) {
        index18 = i
        max18 = f[i]
    }
}

div19.textContent = index18


// #20
const div20 = document.querySelector('.div20')
let out20 = 0
for (let i = 0; i < f.length; i++) {
    out20 += f[i]
}

div20.textContent = out20