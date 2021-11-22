const requestURL = 'https://byui-cit230.github.io/lessons/lesson-09/data/latter-day-prophets.json';

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];
    prophets.forEach(prophet => {
        //create the card with the elements for the information
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let birthplace = document.createElement('p');
        let birthdate = document.createElement('p');
        let image = document.createElement('img');

        //get info from the JSON file
        h2.innerHTML = `<span class="pName">${prophet.name} ${prophet.lastname}</span>`;
        birthdate.innerHTML = `<span class="bDate"> Date of Birth: ${prophet.birthdate}</span>`;
        birthplace.innerHTML = `<span class="bPlace"> Place of Birth: ${prophet.birthplace}</span>`;
        image.setAttribute('src', prophet.imageurl);
        image.setAttribute('alt', `${prophet.name} ${prophet.lastname} - ${prophet.order}`);
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
