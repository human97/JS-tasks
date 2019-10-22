// #01
function func_1() {
    let p = 0
    let out1 = ''

    while (p <= 100) {
        out1 += `${p} `
        p++
    }
    return out1
}

console.log(func_1())


// #02
function func_2(num1, num2) {
    let out2 = ''
    let p1 = num1
    while (p1 <= num2) {
        out2 += `${p1} `
        p1++
    }
    return out2
}

console.log(func_2(5, 14))


// #03
function func_3(a, b) {
    let out3 = ''
    let max = a > b ? a : b
    let min = a < b ? a : b
    let p = max
    while (p >= min) {
        out3 += `${p} `
        p--
    }
    return out3
}

console.log(func_3(8, 19))


// #04
function func_4(a, b, c) {
    let out4 = ''
    let max = a > b ? a : b
    let min = a < b ? a : b
    let p = max
    while (p >= min) {
        out4 += `${p} `
        p -= c
    }
    return out4
}

console.log(func_4(8, 19, 2))


// #05
function func_5() {
    let sum5 = 0
    let p = 0
    while (p <= 20) {
        sum5 += p
        p++
    }
    return sum5
}

console.log(func_5())


// #06
function func_6(a, b) {
    let out6 = 0
    if (a > b) {
        return false
    } else if (b > a) {
        let p = a
        while (p <= b) {
            out6 += p
            p++
        }
        return out6
    } else {
        return 'a = b'
    }
}

console.log(func_6(15, 16))


// #07
function func_7(a, b) {
    let out7 = 0
    if (a > b || a === 0) {
        return false
    } else if (b > a) {
        let p = a
        let out7 = a
        while (p < b) {
            p++
            out7 *= p
        }
        return out7
    } else {
        return 'a = b'
    }
}

console.log(func_7(10, 12))


// #08
function func_8() {
    let out8 = 333
    let day = 0
    while (out8 <= 1000000) {
        day++
        out8 *= 2
    }
    return day
}

console.log(func_8())


// #09
function func_9(a, b) {
    let out9 = ''
    if (a >= b) {
        return false
    }
    let p = a
    while (p <= b) {
        out9 += p % 2 === 0 ? `0 ` : `${p} `
        p++
    }
    return out9
}

console.log(func_9(1, 9))


// #10
function func_10() {
    let p = 1
    let out10 = ''
    while (p <= 6) {
        //out10 += p % 2 === 0 ? `*\n` : `**\n` //вариант для консоли
        out10 += p % 2 === 0 ? `*<br>` : `**<br>`
        p++
    }
    return out10
}

//console.log(func_10())
document.querySelector('.div10').innerHTML = `<pre>${func_10()}</pre>`


// #11
function func_11() {
    let p = 10
    let k = 1
    let out11 = ''
    while (p > 0) {
        out11 += `${p}&nbsp;${k}&nbsp;`
        k++
        p--
    }
    return out11
}

document.querySelector('.div11').innerHTML = func_11()

// #12
let a = 0
do
    console.log('do while work')
while (a < 0)

let b = 0
while (b < 0) {
    console.log('while work')
}


// #13
function func_13() {
    let out13 = ''
    let p = 100
    do {
        out13 += `${p} `
        p--
    }
    while (p >= 0)
    return out13
}

console.log(func_13())


// #14
function func_14() {
    let p = 5
    let d = 1
    do {
        d++
        p += p * .3
    }
    while (p <= 132)
    return d
}

console.log(func_14())
document.querySelector('.div14').textContent = func_14()


// #15
function func_15() {
    let out15 = 0
    let l = 1.1
    let d = 1
    do {
        out15 += l
        l += .3
        d++
    }
    while (out15 <= 568)
    return d
}

console.log(func_15())
document.querySelector('.div15').textContent = func_15()


// #16
const p16 = document.querySelectorAll('p[class=task16]') //массив из p.task16
let p16V = p16.length // длинна массива p.task16

function func_16() {
    do {
        if (p16V % 2 === 0) {
            return p16V
        } else {
            return false
        }
    } while (p16V > 0)
}

console.log(func_16())
document.querySelector('.div16').innerHTML = `Количество параграфов = ${func_16()}`


// #17

function func_17() {
    let k = 0
    do {
        p16[k].textContent = k + 1
        k++
    }
    while (k < p16.length)
}

func_17()


// #18
const p18 = document.querySelectorAll('p[class=task18]') //массив из p.task18
let p18V = p18.length // длинна массива p.task18

function func_18() {
    let k = 0
    do {
        p18[k].textContent = p18V - k
        k++
    }
    while (k < p18.length)
}

func_18()


// #19
function func_19() {
    let out19 = ''
    let p = 1
    do {
        out19 += p % 2 === 0 ? ` * ` : `${p}`
        p++

        // другой вариант
        /*
        out19 += `${p} * `
        p += 2 
        */
    } while (p <= 20)
    return out19
}

console.log(func_19())


// #20
const div20 = document.querySelector('.div20')

function func_20() {
    let out20 = ''
    let i = 0
    do {
        let k = 0
        i++
        do {
            k++
            out20 += i === k ? `1 ` : `* `
        }
        while (k < 4)
        out20 += `<br>`
    }
    while (i < 4)
    return out20
}

console.log(func_20())
div20.innerHTML = `<pre>${func_20()}</pre>`