// const loadCountries = () => {
//     fetch("https://restcountries.com/v3.1/all")
//         .then(res => res.json())
//         .then(data => displayCountries(data))
// }

const loadCountries = () => {
    fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => console.log(data))
}

loadCountries();

const displayCountries = (countries) => {
    // console.log(countries[0]);

    const [name, capital, flags] = countries;
    const container = document.getElementById("countries");
    const countryHTML = countries.map(country => getCountryHTML(country));
    container.innerHTML = countryHTML.join(" ");
    console.log(countryHTML[0])


}

const getCountryHTML = country => {
    return `

    <div class="country">
        <h2>${name.common}</h2>
        <h4>${capital}</h4>
        <img src="${flags.png}"/>>
    
    </div>
    
    
    `
}


