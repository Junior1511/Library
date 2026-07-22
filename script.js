const books = []

function Book(title, author, read) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.id = crypto.randomUUID()
}

function addBookToLibrary (title, author, read) {
    let newBook = new Book(title, author, read)
    books.push(newBook)
}

addBookToLibrary("idk1","idk1","no")
addBookToLibrary("idk2","idk2","yes")

console.log(books)
// need a function to loop through the books array and
// display them ig