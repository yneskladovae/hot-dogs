"use strict"
let inputRandom = document.querySelector('.calc_person');
let btnRandon = document.querySelector('.btn_calc_person');
let outputRandom = document.querySelector('.output_calc_person');

btnRandon.onclick = function (){
   let value = inputRandom.value;
   let personAge;
   if (value <= 0 || value == "" || value > 20){
       alert("Введите число от 1 до 20!");
       personInput.value = "";
   } else {
       // человеческий возраст = ln(возраст собаки) * 16 + 31
       personAge = Math.floor(Math.log(value) * 16 + 31);
       outputRandom.innerHTML =  personAge;
   }
}