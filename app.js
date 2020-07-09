let h2 = document.querySelector('#book-list h2')
// console.log(h2)

// h2.addEventListener('click', function(e){
//    console.log(e.target)
//    console.log(e)
// })

let deleButtons = Array.from(document.querySelectorAll('#book-list .delete'))
console.log(deleButtons)

deleButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const li = e.target.parentElement
    li.parentNode.removeChild(li)
  })
});


let clickHere = document.querySelector('#page-banner a')
// console.log(clickHere)
clickHere.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('navt to', e.target.textContent)
} )
