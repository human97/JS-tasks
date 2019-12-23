// #01
const task1 = document.querySelector('.div-1')
const out1 = document.querySelector('.out-1')

function t1() {
    out1.textContent = this.textContent
}

task1.addEventListener('click', t1)


// #02

function t2(e) {
    console.log(e.altKey)
    out2.textContent = e.altKey
    return e.altKey
}

const div2 = document.querySelector('.div-2')
const out2 = document.querySelector('.out-2')
div2.addEventListener('click', t2)