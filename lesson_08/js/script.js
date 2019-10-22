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
function func_16() {
    let p16V = document.querySelectorAll('p[class=task16]').length

    do {
        if (p16V % 2 === 0) {
            return p16V
        } else {
            return false
        }
    } while (p16V > 0)
}

console.log(func_16())
document.querySelector('.div16').textContent = func_16()


// #17
function func_17() {
    const p16 = document.querySelectorAll('p[class=task16]')
    do {
        let i
        for (i = 0; i <= p16.length; i++) {
            p16[i].textContent = i + 1
        }
    } while (p16.length > 0)
}

func_17()