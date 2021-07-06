// fetch('https://restcountries.eu/rest/v2/all')
//     .then(res => res.json())
//     .then(data => displayCountry(data))


// const displayCountry = countries =>{
//     const mainDiv = document.getElementById('countries');
//     countries.forEach(country => {
//         const countryDiv = document.createElement('div');
//         countryDiv.className = 'country-info'
//         const info = `
//         <h2> ${country.name} </h2>
//         <h5> ${country.capital} </h5>
//         `
//         countryDiv.innerHTML = info;

//         mainDiv.appendChild(countryDiv)

//     });
// }

//here we do same thing by advance way, using forEach loop and `teamplate string`




// this part will add Show details button
fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data))

const displayCountry = countries => {
    const mainDiv = document.getElementById('countries');
    countries.forEach(country => {
        const countryDiv = document.createElement('div');
        countryDiv.className = 'country-info'
        const info = `
        <h2> ${country.name} </h2>
        <h5> ${country.capital} </h5>
        <button id="btn" onclick="showDetails('${country.name}')"> Explore Details </button>   `
        countryDiv.innerHTML = info;
        mainDiv.appendChild(countryDiv)
    });
}

const showDetails = countryName => {
    const url = `https://restcountries.eu/rest/v2/name/${countryName}`;
    fetch(url)
        .then(res => res.json())
        .then(data => updateDetails(data[0]))
}

const updateDetails = detail =>{
    const detailDiv = document.getElementById('details')
    detailDiv.innerHTML = `
    <h2> ${detail.name} </h2>
    <p> Also Known as: ${detail.altSpellings[1]} </p>
    <p> Capital: ${detail.capital} </p>
    <p> Totol Population: ${detail.population} </p>
    <p> Area: ${detail.area} </p>
    <img id="flag" src="${detail.flag}">

    
    `
}