// #01

let set1 = new Set()
set1.add(0)
set1.add(55)
set1.add('yes')
set1.add('#')

console.log(set1)


// #02
const inp2 = document.querySelector('.inp2')
const btn2 = document.querySelector('.btn2')

btn2.addEventListener('click', () => {
    set1.add(inp2.value)
    console.log(set1)
    inp2.value = ''
})


// #03
const btn3 = document.querySelector('.btn3')
btn3.addEventListener('click', () => {
    let inp2VT = inp2.value.trim()
    if (inp2VT.length === 0) {
        alert('input is empty')
    } else {
        set1.delete(inp2VT)
        console.log(set1)
    }
    inp2.value = ''
})


// #04
const btn4 = document.querySelector('.btn4')
const t4 = () => {
    let inp2V = +inp2.value
    console.log(set1.has(inp2V))
}

btn4.addEventListener('click', t4)


// #05
const btn5 = document.querySelector('.btn5')
const div5 = document.querySelector('.div5')

btn5.addEventListener('click', () => div5.innerHTML = `${set1.size}`)


// #06
let arr6 = [3, 4, 3, 2, 4, 56, 1, 23]

const btn6 = document.querySelector('.btn6')
const div6 = document.querySelector('.div6')

const t6 = () => {
    let set6 = new Set(arr6)
    console.log(set6)
    div6.innerHTML = `${set6.size}`
}

btn6.addEventListener('click', t6)


// #07
const btn7 = document.querySelector('.btn7')
const pass7 = document.getElementById('pass7')
const valid7 = document.querySelector('.valid7')

btn7.addEventListener('click', () => {
    let pass7VL = pass7.value.length
    let set7 = new Set(pass7.value)
    set7.size === pass7VL ? valid7.textContent = 'True' : valid7.textContent = 'characters in your password are repeated!'
})

pass7.onclick = () => {
    valid7.textContent = ''
    pass7.value = ''
}


// #08
const btn8 = document.querySelector('.btn8')
const div8 = document.querySelector('.div8')

let set8 = new Set([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
let set8Even = []
let out8 = ''
const evenElement = set => {
    for (let even of set) {
        if (even % 2 === 0) {
            set8Even.push(even)
        }
    }
    // вариант с join
    out8 = set8Even.join(',&nbsp')

    // вариант через цикл for
    // for (let i = 0; i < set8Even.length; i++) {
    //     out8 += `${set8Even[i]}&nbsp`
    // }

    div8.innerHTML = `${out8}`
}

btn8.addEventListener('click', () => evenElement(set8))


// #09
const btn9 = document.querySelector('.btn9')

let set9 = new Set([0, 1, '0', 55, 92, 'yes', 103, 'Hello', 'world', '!', 99, 'end'])

const reverseSet = (set) => {
    let revSet9 = new Set([...set].reverse())
    console.log([...revSet9])
}

btn9.addEventListener('click', () => reverseSet(set9))


// #10
const btn10 = document.querySelector('.btn10')

const arr10 = [0, 1, 2, 3, 1, 1, 1, 55, 'true', 7, 7, 197, 3, 99, 'end', 'end']
const arr10Set = new Set(arr10)
let arr10R = {}

btn10.addEventListener('click', () => {
    let count = 0
    for (let r of arr10Set) {
        for (let i = 0, length = arr10.length; i < length; i++) {
            if (r === arr10[i]) {
                count++
                arr10R[r] = count
            }
        }
        count = 0
    }
    console.log(arr10R)
})


// #11
const btn11 = document.querySelector('.btn11')
const div11 = document.querySelector('.div11')
const inp11 = document.querySelector('.inp11')

const arrSet = ['1', '2', '3', '4', '5', '6']

btn11.addEventListener('click', () => {
    let inp11V = inp11.value
    if (!arrSet.includes(inp11V)) {
        arrSet.push(inp11V)
    }
    div11.innerHTML = `${arrSet}`
})


// #12
const btn12 = document.querySelector('.btn12')
const div12 = document.querySelector('.div12')

const set12 = new Set([0, 1, 2, 3, 'end'])

const t12 = set => {
    let arr12R = Array.from(set)
    //let arr12R = [...set]
    console.log(arr12R)
    div12.innerHTML = `${arr12R}`
}

btn12.addEventListener('click', () => t12(set12))


// #13-14
const btn13 = document.querySelector('.btn13')
const div13 = document.querySelector('.div13')

const set13 = new Set([1, 2, 3, 4, 0])
const show13 = (set, div, sep) => {
    let out13 = ''
    for (let el of set) out13 += `${el}${sep}`
    div.innerHTML = out13
}
btn13.addEventListener('click', () => {
    show13(set13, div13, '&nbsp')
})


// #15
const btn15 = document.querySelector('.btn15')
const div15 = document.querySelector('.div15')
let set15 = new Set()

const arr15 = [
    [1, 0],
    [1, 0],
    [2, 0]
]

for (let i = 0; i < arr15.length; i++) {
    set15.add(arr15[i])
}

btn15.addEventListener('click', () => div15.textContent = `${set15.size}`)


// #16
const btn16 = document.querySelector('.btn16')
const div16 = document.querySelector('.div16')
let set16 = new Set()

arr16 = [{
        Ivan: 1
    },
    {
        Ivan: 1
    },
    {
        Ivan: 2
    },
    {
        Serg: 0
    }
]

for (let i = 0; i < arr16.length; i++) {
    set16.add(arr16[i])
}

btn16.addEventListener('click', () => div16.textContent = `${set16.size}`)


// #17
const btn17 = document.querySelector('.btn17')
const str17 = 'example'
const set17 = new Set(str17)

btn17.addEventListener('click', () => console.log(set17))


// #18
const btn18 = document.querySelector('.btn18')

const dupLetters18 = str => {
    let strTrimLow = str.trim().toLowerCase() // приводит строку к нижнему регистру и удаляет пробелы до и после
    let result18 = {}
    let set18 = new Set(strTrimLow)
    let count = 0
    let arr18 = strTrimLow.split('')

    for (let key of set18) {
        for (let i = 0; i < arr18.length; i++) {
            if (key === arr18[i]) {
                count++
                result18[key] = count
            }
        }
        count = 0
    }
    console.log(result18)
}

btn18.addEventListener('click', () => {
    dupLetters18('  Google   ')
})


// #19
const btn19 = document.querySelector('.btn19')
const div19 = document.querySelector('.div19')

let set19 = new Set()
set19.add(1)
set19.add(5)
set19.add(99)
set19.add('Hi')
set19.add('str')
set19.add(100)
set19.add('end')

btn19.addEventListener('click', () => {
    let out19 = ''
    let count = 0
    for (let el of set19) {
        if (count % 2 !== 0) {
            out19 += `${el}&nbsp`
            console.log(el)
        }
        count++
    }
    div19.innerHTML = `${out19}`
})


// #20
const btn20 = document.querySelector('.btn20')
const arr20 = [1, 2, 3, 4, 5, 6, 7, 8, 'even', 'odd']

const evenOdd = arr = () => {
    let setEven20 = new Set()
    let setOdd20 = new Set()
    for (let i = 0; i < arr20.length; i++) {
        i % 2 === 0 ? setEven20.add(arr20[i]) : setOdd20.add(arr20[i])
    }
    console.log(setEven20, setOdd20)
}

btn20.addEventListener('click', () => {
    evenOdd(arr20)
})