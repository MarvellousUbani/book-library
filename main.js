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
    console.log(myLibrary);
}

function render() {
    bookCard.innerHTML= "";
    for (let book of myLibrary) {
        const bookItem = document.createTextNode(`Author: ${book.author} Title: ${book.title} Pages: ${book.pages} Read: ${book.read}`)
        let bookElem = document.createElement('li');
        let button = document.createElement('button');
        button.setAttribute('onclick', 'removeBook(this)')
        button.textContent = " x";
        bookElem.appendChild(bookItem);
        bookElem.appendChild(button);
        bookCard.appendChild(bookElem);
    }
}


// let test = addBookToLibrary('Mike', 'Cooking book', 55);
// let test1 = addBookToLibrary('Roodz', 'notebook', 15, true);
// let test2 = addBookToLibrary('Tolkien', 'The Hobbit', 158, false);
// let test3 = addBookToLibrary('Ultra', 'The Hobbit', 158, false);
// console.log(myLibrary);
// render();


// bookCard.innerHTML = render();
// save new book button

let saveBtn = document.getElementById("save");
let removeBtn = document.querySelector(".remove-button");

function addBook(e) {
    let author = document.getElementById("author").value;
    let title = document.getElementById("title").value;
    let pages = document.getElementById("pages").value;
    let read = document.getElementById("read").value == 'yes' ? true : false;
    e.preventDefault();
    addBookToLibrary(author, title, pages, read);
    // myLibrary = [];
    render();
}


function removeBook(a){
    a.parentElement.innerHTML = "";
}

saveBtn.addEventListener('submit', addBook);

if(removeBtn){
    removeBtn.addEventListener('click', removeBook)
}

