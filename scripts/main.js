const bookCard = document.getElementById('book-card')

const myLibrary = []

function Book(author, title, pages, read = false) {
    this.id = Math.floor(Math.random() * 100)
    this.author = author
    this.title = title
    this.pages = pages
    this.read = read
}

function addBookToLibrary(author, title, pages, read) {
    myLibrary.push(new Book(author, title, pages, read))
}

function render() {
    bookCard.innerHTML = ''
    for (const book of myLibrary) {
        const bookItem = `<span>Author: ${book.author}</span> <span>Title: ${book.title}</span> <span>Pages: ${book.pages} </span> <span>Read: ${book.read}</span>`
        const bookElem = document.createElement('div')
        bookElem.setAttribute('id', `${book.id}`)
        const button = document.createElement('button')
        const toggleBtn = document.createElement('button')
        button.setAttribute('onclick', 'removeBook(this)')
        toggleBtn.setAttribute('onclick', 'toggleReadStatus(this)')
        book.read ? toggleBtn.classList.add('toggle-class') : toggleBtn;

        button.textContent = ' x'
        toggleBtn.textContent = 'Change Read Status'
        bookElem.innerHTML = bookItem
        bookElem.appendChild(button)
        bookElem.appendChild(toggleBtn)
        bookCard.appendChild(bookElem)
    }
}

const saveBtn = document.getElementById('save')

function addBook(e) {
    const author = document.getElementById('author').value
    const title = document.getElementById('title').value
    const pages = document.getElementById('pages').value
    const read = document.getElementById('read').value === 'yes'
    e.preventDefault()
    addBookToLibrary(author, title, pages, read)
    document.getElementById('save').style.display = 'none'
    document.getElementById('save').reset();
    render()
}

function removeBook(id) {
    const test = myLibrary.find((element) => element.id == id.parentElement.id)
    myLibrary.splice(myLibrary.indexOf(test), 1)
    render()
}

function toggleReadStatus(id) {
    const test = myLibrary.findIndex(element => element.id == id.parentElement.id);
    myLibrary[test].read = !myLibrary[test].read
    render()
}

saveBtn.addEventListener('submit', addBook)

const newBookBtn = document.getElementById('new-book')

function newStyle() {
    document.getElementById('save').style.display = 'block'
}
newBookBtn.addEventListener('click', newStyle)

//

const test = addBookToLibrary('J. K. Rowling', 'Harry Potter and the Philosopher\'s Stone', 508)
const test2 = addBookToLibrary('Mikhail Bulgakov', 'The Master and Margarita', 158, true)
const test3 = addBookToLibrary('Lewis Carroll', 'Alice\'s Adventures in Wonderland', 628)
render()