import '../styles/style.css'
import {items} from "./item";
import { DOMSelectors } from './dom';

function clearfields() {
  const orig = document.querySelector(".card")
  orig.innerHTML = ""
}

function insertCard(arr) {
  arr.forEach(el=> {
    document.querySelector(".card").insertAdjacentHTML(
      'beforeend',
      `<div class="card">
    <h2 class="card-title">${el.title}</h2>
    <img src="${el.img} class="card-image">
    <h3 class="card-price"> ${el.price} </h3>
    <h4 class="card-subtitle"> ${el.desc} </h4></div>`)
  });
}

insertCard(items)


// cheek.forEach(el) => card(el);
// eye.forEach(el) => card(el);
// skin.forEach(el) => card(el);
// lip.forEach(el) => card(el);


let buttons = document.querySelectorAll(".eyesbtn, .skinbtn, .lipsbtn, .cheekbtn")


buttons.forEach((btn)=> btn.addEventListener("click", function(){
  let type = btn.textContent.toLowerCase()
  let newArr = items.filter((category) => category.makeup.includes(type))
  clearfields()
  insertCard(newArr)
}))
