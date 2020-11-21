let girlBtn = document.querySelector('.btn-girl');
let boyBtn = document.querySelector('.btn-boy');
let outputResult = document.querySelector('.output_g');
let arrBoy = ['Арчи','Барон','Вольт','Гром','Джек','Еврик','Жорик','Зевс','Каспер','Лорд','Оскар']
let arrGirl = ['Альма','Герда','Джесси','Жужа','Ириска','Ласка','Пандора','Рокси','Синди','Фиби','Рейна']

girlBtn.onclick = function() {
    outputResult.innerHTML = "Имя для хорошей девочки - " + arrGirl[Math.floor(Math.random()*arrGirl.length)];
    outputResult.style.color = "#E91E63";
    outputResult.style.visibility = "inherit"
}
boyBtn.onclick = function() {
    outputResult.innerHTML = "Имя для хорошего мальчика - " + arrBoy[Math.floor(Math.random()*arrBoy.length)];
    outputResult.style.color = "#2196F3";
    outputResult.style.visibility = "inherit"
}