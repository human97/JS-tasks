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