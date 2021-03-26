
'use strict'

let burger = document.querySelector('#burger')
let menu = document.querySelector('#menu')
let flag = false;

burger.onclick = () => {
    if(flag){
        menu.style.left = '-500px';
        flag = false
    }else{
        menu.style.left = '0';
        flag = true
    }
}

