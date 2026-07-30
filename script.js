const display = document.querySelector(".display");
const quote = document.querySelector(".quote");
const author = document.querySelector(".author");
const generateBtn = document.querySelector(".quote-btn");
const quotes = [
  {
    quote: "Stay hungry. Stay foolish.",
    author: "Steve Jobs"
  },
  {
    quote: "Knowledge is power.",
    author: "Francis Bacon"
  },
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt"
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker"
  },
  {
    quote: "Success is not final. Failure is not fatal.",
    author: "Winston Churchill"
  },
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    quote: "In the middle of difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    quote: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    quote: "The future depends on what you do today.",
    author: "Mahatma Gandhi"
  }
];
let previousIndex = -1;
function displayRandomQuote(){
  let index;
  do{
    index = Math.floor(Math.random()*quotes.length);
  }while(index === previousIndex);
  previousIndex = index;
  const {quote: quoteText,author: authorText} = quotes[index];
    quote.textContent = quoteText;
    author.textContent = authorText;
}
function animateQuote(){
  display.classList.add("fade");
  setTimeout(()=>{
    displayRandomQuote();
    display.classList.remove("fade");
  }, 500);
}
generateBtn.addEventListener("click", animateQuote);
displayRandomQuote();