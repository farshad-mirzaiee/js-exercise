const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    if(choice === 'sunny') {
        para.textContent = 'It is nice and sunny today. Wear shorts! Go to the beach, or to the park, and get an ice cream.';
    } else if (choice === 'rainy') {
        para.textContent = 'It is rainy outside; take a rain coat and a brolly, and don\'t stay out for too long.';
    } else if (choice === 'snowy') {
        para.textContent = 'Winter is coming! Best to go to the wall and join the Night Watchers! Become the Lord commander';
    } else if (choice === 'overcast') {
        para.textContent = 'It is cloudy! Not raining yet, but best to take a rain coat and a brolly just be on the safe side.';
    } else {
        para.textContent = '';
    }
}