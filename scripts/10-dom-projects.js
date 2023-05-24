function handleCostKeyDown(event) {
  if (event.key === 'Enter') {
    calculateTotal();
  }
}

function calculateTotal() {
  const inputElement = document.querySelector('.js-cost-input');
  let cost = Number(inputElement.value);

  if (cost < 40 && cost > 0) {
    cost += 10;
    removeResultError();
    document.querySelector('.js-total-result')
      .innerHTML = `$${cost}`;
      

  } else if (cost >= 40){
    removeResultError();
    document.querySelector('.js-total-result')
      .innerHTML = `$${cost}`;
      

  } else if (cost < 0 ){
    document.querySelector('.js-total-result')
      .innerHTML = `Error: cost can't be less than ${cost}`;
      addError();

  } else {
    document.querySelector('.js-total-result')
      .innerHTML = `Error: cost can't calculate ${cost}`;
      addError();
  }

  function addError() {
    document.querySelector('.js-total-result')
      .classList.add('js-total-result-error');
  }
  function removeResultError() {
    document.querySelector('.js-total-result')
      .classList.remove('js-total-result-error');
  }
}
function subscribe () {
  const buttonElement = document.querySelector('.js-subscribe-btn');

  if (buttonElement.innerText === 'Subscribe') {
    buttonElement.innerText ='Subscribed';
    buttonElement.classList.add('is-subscribed');

  } else {
    buttonElement.innerText ='Subscribe';
    buttonElement.classList.remove('is-subscribed');

  }

}