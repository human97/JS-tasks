// #01
let arr1 = []
const inp1 = document.querySelector('.inp1')
const btn1 = document.querySelector('.btn1')
const div1 = document.querySelector('.div1')
let inp1Val
btn1.onclick = () => {
    inp1Val = inp1.value
    if (inp1Val.trim() === '') {
        alert('Input data')
        inp1.value = ''
    } else {
        arr1.push(inp1Val.trim())
        div1.textContent = arr1
        inp1.value = ''
    }
}


// #02
const btn2 = document.querySelector('.btn2')
btn2.onclick = () => {
    arr1.pop()
    div1.textContent = arr1
}


// #03
const btn3 = document.querySelector('.btn3')
btn3.onclick = () => {
    arr1.shift()
    div1.textContent = arr1
    inp1.value = ''
}


// #04
const btn4 = document.querySelector('.btn4')
btn4.onclick = () => {
    inp1Val = inp1.value
    if (inp1Val.trim() === '') {
        alert('Input data')
        inp1.value = ''
    } else {
        arr1.unshift(inp1Val.trim())
        div1.textContent = arr1
        inp1.value = ''
    }
}


// #05
let arr5 = [3, 14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello']

const inp5_1 = document.querySelector('.inp5-1')
const inp5_2 = document.querySelector('.inp5-2')
const btn5 = document.querySelector('.btn5')
const div5 = document.querySelector('.div5')
let inp5_1Val
let inp5_2Val
let arr5L // длинна массива - 1

btn5.onclick = () => {
    inp5_1Val = inp5_1.value
    inp5_2Val = inp5_2.value
    arr5L = arr5.length - 1
    if (inp5_1Val.trim() === '' || inp5_2Val.trim() === '') {
        alert('error')
    } else if (inp5_1Val.trim() < 0 || inp5_1Val.trim() > arr5L || inp5_2Val.trim() <= 0) {
        alert('error')
    } else {
        arr5.splice(inp5_1Val, inp5_2Val)
        div5.textContent = arr5
    }
}

// упрощенный вариант без валидации
/*
btn5.onclick = () => {
    inp5_1Val = inp5_1.value
    inp5_2Val = inp5_2.value
    arr5.splice(inp5_1Val, inp5_2Val)
    div5.textContent = arr5
}
*/


// #06
const btn6 = document.querySelector('.btn6')
const inp6 = document.querySelector('.inp6')
const div6 = document.querySelector('.div6')

let inp6Val
let arr6 = []

const funcPush = () => {
    inp6Val = inp6.value
    if (inp6Val.trim() !== '') {
        arr6L = arr6.length
        arr6[arr6L] = inp6Val.trim()
        div6.textContent = arr6
    } else {
        alert('error')
    }
}

btn6.onclick = funcPush


// #07
const btn7 = document.querySelector('.btn7')
const div7 = document.querySelector('.div7')
let arr7 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const funcPop = () => {
    if (arr7.length > 0) {
        arr7.length -= 1
        div7.textContent = arr7
    } else {
        alert('error')
    }
}

btn7.onclick = funcPop


// #08
let arr8 = [0, 100, 2, 3, 4, 5, 6, 7, 8, 9, 1000]
const btn8 = document.querySelector('.btn8')
const div8 = document.querySelector('.div8')

const funcSift = () => {
    let newArr8 = []
    if (arr8.length > 0) {
        for (let i = 1; i < arr8.length; i++) {
            newArr8[i - 1] = arr8[i]
            console.log(newArr8)
        }
        arr8 = newArr8
        div8.innerHTML = arr8
    } else {
        alert('error')
    }
}

btn8.onclick = funcSift


// #09
let arr9 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1000]
const inp9 = document.querySelector('.inp9')
const div9 = document.querySelector('.div9')
const btn9 = document.querySelector('.btn9')
let inp9Val
let newArr9

const funcUnShift = () => {
    inp9Val = inp9.value
    newArr9 = [inp9Val]

    for (let i = 0; i < arr9.length; i++) {
        newArr9[i + 1] = arr9[i]
    }

    arr9 = newArr9
    div9.textContent = arr9
}

btn9.onclick = funcUnShift


// #10
let arr10 = [2, 4, 6, 8, 10, 'hello']
const div10 = document.querySelector('.div10')
const btn10 = document.querySelector('.btn10')

btn10.onclick = () => {
    div10.textContent = arr10.reverse()
}


// #11
let arr11 = [0, 2, 3, 7, 8, 5, 11]
const inp11 = document.querySelector('.inp11')
const div11 = document.querySelector('.div11')
const btn11 = document.querySelector('.btn11')
let inp11Val

btn11.onclick = () => {
    inp11Val = +inp11.value.trim()
    let ind11 = arr11.indexOf(inp11Val)
    div11.textContent = ind11
}


// #12
let arr12 = [0, 2, 3, 7, 8, 5, 11]
const inp12 = document.querySelector('.inp12')
const div12 = document.querySelector('.div12')
const btn12 = document.querySelector('.btn12')
let inp12Val

const funcIndexOf = () => {
    inp12Val = +inp12.value
    for (let i = 0; i < arr12.length; i++)
        if (arr12[i] === inp12Val) {
            div12.textContent = i
            break
        } else {
            div12.textContent = -1
        }
}

btn12.onclick = funcIndexOf


// #13
let arr13 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const div13 = document.querySelector('.div13')
const btn13 = document.querySelector('.btn13')

const funcReverse = () => {
    let arr13L = arr13.length - 1
    let newArr13 = []
    for (let i = 0; i < arr13.length; i++) {
        newArr13[arr13L - i] = arr13[i]
    }
    div13.textContent = newArr13
}

btn13.onclick = funcReverse


// #14
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min; //Максимум и минимум включаются
}

const inp14 = document.querySelector('.inp14')
const div14 = document.querySelector('.div14')
const btn14 = document.querySelector('.btn14')
let inp14Val

function newArr14() {
    let arr14 = []
    arr14.length = +inp14.value
    for (let i = 0; i < arr14.length; i++) {
        arr14[i] = getRandomIntInclusive(0, 100)
    }
    return div14.textContent = arr14
}

btn14.onclick = newArr14


// #15
let arr15 = [1, 2, 3, 4, 5, 6, 7, 88, 77]
const div15 = document.querySelector('.div15')
const btn15 = document.querySelector('.btn15')

btn15.onclick = () => {
    let newArr15 = []
    for (let i = 0; i < arr15.length; i++) {
        arr15[i] % 2 === 0 ? newArr15.push(arr15[i]) : 0
    }
    div15.textContent = newArr15
}


// #16
let arr16_1 = [3, 5, 7]
let arr16_2 = [2, 4, 6]
const div16 = document.querySelector('.div16')
const btn16 = document.querySelector('.btn16')

btn16.onclick = () => {
    div16.textContent = arr16_1.concat(arr16_2)
}


// #17
let arr17_1 = [33, 55, 77]
let arr17_2 = [2, 4, 6]
const div17 = document.querySelector('.div17')
const btn17 = document.querySelector('.btn17')

btn17.onclick = () => {
    for (let i = 0; i < arr17_2.length; i++) {
        arr17_1 += `,${arr17_2[i]}`
    }
    div17.textContent = arr17_1
}


// #18
let arr18 = [3, 5, 7, 11, 12, 13, 14]
const inp18 = document.querySelector('.inp18')
const div18 = document.querySelector('.div18')
const btn18 = document.querySelector('.btn18')

btn18.onclick = () => div18.textContent = arr18.includes(+inp18.value)


// #19
let arr19 = [3, 5, 7, 11, 12, 13, 14]
const inp19 = document.querySelector('.inp19')
const div19 = document.querySelector('.div19')
const btn19 = document.querySelector('.btn19')
let inp19V

const funcIncludes = () => {
    inp19V = +inp19.value
    for (let i = 0; i < arr19.length; i++) {
        if (inp19V === arr19[i]) {
            div19.textContent = 'true'
            break
        } else {
            div19.textContent = 'false'
        }
    }
}

btn19.onclick = funcIncludes


// #20
let arr20 = [1, 2, 3, 4, 5, 6, 7, 8]
const div20 = document.querySelector('.div20')
const btn20 = document.querySelector('.btn20')

btn20.onclick = () => {
    if (div20.textContent === arr20.join()) {
        return false
    } else {
        div20.textContent = arr20.join()
        console.log(arr20)
        console.log(typeof (arr20))
        console.log(arr20.join())
        console.log(typeof (arr20.join()))
    }
}