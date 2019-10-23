// #01
const pU1 = document.querySelector('.u-1')
const btn1 = document.querySelector('.btn1')

function func_1() {
    pU1.style.width = 200 + 'px'
    pU1.style.height = 100 + 'px'
}

//btn1.onclick = func_1

// вариант через стрелочную функцию
const func_1s = () => {
    pU1.style.width = 200 + 'px'
    pU1.style.height = 100 + 'px'
}

btn1.onclick = func_1s