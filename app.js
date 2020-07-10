
let bookList = document.querySelector('#book-list ul')

// console.log(bookList)

bookList.addEventListener('click', (e) => {
  // console.log(e.target.parentElement)
  if (e.target.className === 'delete') {
    const li = e.target.parentElement
    li.parentNode.removeChild(li)
  }
})
