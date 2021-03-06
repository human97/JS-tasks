// #01
const inp1 = document.querySelector('.i-1')
const out1 = document.querySelector('.out-1')

function t1(e) {
    let symbol = e.key
    out1.textContent += symbol
    return symbol
}

inp1.onkeypress = t1


// #02
const inp2 = document.querySelector('.i-2')
const out2 = document.querySelector('.out-2')

function t2(e) {
    let keyCode = e.keyCode
    out2.textContent = keyCode
    return keyCode
}

inp2.onkeypress = t2


// #03
const inp3 = document.querySelector('.i-3')
const out3 = document.querySelector('.out-3')

function t3(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        out3.textContent = false
    } else if (e.keyCode >= 97 && e.keyCode <= 122 || e.keyCode >= 65 && e.keyCode <= 90) {
        out3.textContent = true
    } else {
        out3.textContent = 'error'
    }
}

inp3.onkeypress = t3


// #04
const inp4 = document.querySelector('.i-4')
const out4 = document.querySelector('.out-4')

function t4(e) {
    out4.textContent += e.key.toLowerCase()
}

inp4.onkeypress = t4


// #05
const inp5 = document.querySelector('.i-5')
const out5 = document.querySelector('.out-5')

function t5(e) {
    out5.textContent += e.key.toUpperCase()
}

inp5.onkeypress = t5


// #06
const inp6 = document.querySelector('.i-6')

function t6() {
    this.value = this.value.toLowerCase()
}

inp6.oninput = t6


// #07
const inp7 = document.querySelector('.i-7')
const out7 = document.querySelector('.out-7')

const arr7 = [
    'a', 'd', 'e', 'r', 99, true, false
]

function t7() {
    let rand = Math.floor(Math.random() * arr7.length)
    out7.textContent = arr7[rand]
}

inp7.onkeypress = t7


// #08
const inp8 = document.querySelector('.i-8')
const out8 = document.querySelector('.out-8')

const arr8 = {
    i: 1,
    o: 0,
    l: 7,
}


const t8 = e => {
    // if (e.key === 'i' || e.key === 'o' || e.key === 'l') {
    //     out8.textContent += arr8[e.key]
    // } else {
    //     out8.textContent += e.key
    // }

    // e.key === 'i' || e.key === 'o' || e.key === 'l' ? out8.textContent += arr8[e.key] : out8.textContent += e.key // вариант через тернарное выражение


    // вариант через switch case и без использования массива arr8
    switch (e.key) {
        case 'i':
            out8.textContent += 1
            break
        case 'o':
            out8.textContent += 0
            break
        case 'l':
            out8.textContent += 7
            break
        default:
            out8.textContent += e.key
            break
    }
}

inp8.onkeypress = t8


// #09
const inp9 = document.querySelector('.i-9')
const out9 = document.querySelector('.out-9')
let count = 0

const t9 = e => {
    e.keyCode === 40 ? count++ : 0
    out9.textContent = count
}

inp9.onkeydown = t9


// #10
const inp10 = document.querySelector('.i-10')
const img10 = document.querySelector('.img10')

let w10 = img10.clientWidth
let h10 = img10.clientHeight

function t10(e) {
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
        img10.style.width = `${w10++}px`
    }
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
        img10.style.height = `${h10++}px`
    }
}

inp10.onkeyup = t10


// #11
const inp11 = document.querySelector('.i-11')
const keys = document.querySelectorAll('.key')

function keyDown11(e) {
    let keyCode = e.keyCode
    let key = document.querySelector(`.key[data="${keyCode}"]`)
    if (keyCode === 20) {
        key.classList.toggle('pressed')
    } else {
        key.classList.add('pressed')
    }
}

function keyUp11(e) {
    let keyCode = e.keyCode
    let key = document.querySelector(`.key[data="${keyCode}"]`)
    if (keyCode === 20) {
        return false
    } else {
        key.classList.remove('pressed')
    }
}

inp11.onkeydown = keyDown11
inp11.onkeyup = keyUp11





document.addEventListener('keydown', function (e) {
    console.log(e.keyCode, e.key)
})