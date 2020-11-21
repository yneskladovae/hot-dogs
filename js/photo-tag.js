"use strict"
const FILTERS = document.querySelector('.tag')
const PHOTO_ITEM = document.querySelector('.photo')

FILTERS.addEventListener('click', (event) =>{
    FILTERS.querySelectorAll('span').forEach(el => el.classList.remove('active_tag'));
    if (event.target.textContent === "Разные"){
        PHOTO_ITEM.innerHTML = 
            `
            <img src="img/1.jpg" alt="img">
            <img src="img/2.jpg" alt="img">
            <img src="img/3.jpg" alt="img">
            <img src="img/4.jpg" alt="img">
            <img src="img/5.jpg" alt="img">
            <img src="img/6.jpg" alt="img">
            <img src="img/7.jpg" alt="img">
            <img src="img/8.jpg" alt="img">
            <img src="img/1.jpg" alt="img">
            <img src="img/2.jpg" alt="img">
            <img src="img/3.jpg" alt="img">
            <img src="img/4.jpg" alt="img">
            `
    } else if (event.target.textContent === "Мопсы"){
        PHOTO_ITEM.innerHTML = 
            `
            <img src="img/11.jpg"" alt="img">
            <img src="img/22.jpg"" alt="img">
            <img src="img/33.jpg"" alt="img">
            <img src="img/44.jpg"" alt="img">
            <img src="img/55.jpg"" alt="img">
            <img src="img/66.jpg"" alt="img">
            <img src="img/77.jpg"" alt="img">
            <img src="img/88.jpg"" alt="img">
            <img src="img/11.jpg"" alt="img">
            <img src="img/22.jpg"" alt="img">
            <img src="img/33.jpg"" alt="img">
            <img src="img/44.jpg"" alt="img">
            `
    } else if (event.target.textContent === "Шнауцеры"){
        PHOTO_ITEM.innerHTML = 
            `
            <img src="img/111.jpg"" alt="img">
            <img src="img/222.jpg"" alt="img">
            <img src="img/333.jpg"" alt="img">
            <img src="img/444.jpg"" alt="img">
            <img src="img/555.jpg" alt="img">
            <img src="img/666.jpg" alt="img">
            <img src="img/777.jpg" alt="img">
            <img src="img/888.jpg" alt="img">
            <img src="img/111.jpg"" alt="img">
            <img src="img/222.jpg"" alt="img">
            <img src="img/333.jpg"" alt="img">
            <img src="img/444.jpg"" alt="img">
            `
    }
    event.target.classList.add('active_tag');
});