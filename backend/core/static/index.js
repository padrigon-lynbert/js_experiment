const search = document.querySelector('#search');
const results = document.querySelector('#results');

const items = ["apple","banana","carrot","orange","grape","melon"];

search.addEventListener('input', () => {
    const term = search.value.toLowerCase();
    results.innerHTML = "";

    items
        .filter(x => x.includes(term))
        .forEach(x => {
            const li = document.createElement('li');
            li.textContent = x;
            results.appendChild(li);
        });
});