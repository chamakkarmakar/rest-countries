const loadCountries = () => {
    const url = 'https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountries(data));
}
const displayCountries = countries =>{
    // console.log(countries[0]);
    const container = document.getElementById('countries');
    const countriesHTML = countries.map(country => {
        const display = `
        <div class="country">
        <h2>${country.name.common}</h2>
        <img src="${country.flags.png}" alt="">

    </div>
        `
        return display;
    });
    // console.log(countriesHTML);
    container.innerHTML=countriesHTML.join(' ');
}
loadCountries();