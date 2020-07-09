const books = document.querySelectorAll('#book-list li .name');

console.log(books)

books.forEach((book) => book.textContent = "Test");


let bookList = document.querySelector('#book-list')
// bookList.innerHTML = '<h2>Books and more books</h2>'
bookList.innerHTML += '<p>Adding HTML</p>'
