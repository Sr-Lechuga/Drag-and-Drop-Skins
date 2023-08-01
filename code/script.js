"use strict";

const zone = document.querySelector(".test-zone");

zone.addEventListener("dragover",(e) => {
    e.preventDefault();
});

zone.addEventListener("drop",(e)=>{
    let n = e.dataTransfer.getData("skin");
    zone.style.background = `url("../img/skin${n}.jpg")`;
});

for (let i = 1; i < document.querySelector(".skins").children.length+1; i++) {
    document.querySelector(`.skin-${i}`).addEventListener("dragstart",(e) => changeSkin(i,e))
};

const changeSkin = (n,e) => {
    e.dataTransfer.setData("skin",n)
};