const bookList = document.querySelector('#book-list')

console.log('next sibling',bookList.nextSibling)
console.log('next element sibling',bookList.nextElementSibling)
console.log('previous sibling',bookList.previousSibling)
console.log('previous element sibling',bookList.previousElementSibling)

bookList.previousElementSibling.querySelector('p').innerHTML += '<br>Too Cool for everyone</br>'
