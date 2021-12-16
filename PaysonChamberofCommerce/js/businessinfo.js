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
        address.innerHTML = `<span class="busAddress"> 📍: ${business.address}</span>`;
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

fetch(requestURL)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }
  })
  .then(function (jsonObject) {

    const eInfo = jsonObject['events'];

    eInfo.forEach(event => {
      let item = document.createElement('p');
      item.innerHTML = `<span class="tEvent"> ${event.date}: ${event.name}</span>`;
      document.querySelector('div.eList').appendChild(item);
    });
});

fetch(requestURL)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }
  })
  .then(function (jsonObject) {

    const bInfo = jsonObject['directory'];

    for (i=0; i < 3; i++){
      //create the card with the elements for the information
      let card2 = document.createElement('section');
      let info2 = document.createElement('article');
      let h2b = document.createElement('h4');
      let address2 = document.createElement('p');
      let phone2 = document.createElement('p');
      let website2 = document.createElement('p');
      let image2 = document.createElement('img');
      
      //get info from the JSON file
      h2b.innerHTML = `<span class="tName"> ${bInfo[i].name}</span>`;
      address2.innerHTML = `<span class="year"> 📍: ${bInfo[i].address}</span>`;
      phone2.innerHTML = `<span class="phone"> 📞: ${bInfo[i].phone}</span>`;
      website2.innerHTML = `<span class="website"><a href="${bInfo[i].website}" target="_self" rel="noreferrer"> 🌐: ${bInfo[i].name}</span>`;
      image2.setAttribute('src', `images/${bInfo[i].icon}`);
      image2.setAttribute('alt', `Image of ${bInfo[i].name} icon`);
      // image.setAttribute('width', '150');
      // image.setAttribute('height', '150');
      image2.setAttribute('loading', 'lazy');
      //Create the card
      info2.appendChild(h2b);
      info2.appendChild(address2);
      info2.appendChild(phone2);
      info2.appendChild(website2);
      card2.appendChild(image2);
      card2.appendChild(info2);
      
      //send to html on page
      document.querySelector('div.townCards').appendChild(card2);

      //item.innerHTML = `<span class="tEvent"> ${bInfo.directory[i].name}</span>`;
      //document.querySelector('div.eList').appendChild(item);
    

    };
});