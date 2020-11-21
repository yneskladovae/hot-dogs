"use strict"
let picture = document.querySelector('.test_picrure');
let input = document.querySelector('.test_input');
let button = document.querySelector('.test_btn');
let output = document.querySelector('.test_input_output');

button.onclick = function() {
    let value = input.value;
    if (value == 8){
        output.innerHTML = "Ура, вы ответили верно. Поздравляем!";
        picture.src = "img/congratulations.png";
        output.classList.add("true");
        output.style.visibility = "inherit";
    } else {
        output.innerHTML = "Неверно, попробуйте еще раз, будьте внимательнее.";
        picture.src = "img/dogs.png";
        output.classList.remove("true");
        output.style.visibility = "inherit";
    }
    input.value = "";
}