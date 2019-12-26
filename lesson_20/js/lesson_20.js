// #01
const inp1 = document.querySelector('.i-1')
const out1 = document.querySelector('.out-1')

function t1(e) {
    let symbol = e.key
    out1.textContent += symbol
    return symbol
}

inp1.onkeypress = t1