let bookCard = document.getElementById('book-card');


let myLibrary = [];

function Book(author, title, pages, read = false) {
    this.author = author;
    this.title = title;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
    myLibrary.push(new Book(author, title, pages, read));
}

function render() {
    for (let book of myLibrary) {
      const bookItem = document.createTextNode(`Author: ${book.author} Title: ${book.title} Pages: ${book.pages} Read: ${book.read}`)
      let bookElem =  document.createElement('li');
      bookElem.appendChild(bookItem)
      bookCard.appendChild(bookElem);
    }
}


let test = addBookToLibrary('Mike', 'Cooking book', 55);
let test1 = addBookToLibrary('Roodz', 'notebook', 15, true);
let test2 = addBookToLibrary('Tolkien', 'The Hobbit', 158, false);
let test3 = addBookToLibrary('Ultra', 'The Hobbit', 158, false);
// console.log(myLibrary);
render();


// bookCard.innerHTML = render();