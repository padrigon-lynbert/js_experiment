
const title = document.querySelector('#title');
const btn = document.querySelector('#btn');
const input = document.querySelector('#nameInput');
const showBtn = document.querySelector('#showbtn');

btn.addEventListener('click', function() {
    title.textContent = "button clicked";    
});

showBtn.addEventListener('click', function() {
    title.textContent = input.value;
});