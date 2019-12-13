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
const divs3 = document.getElementsByClassName('div3') // HTMLCollection
const btn3 = document.querySelector('.btn3')

const t3 = () => {
    for (let i = 0; i < divs3.length; i++) {
        divs3[i].textContent = 3
    }
}

btn3.addEventListener('click', t3)


// #04
const divs4 = document.querySelectorAll('.div3') // NodeList
const btn4 = document.querySelector('.btn4')

const t4 = () => {
    for (let i = 0; i < divs4.length; i++) {
        divs4[i].textContent = 4
    }
}

btn4.addEventListener('click', t4)


// #05
const btn5 = document.querySelector('.btn5')

// в решении #03 уже получены элементы, переменная divs3(используем её)

const div5 = document.createElement('div')

const t5 = () => {
    divs3.push(div5)
}

btn5.addEventListener('click', t5) // TypeError: divs3.push is not a function


// #06
const btn6 = document.querySelector('.btn6')
// в решении #05 элемент div уже создан, перменная div5(используем её)
// в решении #04 уже получены элементы, переменная divs4(используем её)

const t6 = () => {
    divs4.push(div5)
}

btn6.addEventListener('click', t6) // TypeError: divs4.push is not a function


// #07
const div7 = document.querySelector('.div7')
const btn7 = document.querySelector('.btn7')

let arr7 = [
    [1, 2],
    [3, 4],
    [5, 6]
]

const t7 = () => {
    //let out7 = ''
    let arr7Res = []
    for (let i = 0; i < arr7.length; i++) {
        for (let k = 0; k < arr7[i].length; k++) {
            //out7 += `${arr7[i][k]}&nbsp;`
            arr7Res.push(arr7[i][k])
        }
    }
    //div7.innerHTML = out7
    div7.innerHTML = `${arr7Res.join(',&nbsp;')}`
    console.log(arr7Res)
}

btn7.addEventListener('click', t7)


// #08
const div8 = document.querySelector('.div8')
const btn8 = document.querySelector('.btn8')
const arr8 = [
    [1, 2, 3],
    [3, 4, 9],
    [5, 6]
]
const t8 = () => {
    let count = -1 // в этом случае в конце цикла count будет равен макс. индексу влож.массивов, т.к. отсчёт идет от 0
    for (let i = 0; i < arr8.length; i++) {
        count++
    }
    let arr8Res = count
    div8.textContent = arr8Res
}

btn8.addEventListener('click', t8)


// #09
const div9 = document.querySelector('.div9')
const btn9 = document.querySelector('.btn9')
const arr9 = [4, 6, 9, "hello"]

const t9 = () => {
    let arr9Res = ''
    let newArr9 = {}
    for (let i = 0; i < arr9.length; i++) {
        newArr9[arr9[i]] = arr9[i]
        arr9Res += `${arr9[i]}&nbsp;:&nbsp;${arr9[i]}<br>`
    }
    console.log(newArr9)
    div9.innerHTML = `${arr9Res}`
}

btn9.addEventListener('click', t9)