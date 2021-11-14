const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const townInfo = jsonObject['townInfo'];

    const town = townInfo.filter((town) => town.name === 'Preston' || town.name === 'Fish Haven' || town.name === 'Soda Springs')
    town.forEach(town => {
        //create the card with the elements for the information
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthplace = document.createElement('p');
        let birthdate = document.createElement('p');
        let image = document.createElement('img');

        //get info from the JSON file
        h2.innerHTML = `<span class="pName">${town.name} ${town.lastname}</span>`;
        birthdate.innerHTML = `<span class="bDate"> Date of Birth:${town.birthdate}</span>`;
        birthplace.innerHTML = `<span class="bPlace"> Place of Birth:${town.birthplace}</span>`;
        image.setAttribute('src', town.imageurl);
        image.setAttribute('alt', `${town.name} ${town.lastname} - ${town.order}`);
        image.setAttribute('loading', 'lazy');
        //Create the card
        card.appendChild(h2);
        card.appendChild(birthdate);
        card.appendChild(birthplace);
        card.appendChild(image);
        //send to html on page
        document.querySelector('div.cards').appendChild(card);
    });
});
