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