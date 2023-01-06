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
  {
    title:'100 años de soledad',
    author:'Miguel Garcia Marquez',
    pages:500,
    readed: 'Yes',
  },
  {
    title:'Les Miserables',
    author:'Victor Hugo',
    pages: 1000,
    readed: 'No',
  },
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

    // Add read status class to card based on book's readed property
    if (book.readed === 'Yes') {
      card.classList.add('read');
    }

    card.innerHTML = `
      <div class="card-header"><h2>
        ${book.title}
      </h2></div>
      <div class="card-body">
        <p>Author: ${book.author}</p>
        <p>Pages: ${book.pages}</p>
        <div id='toggleBtn'>
        <div id='change-div' onclick='changeRead(${i})'><button id="changeBtn" >${book.readed}</button></div>
        </div>
        <button id="eraser" onclick='eraseBook(${i})'>Erase Book</button>
      </div>
    `;
    books.appendChild(card);
  }
}
function changeRead(e){   
  let cards = document.getElementsByClassName('card'); 
  let card = cards[e];
  if (myLibrary[e].readed == 'Yes'){
    myLibrary[e].readed = 'No';
    card.classList.remove('read')
  }else{
    myLibrary[e].readed = 'Yes'
    card.classList.add('read');
  }
  displayBooks()
}


function eraseBook(i){
  console.log(i)
  myLibrary.splice(i,1);
  displayBooks();
}
displayBooks()