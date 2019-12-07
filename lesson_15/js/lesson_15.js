// #01

let set1 = new Set()
set1.add(0)
set1.add(55)
set1.add('yes')
set1.add('#')

console.log(set1)


// #02
const inp2 = document.querySelector('.inp2')
const btn2 = document.querySelector('.btn2')

btn2.addEventListener('click', () => {
    set1.add(inp2.value)
    console.log(set1)
    inp2.value = ''
})


// #03
const btn3 = document.querySelector('.btn3')
btn3.addEventListener('click', () => {
    let inp2VT = inp2.value.trim()
    if (inp2VT.length === 0) {
        alert('input is empty')
    } else {
        set1.delete(inp2VT)
        console.log(set1)
    }
    inp2.value = ''
})


// #04
const btn4 = document.querySelector('.btn4')
const t4 = () => {
    let inp2V = +inp2.value
    console.log(set1.has(inp2V))
}

btn4.addEventListener('click', t4)


// #05
const btn5 = document.querySelector('.btn5')
const div5 = document.querySelector('.div5')

btn5.addEventListener('click', () => div5.innerHTML = `${set1.size}`)


// #06
let arr6 = [3, 4, 3, 2, 4, 56, 1, 23]

const btn6 = document.querySelector('.btn6')
const div6 = document.querySelector('.div6')

const t6 = () => {
    let set6 = new Set(arr6)
    console.log(set6)
    div6.innerHTML = `${set6.size}`
}

btn6.addEventListener('click', t6)


// #07
const btn7 = document.querySelector('.btn7')
const pass7 = document.getElementById('pass7')
const valid7 = document.querySelector('.valid7')

btn7.addEventListener('click', () => {
    let pass7VL = pass7.value.length
    let set7 = new Set(pass7.value)
    set7.size === pass7VL ? valid7.textContent = 'True' : valid7.textContent = 'characters in your password are repeated!'
})

pass7.onclick = () => {
    valid7.textContent = ''
    pass7.value = ''
}


// #08
const btn8 = document.querySelector('.btn8')
const div8 = document.querySelector('.div8')

let set8 = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
let set8Even = []
let out8 = ''
const evenElement = set => {
    for (let even of set) {
        if (even % 2 === 0) {
            set8Even.push(even)
        }
    }
    // вариант с join
    out8 = set8Even.join(',&nbsp')

    // вариант через цикл for
    // for (let i = 0; i < set8Even.length; i++) {
    //     out8 += `${set8Even[i]}&nbsp`
    // }

    div8.innerHTML = `${out8}`
}

btn8.addEventListener('click', () => evenElement(set8))