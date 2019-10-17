// #01
let p = 0
let out1 = ''

function func_1() {

    while (p <= 100) {
        out1 += `${p} `
        p++
    }
    return out1
}

console.log(func_1())

// #02
let out2 = ''

function func_2(num1, num2) {
    let p1 = num1
    while (p1 <= num2) {
        out2 += `${p1} `
        p1++
    }
    return out2
}

console.log(func_2(5, 14))

// #03
let out3 = ''

function func_3(a, b) {
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
let out4 = ''

function func_4(a, b, c) {
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
let sum5 = 0

function func_5() {
    let p = 0
    while (p <= 20) {
        sum5 += p
        p++
    }
    return sum5
}

console.log(func_5())

// #06
let out6 = 0

function func_6(a, b) {
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
let out7 = 0

function func_7(a, b) {
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
let out8 = 333

function func_8() {
    let day = 0
    while (out8 <= 1000000) {
        day++
        out8 *= 2
    }
    return day
}

console.log(func_8())

// #09
let out9 = ''

function func_9(a, b) {
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
let out10 = ''

function func_10() {
    let p = 1
    while (p <= 6) {
        out10 += p % 2 === 0 ? `*<br>` : `**<br>`
        p++
    }
    return out10
}

document.querySelector('.div10').innerHTML = `<pre>${func_10()}</pre>`