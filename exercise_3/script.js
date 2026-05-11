const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener("change", setWeather);

function setWeather() {
    const choice = select.value;

    if(choice === 'sunny') {
        para.textContent = 'It is nice and sunny today. Wear shorts! Go to the beach, or to the park, and get an ice cream.';
    } else if (choice = 'rainy') {
        para.textContent = 'It is rainy outside; take a rain coat and a brolly, and don\'t stay out for too long.'
    }
}