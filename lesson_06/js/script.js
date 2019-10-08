// #01
let div1 = document.querySelector(".div1");
let out1 = "";
for (let i = 0; i < 3; i++) {
  out1 += " ";
  for (let k = 0; k < 3; k++) {
    out1 += "*";
  }
}

div1.textContent = out1;

// #02
let div2 = document.querySelector(".div2");
let out2 = "";
for (let i = 0; i < 3; i++) {
  for (let k = 0; k < 5; k++) {
    out2 += "*";
  }
  out2 += "<br>";
}

div2.innerHTML = out2;

// #03
let div3 = document.querySelector(".div3");
let out3 = "";
for (let i = 0; i < 3; i++) {
  for (let k = 1; k <= 6; k++) {
    out3 += k % 2;
  }
  out3 += "<br>";
}

div3.innerHTML = out3;

// #04
let div4 = document.querySelector(".div4");
let out4 = "";
for (let i = 0; i < 3; i++) {
  for (let k = 1; k <= 6; k++) {
    out4 += k % 3 === 0 ? "x" : k % 2;
  }
  out4 += "<br>";
}

div4.innerHTML = out4;

// #05
let div5 = document.querySelector(".div5");
let out5 = "";
for (let i = 1; i < 4; i++) {
  for (let k = 0; k < i; k++) {
    out5 += "*";
  }
  out5 += "<br>";
}

div5.innerHTML = out5;

// #06
let div6 = document.querySelector(".div6");
let out6 = "";
for (let i = 5; i > 0; i--) {
  for (let k = 0; k < i; k++) {
    out6 += "*";
  }
  out6 += "<br>";
}

div6.innerHTML = out6;

// #07
let div7 = document.querySelector(".div7");
let out7 = "";
for (let i = 3; i > 0; i--) {
  for (let k = 0; k < i; k++) {
    out7 += "&nbsp";
  }
  for (let z = 0; z < 5; z++) {
    out7 += "*";
  }
  out7 += "<br>";
}

div7.innerHTML = out7;


// #08
let div8 = document.querySelector(".div8");
let out8 = "";
for (let i = 1; i <= 5; i++) {
  for (let k = 0; k < (i <= 3 ? i : 6 - i); k++) {
    out8 += "*";
  }
  out8 += "<br>";
}

div8.innerHTML = out8;

// #09
let div9 = document.querySelector(".div9")
let out9 = ""
for (let i = 1; i <= 5; i++) {
  for (let k = 1; k <= 6; k++) {
    if (i === 1 || i === 5) {
      out9 += '*'
    } else {
      if (k === 1 || k === 6) {
        out9 += '*'
      } else {
        out9 += '&nbsp'
      }
    }
  }
  out9 += '<br>'
}

div9.innerHTML = `<code>${out9}</code>`

// #10
let inp10 = document.querySelector(".inp10")
const div10 = document.querySelector(".div10")
let inp10Val
let out10 = ""
inp10.oninput = function () {
  inp10Val = inp10.value
  for (let i = 1; i <= 5; i++) {
    for (let k = 1; k <= 6; k++) {
      if (i === 1 || i === 5) {
        out10 += inp10Val
      } else {
        if (k === 1 || k === 6) {
          out10 += inp10Val
        } else {
          out10 += '&nbsp'
        }
      }

    }
    out10 += '<br>'
  }

  div10.innerHTML = `<code>${out10}</code>`
}

// #11
const div11 = document.querySelector(".div11")
const num6 = 6
const num7 = 7
let out11 = ""
for (let i = 1; i <= 9; i++) {
  for (let k = 1; k <= 9; k++) {
    out11 += `<p>${num6} * ${k} = ${num6*k}</p>`
  }
  out11 += `<hr>`
  break
}

for (let i = 1; i <= 9; i++) {
  for (let k = 1; k <= 9; k++) {
    out11 += `<p>${num7} * ${k} = ${num7*k}</p>`
  }

  break
}
div11.innerHTML += `<div>${out11}</div>`

// #12
const div12 = document.querySelector('.div12')
let out12 = ''
for (let i = 1; i <= 5; i++) {
  for (k = 1; k <= i; k++) {
    out12 += `${k} `
  }
  out12 += `<br>`
}

div12.innerHTML = out12

// #13
const div13 = document.querySelector('.div13')
let out13 = ''
for (let i = 0; i < 50; i += 10) {
  for (let k = 1; k <= 10; k++) {
    out13 += i < 10 && k < 10 ? `0${k}&nbsp` : `${i+k}&nbsp`
  }
  out13 += `<br>`
}

div13.innerHTML = out13

// #14
const div14 = document.querySelector('.div14')
let out14 = ''
for (let i = 5; i > 0; i--) {
  for (let k = i; k > 0; k--) {
    out14 += `${k}&nbsp`
  }
  out14 += `<br>`
}

div14.innerHTML = out14

// #15
const div15 = document.querySelector('.div15')
let out15 = ''
for (let i = 1; i <= 5; i++) {
  for (let k = 5; k > 0; k--) {
    out15 += k <= i ? `${k}&nbsp` : `X&nbsp`
  }
  out15 += `<br>`
}

div15.innerHTML = `<pre>${out15}</pre>`

// #16
const div16 = document.querySelector('.div16')
let out16 = ''
for (let i = 1; i <= 5; i++) {
  for (let k = 1; k <= i; k++) {
    out16 += `${i}&nbsp`
  }
  out16 += `<br>`
}

div16.innerHTML = `<pre>${out16}</pre>`

// #17
const div17 = document.querySelector('.div17')
let out17 = ''
for (let i = 5; i > 0; i--) {
  for (let k = 5; k >= i; k--) {
    out17 += `${i}&nbsp`
  }
  out17 += `<br>`
}

div17.innerHTML = `<pre>${out17}</pre>`

// #18
const div18 = document.querySelector('.div18')
let out18 = ''
for (let i = 5; i > 0; i--) {
  for (let k = 5; k >= i; k--) {
    if (i % 2 === 0) {
      out18 += `X&nbsp`
    } else {
      out18 += `${i}&nbsp`
    }
    //out18 += i % 2 === 0 ? `X&nbsp` : `${i}&nbsp`  // это сокращенный вариант без if else, через тернарный оператор
  }
  out18 += `<br>`
}

div18.innerHTML = `<pre>${out18}</pre>`

// #19
const div19 = document.querySelector('.div19')
let out19 = ''
for (let i = 1; i <= 3; i++) {
  for (let k = 1; k <= 9; k++) {
    if (i === 1 && (k < 3 || k > 7)) {
      out19 += `&nbsp`
    } else if (i === 2 && (k < 2 || k > 8)) {
      out19 += `&nbsp`
    } else {
      out19 += `*`
    }
  }
  out19 += `<br>`
}

div19.innerHTML = `<pre>${out19}</pre>`

// #20
const div20 = document.querySelector('.div20')
let out20 = ''
for (let i = 1; i <= 5; i++) {
  for (let k = 1; k <= 6; k++) {
    if ((i === 1 || i === 5) && (k < 3 || k > 4)) {
      out20 += `&nbsp`
    } else if ((i === 2 || i === 4) && (k < 2 || k > 5)) {
      out20 += `&nbsp`
    } else {
      out20 += `*`
    }
  }
  out20 += `<br>`
}

div20.innerHTML = `<pre>${out20}</pre>`