//Currency
const arrowForCurrency = document.querySelector('.currency__icon-arrow--right');
const currencyContainer = document.querySelector('.currency--arrow-right');
//Commissions
const arrowForCommissions = document.querySelector('.commissions__icon-arrow--left');
const commissionsContainer = document.querySelector('.commissions--arrow-left');


//Function of currecy and commssions
function toggleCurrencyContainer() {
    /*No puedo utilizar toggle, porque la clase currency agrega display: flex
      y eso hace que no se aplique la clase inactive*/
    currencyContainer.classList.replace('currency', 'inactive');

    commissionsContainer.classList.replace('inactive', 'commissions');
}

function toggleCommissionsContainer() {
    commissionsContainer.classList.replace('commissions', 'inactive');

    currencyContainer.classList.replace('inactive', 'currency');
}

//Eventes of currency and commissions
arrowForCurrency.addEventListener('click', toggleCurrencyContainer);
arrowForCommissions.addEventListener('click', toggleCommissionsContainer);