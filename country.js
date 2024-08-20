countryData = (countryName) =>{
    fetch(`https://restcountries.com/v2/name/${countryName}?fullText=true`).then(data=>data.json()).then(data=>displayData(data))
}
displayData = (data) =>{
    for(i of data){
        countryName = i["name"];
        capital = i.capital;
        population = i.population;
        flag = i.flag;
        currency = i.currencies.map(a=>a.name);
        symbol = i.currencies.map(a=>a.symbol);
        lang = i.languages.map(a=>a.name);
    }
    result.innerHTML = `
    <div class="card" style="width:100%;">
    <img src="${flag}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class=""card-title"">${countryName}</h5>
    </div>
    <ul class="list-group list-group-flush">
    <li class="list-group-item"><strong>Capital:</strong> ${capital}</li>
    <li class="list-group-item"><strong>Population:</strong> ${population}</li>
    <li class="list-group-item"><strong>Currency:</strong> ${currency}</li>
    <li class="list-group-item"><strong>Currency Symbol:</strong> ${symbol}</li>
    <li class="list-group-item"><strong>Languages:</strong> ${lang}</li>
    </ul>
    </div>
    `
}
