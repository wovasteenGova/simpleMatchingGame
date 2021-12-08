import * as render from "./renderCards.js";

const btnCheck = document.querySelector(".btn-start");
const inputValue = document.querySelector('.input')
const resetBtn = document.querySelector('.btn-reset')




const reset = function(){
    inputValue.value = ''
    render.cardContainer.innerHTML = ''
}

export const addHandler = function () {
  btnCheck.addEventListener("click", function (e) {
    const inputVal = inputValue.value
    if(inputVal <= 0 || inputVal === '') 
    alert('Please choose a number between 1 - 15') 

    e.preventDefault();

    if(inputVal <= 15) {
        render.renderCards(inputVal)
    }else{
        alert('Please choose a smaller number')
    }
    inputValue.value = ''


  })

  resetBtn.addEventListener('click', function(e) {
      e.preventDefault()
      reset()
  })

  render.cardContainer.addEventListener('click', function(e) {
    const getCurrentCard = e.target.closest('.cards')
    if(!getCurrentCard) return
   
    const idCard = +getCurrentCard.dataset.key

    if(isFinite(idCard))
      getCurrentCard.classList.toggle('selected')
     
  


  })


};
