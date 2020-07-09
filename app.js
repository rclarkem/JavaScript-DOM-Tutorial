const bookList = document.querySelector('#book-list')

console.log(bookList.parentNode)
console.log(bookList.parentElement.parentElement)


console.log(bookList.childNodes)
console.log(bookList.children)

console.log('all node children:');
Array.from(bookList.childNodes).forEach(function(node){
  console.log(node);
});

console.log('all element children:');
Array.from(bookList.children).forEach(function(node){
  console.log(node);
});
