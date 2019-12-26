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
    } else if (e.keyCode >= 97 && e.keyCode <= 122) {
        out3.textContent = true
    } else {
        out3.textContent = 'error'
    }
}

inp3.onkeypress = t3