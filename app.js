const addForm = document.forms['add-book']
const bookList = document.querySelector('#book-list ul')
addForm.addEventListener('submit', ev => {
  ev.preventDefault()
  let text = ev.target.title.value
  createEles(text)
  ev.target.title.value = ""
})

// delete list
bookList.addEventListener('click', ev => {
  if (ev.target.matches('.delete')) {
    const li = ev.target.parentElement
    bookList.removeChild(li)
  }
})

function createEles(text) {
  const newLi = document.createElement('li')
  const bookName = document.createElement('span')
  const deleteBtn = document.createElement('span')

  bookName.classList.add('name')
  bookName.textContent = text
  deleteBtn.classList.add('delete')
  deleteBtn.textContent = 'delete'
  newLi.append(bookName, deleteBtn)
  bookList.append(newLi)
  return newLi
}

// const list = document.querySelector('#book-list ul');
// const forms = document.forms;
//
//  delete books
// list.addEventListener('click', (e) => {
//   if(e.target.className == 'delete'){
//     const li = e.target.parentElement;
//     li.parentNode.removeChild(li);
//   }
// });
//
//  add books
// const addForm = forms['add-book'];
// addForm.addEventListener('submit', function(e){
//   e.preventDefault();
//
//    create elements
//   const value = addForm.querySelector('input[type="text"]').value;
//   const li = document.createElement('li');
//   const bookName = document.createElement('span');
//   const deleteBtn = document.createElement('span');
//
//    add text content
//   bookName.textContent = value;
//   deleteBtn.textContent = 'delete';
//
//    append to DOM
//   li.appendChild(bookName);
//   li.appendChild(deleteBtn);
//   list.appendChild(li);
//   list.insertBefore(li, list.querySelector('li:first-child'));
// });
