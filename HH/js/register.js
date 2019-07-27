const button = document.querySelector('.btn')
const form   = document.querySelector('.form')

button.addEventListener('click', function() {
   form.classList.add('form--no') //登入會晃的動畫
});