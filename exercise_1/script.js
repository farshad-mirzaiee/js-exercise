const checkBox = document.querySelector('input');
const para = document.querySelector('p');
let shoppingDone = false;

checkBox.addEventListener('change', () => {
    checkBox.disabled = true;
    shoppingDone = true;
    updateAllowance();
});

function updateAllowance() {
    let childsAllowance;
    if (shoppingDone === true){
        childsAllowance = 10;
    } else {
        childsAllowance = 5;
    }

    para.textContent = `Child hass earned \$${childsAllowance} this week.`
}

updateAllowance();