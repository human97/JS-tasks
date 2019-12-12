// #01
const div1 = document.querySelector('.div1')
const btn1 = document.querySelector('.btn1')

const arr1 = [5, 7, 9, 11, 13, 15]

const t1 = () => {
    let arr1_res = ''
    for (let i = 0; i < arr1.length; i++) {
        arr1_res += `${arr1[i]}&nbsp;`
    }
    div1.innerHTML = `${arr1_res}`
}

btn1.addEventListener('click', t1)


// #02
const div2 = document.querySelector('.div2')
const btn2 = document.querySelector('.btn2')

const t2 = () => {
    let arr2_res = ''
    for (let i = 0; i < arr1.length; i++) {
        arr2_res += `${i} - ${arr1[i]}<br>`
    }
    div2.innerHTML = `${arr2_res}`
}

btn2.addEventListener('click', t2)


// #03
const divS3 = document.getElementsByClassName('div3')
const btn3 = document.querySelector('.btn3')

const t3 = () => {
    for (let i = 0; i < divS3.length; i++) {
        divS3[i].textContent = 3
    }
}

btn3.addEventListener('click', t3)


// #04
const divS4 = document.querySelectorAll('.div3')
const btn4 = document.querySelector('.btn4')

const t4 = () => {
    for (let i = 0; i < divS4.length; i++) {
        divS4[i].textContent = 4
    }
}

btn4.addEventListener('click', t4)