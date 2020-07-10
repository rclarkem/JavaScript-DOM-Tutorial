const books = document.querySelector('#book-list ul')
// console.log(books)
books.addEventListener('click', (e) => {
  // I used the .matches method instead of className in the chance that I want something else.
  const deletebtn = e.target.matches('.delete')
  if (deletebtn) {
    const li = e.target.parentElement
    books.removeChild(li)
  }
})

let newLi = createAndAppend('li', books, null,null,undefined)
let text = createAndAppend('span', newLi, 'name', null, (e) => e.innerText = 'The Lord of The Rings')
let deletebtn = createAndAppend('span', newLi, 'delete',null,(e) => e.textContent = 'delete')
// const newLi = document.createElement('li')
// const newSpanOne = document.createElement('span')
// const newSpanTwo = document.createElement('span')
// newSpanOne.textContent = 'The Lord of the Rings'
// newSpanOne.classList.add('name')
// newSpanTwo.textContent = 'delete'
// newSpanTwo.classList.add('delete')
// newLi.append(newSpanOne)
// newLi.append(newSpanTwo)
// books.append(newLi)

function createAndAppend(tagElem, parent, className, id, cb) {
  let element = document.createElement(tagElem)
  parent.append(element)
  if (className !== null) {
    element.className = className
  }
  if (id !== null) {
    element.id = id
  }
  if (cb !== undefined) {
    cb(element)
  }
  return element
}
