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
    const filteredQuotes = filterQuotesArray();
      if (filteredQuotes.length === 0) {
      quoteDisplay.innerHTML = "No quotes available for the selected category.";
      return;}


   const randomIndex = Math.floor(Math.random() * quotes.length)
   const randomQuote = quotes[randomIndex]
    quoteDisplay.innerHTML= `<p>${randomQuote.text}</p><p><em>${randomQuote.category}</em></p>`;
    sessionStorage.setItem('lastviewQuote', JSON.stringify(storeQuotes));
   

}

function createAddQuoteForm(){
    const newQuoteText = document.getElementById("newQuoteText").value.trim();
    const newQuoteCategory = document.getElementById("newQuoteCategory").value.trim();
    
    const newQuoteDiv = document.createElement('div');
    newQuoteDiv.classList.add('quote');

    const quoteText = document.createElement('p');
    quoteText.textContent = newQuoteText;
    const quoteCategory = document.createElement('p');
    quoteCategory.textContent=`Category: ${newQuoteCategory}`;

    newQuoteDiv.appendChild(quoteText);
    newQuoteDiv.appendChild(quoteCategory);

    quoteDisplay.appendChild(newQuoteDiv);


    if (newQuoteText && newQuoteCategory) {
    Localquotesquotes.push({text:newQuoteText, category:newQuoteCategory}); 
    document.getElementById("newQuoteText").value = '';
    document.getElementById("newQuoteCategory").value= '';
    newQuoteCategory.value = '';
    alert('New quote added!');
    saveQuotesToLocalStorage();
    showRandomQuote();
 } else {
    alert('Please enter both quote text and category');
  }
}
newQuote.addEventListener('click', showRandomQuote);

 const addQuoteButton = document.querySelector('button[onclick="createAddQuoteForm()"]');
  addQuoteButton.addEventListener('click', createAddQuoteForm);

  const storeQuotes = localStorage.getItem('quotes')
  const Localquotes = storeQuotes ? JSON.parse(storeQuotes):quotes;

  function saveQuotesToLocalStorage(){
    localStorage.setItem('quotes', JSON.stringify(Localquotes))
  };

  const lastviewQuote = sessionStorage.getItem('lastViewquote');
  if (lastviewQuote){
    const quote =JSON.parse(lastviewQuote);
    quoteDisplay.innerHTML = `"${quote.text}" - ${quote.category}`
  }else {
    showRandomQuote();
  }
  const categoryFilter = document.getElementById('categoryFilter');

  function populateCategories(){
    const categories = [...new Set(Localquotes.map(quote => quote.category))];
    categoryFilter.innerHTML = '<option value="all">All Categories</option>'
    categories.forEach (category => {
        const Option = document.createElement('option');
        Option.value = category;
        Option.textContent = category;
        categoryFilter.appendChild(option);
    });

    const lastSelectedCategory = localStorage.getItem('selectedCategory');
    if (lastSelectedCategory) {
      categoryFilter.value = lastSelectedCategory;
    }
  }
  function filterQuotes(){
    const selectedCategory = categoryFilter.value;
    localStorage.setItem('selectedCategory', selectedCategory);
    showRandomQuote();
  }
   function filterQuotesArray() {
    const selectedCategory = categoryFilter.value;
    if (selectedCategory === 'all') {
      return quotes;
    }
    return Localquotesquotes.filter(quote => quote.category === selectedCategory);
  }

  const exportButton = document.getElementById('exportQuotes');
  const Importfile = document.getElementById('importFile');


  function exportToJsonFile(){
    // const dataStr = "data: text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(quotes));
    // const downloadAnchorNode =document.createElement('a');
    // downloadAnchorNode.setAttribute("href", dataStr)
    // downloadAnchorNode.setAttribute("download", "storeQuotes.json");
    // document.body.appendChild(downloadAnchorNode); // required for firefox
    // downloadAnchorNode.click();
    // downloadAnchorNode.remove(); 

    const dataStr = JSON.stringify(quotes, null, 2);
    const blod = new Blob([dataStr], {types: 'application/json'});
    const url = URL.createObjectURL(blod);
    const a = document.createElement('a');
    a.href =url;
    a.download ='quotes.json'
    a.click();
    URL.revokeObjectURL(url)
  }

  function importQuotes(event){
    const file = event.target.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(e){
             const reader = new FileReader();
             reader.onload = function(event) {
                const importedQuotes = JSON.parse(event.target.result);
                quotes.push(...importedQuotes);
                alert('Quotes imported successfully!');
                saveQuotesToLocalStorage();
                showRandomQuote();

        };
         reader.readAsText(event.target.files[0]);
    }
  }
  exportButton.addEventListener('click', exportToJsonFile);

}

const importQuotesInput = document.getElementById('importQuotes');
  importQuotesInput.addEventListener('change', importQuotes);


populateCategories();
});





































