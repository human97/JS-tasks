// #01
const btn01 = document.querySelector('.btn01')
const div01 = document.querySelector('.div01')
let out01 = ''
const a = [
    [1, 2, 3],
    ['a', 'b', 'c'],
    [4, 5, 6],
    ['d', 'e', 'f'],
    [7, 8, 9],
]

for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        out01 += `${a[i][k]}&nbsp;`
    }
    out01 += `<br>`
}

btn01.onclick = () => div01.innerHTML = out01