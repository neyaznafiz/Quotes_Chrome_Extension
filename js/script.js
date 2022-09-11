
const getQuotes = async () => {
    try {
        const res = await fetch('https://api.kanye.rest/');
        const quoteData = await res.json();

        const quotes = document.querySelector("#quote");

        quotes.innerHTML = quoteData.quote

    } catch (error) {}

};

window.addEventListener('load', () => {
    getQuotes();
});


