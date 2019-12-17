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
    let count = 0
    for (let i = 0; i < arr8.length; i++) {
        count < i ? count = i : count
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


// #10
const div10 = document.querySelector('.div10')
const btn10 = document.querySelector('.btn10')

const arr10 = [5, 7, 9, 11, 13, 15]
btn10.addEventListener('click', () => {
    let out10 = ''
    for (let key in arr10) {
        out10 += `${arr10[key]}&nbsp;`
    }
    div10.innerHTML = out10
})


// #11
const div11 = document.querySelector('.div11')
const btn11 = document.querySelector('.btn11')
const sel11 = document.querySelector('.sel11')

const arr11 = [5, 7, 9, 11, 13, 15]

btn11.addEventListener('click', () => {
    let out11 = ''
    let sel11Val = sel11.value
    console.log(sel11Val)
    for (let key in arr11) {
        out11 += `${key}&nbsp;${sel11Val}&nbsp;${arr11[key]}<br>`
    }
    div11.innerHTML = out11
})


// #12
const divs12 = document.getElementsByClassName('div12')
const btn12 = document.querySelector('.btn12')

const t12 = () => {
    for (let key in divs12) {
        divs12[key].textContent = 'task-12'
    }
}

btn12.addEventListener('click', t12)


// #13
const divs13 = document.querySelectorAll('.div12')
const btn13 = document.querySelector('.btn13')

const t13 = () => {
    for (let key in divs13) {
        divs13[key].textContent = 'task-13'
    }
}

btn13.addEventListener('click', t13)


// #14
const btn14 = document.querySelector('.btn14')
const arr14 = [
    [1, 2],
    [3, 4],
    [5, 6]
]
let newArr14 = []

const t14 = () => {
    for (let key in arr14) {
        for (let a in arr14[key]) {
            newArr14.push(arr14[key][a])
        }
    }
    console.log(newArr14)
}

btn14.addEventListener('click', t14)


// #15
const div15 = document.querySelector('.div15')
const btn15 = document.querySelector('.btn15')
const arr15 = [
    [1, 2, 3],
    [3, 4, 9],
    [5, 6]
]

const t15 = () => {
    let count = 0
    for (let key in arr15) {
        count < key ? count = key : count
    }
    div15.textContent = count
}

btn15.addEventListener('click', t15)


// #16
const btn16 = document.querySelector('.btn16')
const arr16 = [4, 6, 9, "hello"]

const t16 = () => {
    let newArr16 = {}
    for (let key in arr16) {
        newArr16[arr16[key]] = arr16[key]
    }
    console.log(newArr16)
}

btn16.addEventListener('click', t16)


// #17
const div17 = document.querySelector('.div17')
const btn17 = document.querySelector('.btn17')
const arr17 = [5, 7, 9, 11, 13, 15]

const t17 = () => {
    let out17 = ''
    for (let key of arr17) {
        out17 += `${key}&nbsp;`
    }
    div17.innerHTML = out17
}

btn17.addEventListener('click', t17)


// #18
const div18 = document.querySelector('.div18')
const btn18 = document.querySelector('.btn18')
const sel18 = document.querySelector('.sel18')

const arr18 = [5, 7, 9, 11, 13, 15]

const t18 = () => {
    let out18 = ''
    let index = 0
    for (let key of arr18) {
        out18 += `${index}&nbsp;${sel18.value}&nbsp;${key}<br>`
        index++
    }
    div18.innerHTML = out18
}

btn18.addEventListener('click', t18)


// #19
const divs19 = document.getElementsByClassName('div19')
const btn19 = document.querySelector('.btn19')

btn19.addEventListener('click', () => {
    for (let item of divs19) {
        item.textContent = 'task-19'
    }
})


// #20
const divs20 = document.querySelectorAll('.div19')
const btn20 = document.querySelector('.btn20')

btn20.addEventListener('click', () => {
    for (let item of divs20) {
        item.textContent = 'task-20'
    }
})


// #21
const btn21 = document.querySelector('.btn21')
const arr21 = [
    [1, 2],
    [3, 4],
    [5, 6]
]

const t21 = () => {
    const newArr21 = []
    for (let arr of arr21) {
        for (let item of arr) {
            newArr21.push(item)
        }
    }
    console.log(newArr21)
}

btn21.addEventListener('click', t21)