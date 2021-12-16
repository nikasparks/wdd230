const requestURL = 'businesses.json';

fetch(requestURL)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }
  })
  .then(function (jsonObject) {
    
    const busInfo = jsonObject['directory'];

    // const only = busInfo.filter((business) => town.name === 'Preston' || town.name === 'Fish Haven' || town.name === 'Soda Springs');
    

    busInfo.forEach(business => {
        //create the card with the elements for the information
        let card = document.createElement('section');
        let info = document.createElement('article');
        let h2 = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');
        let image = document.createElement('img');

        //get info from the JSON file
        h2.innerHTML = `<span class="tName"> ${business.name}</span>`;
        address.innerHTML = `<span class="year"> 📍: ${business.address}</span>`;
        phone.innerHTML = `<span class="phone"> 📞: ${business.phone}</span>`;
        website.innerHTML = `<span class="website"><a href="${business.website}" target="_self" rel="noreferrer"> 🌐: ${business.name}</span>`;
        image.setAttribute('src', `images/${business.icon}`);
        image.setAttribute('alt', `Image of ${business.name} icon`);
        // image.setAttribute('width', '150');
        // image.setAttribute('height', '150');
        image.setAttribute('loading', 'lazy');
        //Create the card
        info.appendChild(h2);
        info.appendChild(address);
        info.appendChild(phone);
        info.appendChild(website);
        card.appendChild(image);
        card.appendChild(info);
        
        //send to html on page
        document.querySelector('div.businessCards').appendChild(card);
        
    });
    
});
