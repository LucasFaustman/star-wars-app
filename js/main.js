const card = document.querySelectorAll('.card__inner');

// card.addEventListener('click', function () {
//   card.classList.toggle('is-flipped')
// })

function flipCard() {
  this.classList.toggle('is-flipped')
}
card.forEach((card) => card.addEventListener('click',flipCard))

document.addEventListener('click', e => {
// slider
let handle 
if (e.target.matches('.handle'))  {
  handle = e.target
} else {
  handle = e.target.closest('.handle')
} 
if (handle != null) 
  onHandleClick(handle)

})

function onHandleClick (handle) {
  const cards = handle.closest('body').querySelector('.cards')
  const cardsIndex = parseInt(getComputedStyle(cards).getPropertyValue('--cards-index'))
  if (handle.classList.contains('left-handle')) {
    cards.style.setProperty('--cards-index', cardsIndex - 1)
  }

  if (handle.classList.contains('right-handle')) {
    cards.style.setProperty('--cards-index', cardsIndex + 1)
  }
  console.log(cards)
}




// document.querySelector('button').addEventListener('click', getFetch)

// function getFetch(){
//   const choice = document.querySelector('input').value
//   console.log(choice)
//   const url = `https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/1.json`

//   fetch(url)
//       .then(res => res.json()) // parse response as JSON
//       .then(data => {
//         console.log(data)
//         document.querySelector('h1').innerHTML = data.homeworld.charAt(0).toUpperCase()+data.homeworld.slice(1)
//       })
//       .catch(err => {
//           console.log(`error ${err}`)
//       });
// }

