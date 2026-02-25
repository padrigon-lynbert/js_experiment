const title = document.querySelector('#title');
const btn = document.querySelector('#btn');
const input = document.querySelector('#nameInput');
const showBtn = document.querySelector('#showbtn');
const load = document.querySelector('#load');

btn.addEventListener('click', function () {
    title.textContent = "button clicked";
});

showBtn.addEventListener('click', function () {
    title.textContent = input.value;
});

load.addEventListener('click', async function () {
    const res = await fetch('/api/hello/');
    const data = await res.json();
    title.textContent = data.message;
});