
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

const load = document.querySelector('#load');

load.addEventListener('click', async function () {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await res.json();
    title.textContent = data.title;
});