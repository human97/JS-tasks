// #01
const div1 = document.querySelector('.div1')
const btn1 = document.querySelector('.btn1')
let out1 = ''

arr1 = {
    3: 'hello',
    'one': 'hi'
}

btn1.onclick = () => {
    if (div1.innerHTML === '') {
        for (let key in arr1) {
            out1 += `${key} = ${arr1[key]}<br>`
        }

        div1.innerHTML = `${out1}`
    } else {
        false
    }
}