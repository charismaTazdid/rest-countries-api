
fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data));
// javascript modufied
// hotat batase Avisheker lungi akhase

// const displayCountry = countries => {
//     const div = document.getElementById('countries');
//     for (let i = 0; i < countries.length; i++) {
//         const country = countries[i];
//         console.log(country)
//         const divChild = document.createElement('div')
//         const divh1 = document.createElement('h1')
//         divh1.innerText = country.name;
//         const divh4 = document.createElement('h4')
//         divh4.innerText = country.capital;
//         divChild.appendChild(divh1)
//         divChild.appendChild(divh4)
//         div.appendChild(divChild)
//     }
// }






const displayCountry = countries => {
    const div = document.getElementById('countries');
    for (let i = 0; i < countries.length; i++) {
        const country = countries[i];
        console.log(country)
        const divChild = document.createElement('div')
        const divh1 = document.createElement('h1')
        divh1.innerText = country.name;
        const divh4 = document.createElement('h4')
        divh4.innerText = country.capital;
        divChild.appendChild(divh1)
        divChild.appendChild(divh4)
        div.appendChild(divChild)
    }
}


//here we update the UI by manually creating and append the information
// using for loop and creating elemant manually