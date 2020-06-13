const newQuoteBtn = document.querySelector(".new-quote-btn");
const quoteHtml = document.querySelector(".quote");

const header = document.querySelector(".header");
const footer = document.querySelector(".footer");

const image = document.querySelector("img");

let quote,imageUrl;

const themes = ['green', 'pink', 'yellow', 'orange'];
let prevTheme = 'green';

const getQuote = () => {
    fetch("https://api.quotable.io/random")
        .then((res) => res.json())
        .then((data) => {
            quote = data;
            setHtmlForQuote(quote);
        });

    fetch("https://picsum.photos/200")
        .then((data) => {
            imageUrl = data.url;
            image.setAttribute('src',imageUrl);
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
    newQuoteBtn.style.borderRadius = `${Math.floor(Math.random() * 100)}px`;

    footer.classList.remove(prevTheme);
    footer.classList.add(currentTheme);
    newQuoteBtn.style.borderRadius = `${Math.floor(Math.random() * 100)}px`;

    newQuoteBtn.classList.remove(prevTheme);
    newQuoteBtn.classList.add(currentTheme);
    newQuoteBtn.style.borderRadius = `${Math.floor(Math.random() * 100)}px`;

    prevTheme = currentTheme;
}

//First Time
getQuote();


// !START : NOT FOR PRODUCTION //
// TODO:  FUN ONLY //

// let speed = prompt("Whats your speed ins seconds ?");
// if(speed === ""){
//     speed = 2;
// }
// speed = Number(speed);

// setInterval(() => {
//     getQuote();
// },speed*1000)

// !END :  NOT FOR PRODUCTION //


//Click on button
newQuoteBtn.addEventListener('click', () => {
    getQuote();
});