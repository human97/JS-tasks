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


// #07
const btn7 = document.querySelector('.btn7')
const div7 = document.querySelector('.div7')
let out7 = ''

for (let i = 0; i < a.length; i++) {
    for (let k = 0; k < a[i].length; k++) {
        let num = a[i][k]
        if (typeof (num) === 'number') {
            out7 += `${num}&nbsp;`
        }
    }
}

btn7.onclick = () => div7.innerHTML = out7


// 08
const btn8 = document.querySelector('.btn8')
const div8 = document.querySelector('.div8')
let out8 = ''

for (let i = 0; i < a.length; i++) {
    out8 += `Length array ${i} = ${a[i].length}<br>`
}

btn8.onclick = () => div8.innerHTML = out8


// #09
const btn9 = document.querySelector('.btn9')
const div9 = document.querySelector('.div9')
let out9 = ''

for (let i = a.length - 1; i >= 0; i--) {
    for (let k = a[i].length - 1; k >= 0; k--) {
        out9 += `${a[i][k]}&nbsp;`
    }
}

btn9.onclick = () => div9.innerHTML = out9


// #10
const btn10 = document.querySelector('.btn10')
const div10 = document.querySelector('.div10')
let out10 = ''

for (let i = 0; i < a.length; i++) {
    for (let k = a[i].length - 1; k >= 0; k--) {
        out10 += `${a[i][k]}&nbsp;`
    }
    out10 += `<br>`
}

btn10.onclick = () => div10.innerHTML = `<pre>${out10}</pre>`


// #11
const btn11 = document.querySelector('.btn11')
const div11 = document.querySelector('.div11')
let out11 = ''
let chessBoard11 = []

for (let i = 0; i < 8; i++) {
    chessBoard11[i] = []
    for (let k = 0; k < 8; k++) {
        if ((i % 2 === 0 && k % 2 === 0) || (i % 2 !== 0 && k % 2 !== 0)) {
            chessBoard11[i][k] = 0
        } else {
            chessBoard11[i][k] = 1
        }
        out11 += `${chessBoard11[i][k]}&nbsp;`
    }
    out11 += `<br>`
}

btn11.onclick = () => div11.innerHTML = `<pre>${out11}</pre>`


// #12
const btn12 = document.querySelector('.btn12')
const div12 = document.querySelector('.div12')
let chessBoard12 = []

btn12.onclick = () => {
    if (div12.innerHTML === '') {
        let chessBoard12 = document.createElement('div')
        chessBoard12.classList.add('chess_board12')
        div12.append(chessBoard12)

        for (let i = 0; i < 8; i++) {
            chessBoard12[i] = []
            let divLine12 = document.createElement('div')
            divLine12.classList.add('chess_board12--line')
            chessBoard12.append(divLine12)

            for (let k = 0; k < 8; k++) {

                if ((i % 2 === 0 && k % 2 === 0) || (i % 2 !== 0 && k % 2 !== 0)) {
                    let divCell12White = document.createElement('div')
                    divCell12White.classList.add('chess_board12--line-cell_white', 'chess_board12--line-cell')
                    divLine12.append(divCell12White)

                } else {
                    let divCell12Black = document.createElement('div')
                    divCell12Black.classList.add('chess_board12--line-cell_black', 'chess_board12--line-cell')
                    divLine12.append(divCell12Black)
                }

            }
        }
    } else {
        false
    }
}


// #13
const btn13 = document.querySelector('.btn13')
const div13 = document.querySelector('.div13')
const arr13 = [
    ['b', 4, 9, [100, 99]], 78, 'str', ['k', 7, 5, 8, 45, [567]]
]

btn13.onclick = () => {
    div13.innerHTML = `arr13[0] = ${arr13[0]}<br>arr13[0][1] == ${arr13[0][1]}<hr>arr13[3] = ${arr13[3]}<br>arr13[3][2] == ${arr13[3][2]}`
}


// 14
const btn14 = document.querySelector('.btn14')
const div14 = document.querySelector('.div14')
const arr14 = [
    ['b', 4, 9, [100, 99]], 15, 5, 'str', ['k', 7, 5, 8, 45, [567]]
]

btn14.onclick = () => {
    div14.innerHTML = `arr14[0] = ${arr14[0]}<br>arr14[0][1] == ${arr14[0][1]}<hr>
    arr14[2] = ${arr14[2]}`
}


// 15
const btn15 = document.querySelector('.btn15')
const div15 = document.querySelector('.div15')
const arr15 = [
    ['b', 4, 9, [100, 99], 584], 15, [0, 1, 2, 5, 89], 'str', ['k', 7, 5, 8, 45, [567], ], 'Hi', [4, 5], 1000
]

btn15.onclick = () => {
    div15.innerHTML = `arr15[0] = ${arr15[0]}<br>arr15[0][1] == ${arr15[0][1]}<hr>
    arr15[2] = ${arr15[2]}<br>arr15[2][3] == ${arr15[2][3]}<hr>
    arr15[6] = [${arr15[6]}]`
}


// 16
const btn16 = document.querySelector('.btn16')
const div16 = document.querySelector('.div16')
const arr16 = [
    ['b', 4, 9, [100, 99], 584],
    16,
    [0, 1, 2, 5, 89],
    'str',
    ['k', 7, 5, 8, 45, [567], ],
    'Hi',
    [
        [0, 6],
        6,
        2
    ],
    5,
    1000,
    'Hello!'
]

btn16.onclick = () => {
    div16.innerHTML = `arr16[0] = ${arr16[0]}<br>arr16[0][1] == ${arr16[0][1]}<hr>
    arr16[2] = ${arr16[2]}<br>arr16[2][3] == ${arr16[2][3]}<hr>
    arr16[6] = ${arr16[6]}<br>arr16[6][0][1] = ${arr16[6][0][1]}`
}