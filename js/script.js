
fetch('https://api.kanye.rest/')
    .then(data => data.json())
    .then(quoteData => {
        const quoteText = quoteData.quote
        const jokeElement = document.getElementById('quote');

        jokeElement.innerHTML = quoteText;
    })
