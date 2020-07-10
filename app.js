const addBookForm = document.forms['add-book']
const bookList = document.querySelector('#book-list ul')


addBookForm.addEventListener('submit', (e) => {
  e.preventDefault()
  let text = e.target.title.value
  let newLi = createAndAppend('li', bookList, null, null, undefined)
  let fSpan = createAndAppend('span', newLi, 'name', null, (e) => e.textContent = text)
  let sSpan = createAndAppend('span', newLi, 'delete', null, (e) => e.textContent = 'delete')
  e.target.title.value = ""
})

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
// const list = document.querySelector('#book-list ul');
//
 delete books
bookList.addEventListener('click', (e) => {
  if(e.target.className == 'delete'){
    const li = e.target.parentElement;
    li.parentNode.removeChild(li);
  }
});
//
// const forms = document.forms;
// console.log(forms);
// console.log(forms['add-book']);
//
// Array.from(forms).forEach(function(form){
//   console.log(form);
// });
//
// const addForm = forms['add-book'];
// addForm.addEventListener('submit', function(e){
//   e.preventDefault();
//   const value = addForm.querySelector('input[type="text"]').value;
//   console.log(value);
// });
