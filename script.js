const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

const newQuoteBtn = document.getElementById('newtextbtn');
console.log(newQuoteBtn);



const allHi = ['Привет.', 'Здравствуй.', 'У меня откровение поперло.', 'Всем привет.', 'Братья, алло.', 'Доброе утро!', 'Ну мы девочками собирались на переговоры.']

//Show new quote
function newQuote() {
    // Pick a random quote from apiQuotes array

    const randomHi = allHi[Math.floor(Math.random() * allHi.length)];

    const quote1 = localQuotes[Math.floor(Math.random() * localQuotes.length)];
   
    const quote2 = localQuotes[Math.floor(Math.random() * localQuotes.length)];   
    const quote3 = localQuotes[Math.floor(Math.random() * localQuotes.length)];   
    const quote4 = localQuotes[Math.floor(Math.random() * localQuotes.length)];   
    const quote5 = localQuotes[Math.floor(Math.random() * localQuotes.length)];   
    const quote6 = localQuotes[Math.floor(Math.random() * localQuotes.length)];   
    const quote7 = localQuotes[Math.floor(Math.random() * localQuotes.length)];   
    const quote8 = localQuotes[Math.floor(Math.random() * localQuotes.length)];   
    const quote9 = localQuotes[Math.floor(Math.random() * localQuotes.length)];   
    const quote10 = localQuotes[Math.floor(Math.random() * localQuotes.length)];   
    const quote11 = localQuotes[Math.floor(Math.random() * localQuotes.length)];   
    const quote12 = localQuotes[Math.floor(Math.random() * localQuotes.length)];   


    const textAngel = `${randomHi} ${quote1} ${quote2} ${quote3} ${quote4} ${quote5} ${quote6} ${quote7} ${quote8} ${quote9} ${quote10}`;
    console.log(textAngel);
    quoteText.textContent = textAngel;
}

/* authorText.textContent = quote.author;
quoteText.textContent = quote.text; */

newQuote();


newQuoteBtn.addEventListener('click', newQuote);