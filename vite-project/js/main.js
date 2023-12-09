import '../styles/style.css'
import {items} from "./item";
import { DOMSelectors } from './dom';


function insertCard(arr){
  arr.forEach((el)=> {
    document.querySelector(".container").insertAdjacentHTML(
      'beforeend',
      `<div class="card">
    <h2 class="card-title">${el.title}</h2>
    <img class="card-image" src="${el.img}" alt=""></img>
    <h3 class="card-price"> ${el.price} </h3>
    <h4 class="card-subtitle"> ${el.desc} </h4>
    </div>`)
  });
}

insertCard(items)

function clearfields() {
  const el = document.querySelector(".container")
  el.innerHTML = ""
}

// document.querySelector(".cheekbtn").addEventListener("click", function(){
//   let cheek = items.filter((item) => item.makeup === "cheek");
//   clearfields();
//   insertCard(cheek);
// })

// document.querySelector(".lipsbtn").addEventListener("click", function(){
//   let lip = items.filter((item) => item.makeup === "lips");
//   clearfields();
//   insertCard(lip);
// })

// document.querySelector(".skinbtn").addEventListener("click", function(){
//   let skin = items.filter((item) => item.makeup === "skin");
//   clearfields();
//   insertCard(skin);
// })

// document.querySelector(".eyesbtn").addEventListener("click", function(){
//   let eye = items.filter((item) => item.makeup === "eye");
//   clearfields();
//   insertCard(eye);
// })


document.querySelector(".allbtn").addEventListener("click", function() {
  clearfields();
  insertCard(items);
})


let buttons = document.querySelectorAll(".eyesbtn, .skinbtn, .lipsbtn, .cheekbtn");

buttons.forEach((button) => button.addEventListener("click", function () {
  let type = button.textContent.toLowerCase();
    let newArr = items.filter((item) => item.makeup.toLowerCase() === type);
    clearfields();
    insertCard(newArr);
  }));


document.getElementById("changeTheme").addEventListener("click", function() {
  if (document.body.classList.contains("pinkity")) {
    document.body.classList.remove("pinkity");
    document.body.classList.add("blueBoss");
  }
  else {
    document.body.classList.add("pinkity");
    document.body.classList.remove("blueBoss");
  } 
});
