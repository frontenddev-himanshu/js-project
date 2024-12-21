// define tab-nav
let tab = document.querySelector(".tab");
let link = document.querySelector(".links");
let click = 0;


tab.addEventListener("click", function () {

    if (click == 0) {
        link.style.opacity = 1;
        link.style.visibility = "visible";
        click = 1;
    }

    else {
        link.style.opacity = 0;
        link.style.visibility = "hidden";
        click = 0;
    }

});



// btn to change color

let bdr = document.querySelector(".bdr");
let signUp = document.getElementById("sign-up");
let u = document.querySelector(".u");
let lbl = document.getElementById("lbl");
let cName = document.getElementById("c-name")


let btn1 = document.getElementById("color-1");
let btn2 = document.getElementById("color-2");
let btn3 = document.getElementById("color-3");
let btn4 = document.getElementById("color-4");
let btn5 = document.getElementById("color-5");
let btn6 = document.getElementById("color-6");
let btn7 = document.getElementById("color-7");
let btn8 = document.getElementById("color-8");
let btn9 = document.getElementById("color-9");
let btn10 = document.getElementById("color-10");


// btn2
btn2.addEventListener("click", function () {

    cName.style.color = "#837fcb"

    bdr.style.backgroundColor = "#837fcb"

    signUp.style.outlineColor = "#837fcb"

    signUp.style.color = "#837fcb"

    signUp.backgroundColor = "#837fcb"

    u.style.backgroundColor = "#837fcb"

    lbl.style.backgroundColor = "#837fcb"

    tap.style.color = "#837fcb"

    tap.style.outlineColor = "#837fcb"

})

// btn3
btn3.addEventListener("click", function () {

    cName.style.color = "#00d1b2"

    bdr.style.backgroundColor = "#00d1b2"

    signUp.style.outlineColor = "#00d1b2"

    signUp.style.color = "#00d1b2"

    signUp.backgroundColor = "#00d1b2"

    u.style.backgroundColor = "#00d1b2"

    lbl.style.backgroundColor = "#00d1b2"

    tap.style.color = "#00d1b2"

    tap.style.outlineColor = "#00d1b2"

})

// btn4
btn4.addEventListener("click", function () {

    cName.style.color = "#00b289"

    bdr.style.backgroundColor = "#00b289"

    signUp.style.outlineColor = "#00b289"

    signUp.style.color = "#00b289"

    signUp.backgroundColor = "#00b289"

    u.style.backgroundColor = "#00b289"

    lbl.style.backgroundColor = "#00b289"

    tap.style.color = "#00b289"

    tap.style.outlineColor = "#00b289"

})

// btn5
btn5.addEventListener("click", function () {

    cName.style.color = "#039be5"

    bdr.style.backgroundColor = "#039be5"

    signUp.style.outlineColor = "#039be5"

    signUp.style.color = "#039be5"

    signUp.backgroundColor = "#039be5"

    u.style.backgroundColor = "#039be5"

    lbl.style.backgroundColor = "#039be5"

    tap.style.color = "#039be5"

    tap.style.outlineColor = "#039be5"

})

// btn6
btn6.addEventListener("click", function () {

    cName.style.color = "#0f7cff"

    bdr.style.backgroundColor = "#0f7cff"

    signUp.style.outlineColor = "#0f7cff"

    signUp.style.color = "#0f7cff"

    signUp.backgroundColor = "#0f7cff"

    u.style.backgroundColor = "#0f7cff"

    lbl.style.backgroundColor = "#0f7cff"

    tap.style.color = "#0f7cff"

    tap.style.outlineColor = "#0f7cff"

})

// btn7
btn7.addEventListener("click", function () {

    cName.style.color = "#4a00e0"

    bdr.style.backgroundColor = "#4a00e0"

    signUp.style.outlineColor = "#4a00e0"

    signUp.style.color = "#4a00e0"

    signUp.backgroundColor = "#4a00e0"

    u.style.backgroundColor = "#4a00e0"

    lbl.style.backgroundColor = "#4a00e0"

    tap.style.color = "#4a00e0"

    tap.style.outlineColor = "#4a00e0"

})

// btn8
btn8.addEventListener("click", function () {

    cName.style.color = "#f5c626"

    bdr.style.backgroundColor = "#f5c626"

    signUp.style.outlineColor = "#f5c626"

    signUp.style.color = "#f5c626"

    signUp.backgroundColor = "#f5c626"

    u.style.backgroundColor = "#f5c626"

    lbl.style.backgroundColor = "#f5c626"

    tap.style.color = "#f5c626"

    tap.style.outlineColor = "#f5c626"

})

// btn9
btn9.addEventListener("click", function () {

    cName.style.color = "#f83600"

    bdr.style.backgroundColor = "#f83600"

    signUp.style.outlineColor = "#f83600"

    signUp.style.color = "#f83600"

    signUp.backgroundColor = "#f83600"

    u.style.backgroundColor = "#f83600"

    lbl.style.backgroundColor = "#f83600"

    tap.style.color = "#f83600"

    tap.style.outlineColor = "#f83600"

})

// btn10
btn10.addEventListener("click", function () {

    cName.style.color = "#ff5555"

    bdr.style.backgroundColor = "#ff5555"

    signUp.style.outlineColor = "#ff5555"

    signUp.style.color = "#ff5555"

    signUp.backgroundColor = "#ff5555"

    u.style.backgroundColor = "#ff5555"

    lbl.style.backgroundColor = "#ff5555"

    tap.style.color = "#ff5555"

     tap.style.outlineColor = "#ff5555"

})

// default colo
btn1.addEventListener("click", function () {

    cName.style.color = "#8c8cf9"

    bdr.style.backgroundColor = "#8c8cf9"

    signUp.style.outlineColor = "#8c8cf9"

    signUp.style.color = "#8c8cf9"

    signUp.backgroundColor = "#8c8cf9"

    u.style.backgroundColor = "#8c8cf9"

    lbl.style.backgroundColor = "#8c8cf9"

    tap.style.color = "#8c8cf9"

    tap.style.outlineColor = "#8c8cf9"

})



// clk btn

let tap = document.querySelector(".on-btn");
let clkContainer = document.querySelector(".clk-btn");
let closeEye = document.querySelector(".close-eye")
let lll = 0

tap.addEventListener("click", function () {

    if (lll == 0) {
        clkContainer.style.opacity = "1"
        clkContainer.style.right = "12px"
        closeEye.style.opacity = "0"
        lll = 1
    }

    else if (lll = 1) {
        clkContainer.style.opacity = "0"
        clkContainer.style.right = "-60px"
        closeEye.style.opacity = "1"
        lll = 0
    }

})





