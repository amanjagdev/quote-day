const newQuoteBtn = document.querySelector(".new-quote-btn");
const quoteHtml = document.querySelector(".quote");

let quote;

const getQuote = () => {
    fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => {
            quote = data;
            setHtmlForQuote(quote);
        });
}

const  setHtmlForQuote = (quote) => {
    quoteHtml.innerHTML = `
        <h4>${quote.content}</h4>
        <h5>By : "${quote.author}"</h5>
    `;
}

//First Time
getQuote(); 

//Click on button
newQuoteBtn.addEventListener('click', () => {
    getQuote();
});