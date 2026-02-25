
const el = document.querySelector('#title');
const btn = document.querySelector('#btn');

btn.addEventListener('click', function() {
    el.textContent = 'clicked';    
});

console.log(el);

