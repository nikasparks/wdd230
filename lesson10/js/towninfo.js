const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const townInfo = jsonObject['towns'];

    const only = townInfo.filter((town) => town.name === 'Preston' || town.name === 'Fish Haven' || town.name === 'Soda Springs');
    only.forEach(town => {
        //create the card with the elements for the information
        let card = document.createElement('section');
        let info = document.createElement('article');
        let h2 = document.createElement('h2');
        let yearFounded = document.createElement('p');
        let population = document.createElement('p');
        let rainFall = document.createElement('p');
        let motto = document.createElement('q');
        let image = document.createElement('img');

        //get info from the JSON file
        h2.innerHTML = `<span class="tName"> ${town.name}</span>`;
        motto.innerHTML = `<span class="tMotto">${town.motto}</span>`;
        yearFounded.innerHTML = `<span class="year"> Founded: ${town.yearFounded}</span>`;
        population.innerHTML = `<span class="population"> Population: ${town.currentPopulation}</span>`;
        rainFall.innerHTML = `<span class="rainfall"> Rain Fall: ${town.averageRainfall}</span>`;
        image.setAttribute('src', `images/${town.photo}`);
        image.setAttribute('alt', `Image of ${town.name}`);
        image.setAttribute('loading', 'lazy');
        //Create the card
        info.appendChild(h2);
        info.appendChild(motto);
        info.appendChild(yearFounded);
        info.appendChild(population);
        info.appendChild(rainFall);
        card.appendChild(info);
        card.appendChild(image);
        //send to html on page
        document.querySelector('div.townCards').appendChild(card);
        
    });
});
