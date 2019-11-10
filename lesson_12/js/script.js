// #01
const btn1 = document.querySelector('.btn1')
const div1 = document.querySelector('.div1')
let out1 = ''
const a = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [4, 5, 6],
    ['d', 'e', 'f'],
    [7, 8, 9],
]

for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        out1 += `${a[i][k]}&nbsp;`
    }
    out1 += `<br>`
}

btn1.onclick = () => div1.innerHTML = out1


// #02
const btn2 = document.querySelector('.btn2')
const div2 = document.querySelector('.div2')
btn2.onclick = () => div2.innerHTML = a[0][2]


// #03
const btn3 = document.querySelector('.btn3')
const div3 = document.querySelector('.div3')
btn3.onclick = () => div3.innerHTML = a[3][1]


// #04
const btn4 = document.querySelector('.btn4')
const div4 = document.querySelector('.div4')
btn4.onclick = () => div4.innerHTML = a[2]


// #05
const btn5 = document.querySelector('.btn5')
const div5 = document.querySelector('.div5')
let out5 = ''

btn5.onclick = () => {
    for (let i = 0; i < a.length; i++) {
        out5 += `${a[i][0]}&nbsp;`
    }
    div5.innerHTML = out5
}


// #06
const btn6 = document.querySelector('.btn6')
const div6 = document.querySelector('.div6')
let out6 = ''

for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
        out6 += `${a[i]}<br>`
    }
}

btn6.onclick = () => div6.innerHTML = out6