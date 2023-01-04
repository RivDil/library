const addBook = document.getElementById('add-books');
const submit = document.getElementById('submit');
const overlay = document.createElement('div');
const form = document.getElementById('form');
const bookTitle = document.getElementById('bookTitle');
const pages = document.getElementById('pages');
const author = document.getElementById('author');
const check = document.getElementById('check');
const books = document.getElementById('books');
overlay.id = 'overlay'; 
let myLibrary = [
  {
    title: 'este libro',
    author: 'este autor',
    pages: 75,
    readed: 'Yes',
  },
  {},
  {},
];


document.body.appendChild(overlay);

addBook.addEventListener('click', function() {
  form.style.display = 'flex'; 
  overlay.style.display = 'block'; 
});

form.addEventListener('submit', function() {
  event.preventDefault();
  addBookToLibrary(); 
  displayBooks();
  form.style.display = 'none'; 
  overlay.style.display = 'none'; 
  form.reset();
});

overlay.addEventListener('click', function() {
  form.style.display = 'none';
  overlay.style.display = 'none'; 
});
function Book(title,author,pages,readed) {
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.readed = readed;
}
function addBookToLibrary() {

  let authorForm = author.value;
  let pagesForm = pages.value;
  let checkForm;
  let bookTitleForm = bookTitle.value;

  if(check.checked === true){
    checkForm = 'Yes'
  }else{
    checkForm = 'No'
  }
  let newBook = new Book (bookTitleForm,authorForm,pagesForm,checkForm);
  console.log(newBook);
  myLibrary.push(newBook);
}
function displayBooks(){
  books.innerHTML = '';
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let card = document.createElement('div'); 
    card.classList.add('card'); 
    card.innerHTML = `
      <div class="card-header"><h3>
        ${book.title}
      </h3></div>
      <div class="card-body">
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <p id='readbtn'>Did you read it?:  ${book.readed}</p>
        <button id="eraser" onclick='eraseBook(${i})'>Erase Book</button>
      </div>
    `;
    if(book.readed == 'Yes'){
      card.style.background = 'green'
    }else{
      card.style.background = 'red'
    }
    books.appendChild(card);
  }
}
function eraseBook(i){
  console.log(i)
  myLibrary.splice(i,1);
  displayBooks();
}
displayBooks()