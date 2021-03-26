
'use strict'

let burger = document.querySelector('#burger')
let slider = document.querySelector('#slider')
let menu = document.querySelector('#menu')
let sliderButton = document.querySelector('#sliderButton')
let slider2h = document.querySelector('#slider2h')
let slider4h = document.querySelector('#slider4h')
let flag = false;
let count = 1;

let sliderNames = [['Ставьте на киберспорт!','Высокие кэфы, топовые события!','Перейти в рaздел'],
                   ['Жывые дилеры 24/7','Всегда готовы к общению','Играть сейчас!'],
                   ['Игра началась!','Врывайтесь с GT Gaming!','Играть']]


burger.onclick = () => {
    if(flag){
        menu.style.left = '-500px';
        flag = false
    }else{
        menu.style.left = '0';
        flag = true
    }
}

window.onscroll = () => {
    if(flag){
        menu.style.left = '-500px';
        flag = false
    }
}



let sliderFunc =() => {
    if(count == 4) {count = 1}
    slider.style.backgroundImage = `url(../img/slide${count}.webp)`;
    slider2h.innerText = sliderNames[count - 1][0]
    slider4h.innerText = sliderNames[count - 1][1]
    sliderButton.innerText = sliderNames[count - 1][2]
    count++
}

setInterval(sliderFunc, 5000);