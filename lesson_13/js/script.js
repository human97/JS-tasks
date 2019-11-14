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


// #02
const div2 = document.querySelector('.div2')
const btn2 = document.querySelector('.btn2')
let out2 = ''

arr2 = {
    3: 'hello',
    'one': 'hi',
    'first name': 'Ivan',
    'last name': 'Ivanov'
}

btn2.onclick = () => {
    if (div2.innerHTML === '') {
        for (let key in arr2) {
            if (arr2[key].length > 4) {
                out2 += `${key} = ${arr2[key]}<br>`
            }
        }
        div2.innerHTML = `${out2}`
    } else {
        false
    }
}