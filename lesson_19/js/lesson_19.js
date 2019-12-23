// #01
const task1 = document.querySelector('.div-1')
const out1 = document.querySelector('.out-1')

function t1 () {
    out1.textContent = this.textContent
}

task1.addEventListener('click', t1)