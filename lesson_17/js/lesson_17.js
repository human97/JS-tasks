// #01
const btn1 = document.querySelector('.btn1')
const arr1 = [4, 5, 6, 7, 12, 34, 56, 78, 90, 11]
const t1 = () => {
    let newArr1 = arr1.map(item => item * 2)
    console.log(newArr1)
}

btn1.addEventListener('click', t1)


// #02
const btn2 = document.querySelector('.btn2')
const arr2 = [2, 3, 4, 5, 10, 11, 12]
const t2 = () => {
    const newArr2 = arr2.map(item => item ** 2)
    console.log(newArr2)
}

btn2.addEventListener('click', t2)


// #03
const btn3 = document.querySelector('.btn3')
const arr3 = [4, "3", 6, 7, "12", 34, "56", 78, 90, 11]
const t3 = () => {
    const newArr3 = arr3.map(item => Number(item))
    console.log(newArr3)
}

btn3.addEventListener('click', t3)