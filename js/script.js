const img = document.querySelector('.img');
const button = document.querySelector('.button');
const url = `https://aws.random.cat/meow`;

async function workWithFetch() {
    let request = await fetch(url);
    let parsedRequest = await request.json();
    img.src = parsedRequest.file;
};

button.addEventListener('click', () => {
    workWithFetch()
});



