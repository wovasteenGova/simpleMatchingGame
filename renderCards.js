export const cardContainer = document.querySelector(".cardContainer");

export const renderCards = function (numberOfCards) {
  const numbers = [];
  const matchedNumbers = []

  for (let i = 0; i < numberOfCards; i++) numbers.push(i);
  numbers.forEach(function (el) {
    const random = Math.trunc(Math.random() * 20)
    matchedNumbers.push(random)



    const markup = `
      <div class="cards" data-key="${numbers[0]++}" >
      <span></span>
    </div>
      `;
    cardContainer.insertAdjacentHTML("afterbegin", markup);
  });


  console.log(matchedNumbers)
};
