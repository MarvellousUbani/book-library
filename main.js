const bookCard = document.getElementById('book-card');



const myLibrary = [];

function Book(author, title, pages, read = false) {
    this.id = Math.floor(Math.random() * 100);
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
    bookCard.innerHTML = '';
    for (const book of myLibrary) {
        const bookItem = `<span>Author: ${book.author}</span> <span>Title: ${book.title}</span> <span>Pages: ${book.pages} </span> <span>Read: ${book.read}</span>`;
        const bookElem = document.createElement('div');
        bookElem.setAttribute('id', `${book.id}`);
        // const wrapButtons = document.createElement('div');
        // wrapButtons.classList.add("wrap-buttons");
        const button = document.createElement('button');
        const toggleBtn = document.createElement('button');
        button.setAttribute('onclick', 'removeBook(this)');
        toggleBtn.setAttribute('onclick', 'toggleReadStatus(this)');

        button.textContent = ' x';
        toggleBtn.textContent = 'Change Read Status';
        bookElem.innerHTML = bookItem;
        // wrapButtons.appendChild(button);
        // wrapButtons.appendChild(toggleBtn);
        // bookElem.appendChild(wrapButtons);
        bookElem.appendChild(button);
        bookElem.appendChild(toggleBtn);
        bookCard.appendChild(bookElem);
    }
}


const saveBtn = document.getElementById('save');

function addBook(e) {
    const author = document.getElementById('author').value;
    const title = document.getElementById('title').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').value == 'yes';
    e.preventDefault();
    addBookToLibrary(author, title, pages, read);
    document.getElementById('save').style.display = 'none';
    render();
}


function removeBook(id) {
    const test = myLibrary.find((element) => element.id == id.parentElement.id);
    myLibrary.splice(myLibrary.indexOf(test), 1);
    render();
}

function toggleReadStatus(id) {
    const test = myLibrary.find((element) => element.id == id.parentElement.id);
    const readStatus = myLibrary[myLibrary.indexOf(test)].read;
    myLibrary[myLibrary.indexOf(test)].read = !myLibrary[myLibrary.indexOf(test)].read
        // console.log(id.classList.toggle("toggle-class"));
        // if (myLibrary[myLibrary.indexOf(test)].read) {
        //     toggleBtn.setAttribute('class', 'toggle-class');
        // } else {
        //     toggleBtn.classList.remove('toggle-class');
        // }

    id.classList.toggle("toggle-class").style.color = '#05ff15';

    render();
}

saveBtn.addEventListener('submit', addBook);


const newBookBtn = document.getElementById('new-book');

function newStyle() {
    document.getElementById('save').style.display = 'block';
}
newBookBtn.addEventListener('click', newStyle);

//

let test = addBookToLibrary("Mike", 'good work', 58);
let test2 = addBookToLibrary("Mike", 'lates work', 58, true);
render();