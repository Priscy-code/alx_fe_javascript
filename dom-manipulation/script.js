document.addEventListener('DOMContentLoaded', () => {
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuote = document.getElementById("newQuote");


const quotes = [
    {text: "Keep going, no matter what " ,category: "Perseverance"},
    {text: "Believe you can and you're halfway there" ,category: "Belief"},
    {text: "You are stronger than you think" ,category: "Strength"}, 
     {text: "This is a new begining " ,category: "motivation"},
];

function showRandomQuote(){
   const randomIndex = Math.floor(Math.random() * quotes.length)
   const randomQuote = quotes[randomIndex]
    quoteDisplay.innerHTML= `<p>${randomQuote.text}</p><p><em>${randomQuote.category}</em></p>`
   
}
const newQuoteText = document.getElementById('newQuoteText');
const newQuoteCategory = document.getElementById('newQuoteCategory');


function createAddQuoteForm(){
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

    if (newQuoteText && newQuoteCategory) {
    quotes.push({text:newQuoteText, category:newQuoteCategory}); 
    document.getElementById("newQuoteText").value = '';
    document.getElementById("newQuoteCategory").value= '';
    newQuoteCategory.value = '';
    alert('New quote added!')
 } else {
    alert('Please enter both quote text and category');
  }
}
newQuote.addEventListener('click', showRandomQuote);

 const addQuoteButton = document.querySelector('button[onclick="createAddQuoteForm()"]');
  addQuoteButton.addEventListener('click', createAddQuoteForm);

});





































