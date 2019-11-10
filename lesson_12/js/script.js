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