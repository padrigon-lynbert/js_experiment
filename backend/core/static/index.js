const search = document.querySelector('#search');
const results = document.querySelector('#results');

search.addEventListener('input', async () => {
    const term = search.value;
    const res = await fetch(`/core/search/?q=${term}`);
    const data = await res.json();

    results.innerHTML = '';

    data.results.forEach(x => {
        const li = document.createElement('li');
        li.textContent = x;
        results.appendChild(li);
    });
});