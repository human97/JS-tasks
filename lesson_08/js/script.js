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