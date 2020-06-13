const newQuoteBtn = document.querySelector(".new-quote-btn");
const quoteHtml = document.querySelector(".quote");

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");


let quote;

const themes = ['green','pink','yellow','orange'];
let prevTheme = 'green';

const getQuote = () => {
    fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => {
            quote = data;
            setHtmlForQuote(quote);
        });
}

const setHtmlForQuote = (quote) => {
    const currentTheme = themes[Math.floor(Math.random() * themes.length)];
    quoteHtml.innerHTML = `
        <h4>${quote.content}</h4>
        <h5>By : "${quote.author}"</h5>
    `;
    
    header.classList.remove(prevTheme);
    header.classList.add(currentTheme);

    footer.classList.remove(prevTheme);
    footer.classList.add(currentTheme);

    prevTheme = currentTheme;
}

//First Time
getQuote(); 

//Click on button
newQuoteBtn.addEventListener('click', () => {
    getQuote();
});