document.addEventListener('DOMContentLoaded', () => {
const quoteDisplay = document.getElementById("quoteDisplay");
const newQuote = document.getElementById("newQuote");


const quotes = [
    {text: "This is a new begining " ,category: "motivation"},
    {text: "This is a new begining " ,category: "motivation"},
    {text: "This is a new begining " ,category: "motivation"},
    {text: "This is a new begining " ,category: "motivation"}, 
];

function showRandomQuote(){
   const randomIndex = Math.floor(Math.random() * quotes.length)
   const randomQuote = quotes[randomIndex]
    quoteDisplay.innerHTML= `<p>${randomQuote.text}</p><p><em>${randomQuote.category}</em></p>`
   
}
newQuote.addEventListener('click', showRandomQuote);

function addQuote(){
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();

    const text = newQuoteText.value.trim();
    const category = newQuoteCategory.value.trim()

    if (text && category) {
    quotes.push(text, category); 
    newQuoteText.value = '';
    newQuoteCategory.value = '';
    alert('New quote added!')
 } else {
    alert('Please enter both quote text and category');
  }
}

 showRandomQuote();
 const addQuoteButton = document.querySelector('button[onclick="addQuote()"]');
  addQuoteButton.addEventListener('click', addQuote);

});





































// const QuoteDisplay = document.getElementById('quoteDisplay')
// const NewQuote = document.getElementById('NewQuote')

// const quote =[
//     {text: "this is not the end of the World  ", category:"inspiration "},
//     {text: "this is not the end of the World  ", category:"inspiration "},
//     {text : "this is not the end of the World  ", category:"inspiration "},
//     {text : "this is not the end of the World  ", category:"inspiration "},

// ]

// function showRandomQuote(){
//     const randomIndex = Math.floor(Math.random() * quote.length)
//     const randomQuote = quote[randomIndex]
//     QuoteDisplay.textContent = `"${randomQuote.text}- ${randomQuote.category}`
   
// }

// function AddquoteForm(){
//     const form = document.createElement('form')
//     form.id ='addQuoteFotm';

//     const textInput = document.createElement('input');
//     textInput.type = 'text';
//     textInput.name = 'quoteText';
//     textInput.placeholder = 'Enter quote text';

//     const categoryInput = document.createElement('input');
//      categoryInput.type = 'text';
//      categoryInput.name = 'quoteCategory';
//      categoryInput.placeholder = 'Enter quote category';

//    const submitButton = DOCUMENT.getElementById('newQuote')
//    newQuoteButton.addEventListener('click', () =>)

//     form.appendChild(textInput);
//     form.appendChild(categoryInput);
//     form.appendChild(submitButton);

//      addQuoteFormContainer.appendChild(form);

//       form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const formData = new FormData(form);
//     const newQuote = {
//       text: formData.get('quoteText'),
//       category: formData.get('quoteCategory')
//     };
//      quote.push(newQuote);
//     form.reset(); // Clear form fields
//     showRandomQuote(); 
// })
// }
// showRandomQuote();
// AddquoteForm();
// newQuoteButton.addEventListener('click', showRandomQuote);