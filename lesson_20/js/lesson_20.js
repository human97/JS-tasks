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
const out6 = document.querySelector('.out-6')

function t6(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90) {
        out6.textContent += e.key
        inp6.value += e.key.toLowerCase()
        return false
    }
}

inp6.onkeydown = t6