
// payson lat:40.044540 long:-111.732262
const apiURL = 'https://api.openweathermap.org/data/2.5/onecall?lat=40.04&lon=-111.73&exclude=minutely,hourly&units=imperial&appid=478880ddcd6c3a44883f6715e5d40bf3';
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    

     //create the card with the elements for the information
    let curTemp = document.createElement('p');
    let cond = document.createElement('p');
    let humid = document.createElement('p');
    let image = document.createElement('img');
    let curcard = document.createElement('section');

     //get info from the JSON file
    curTemp.innerHTML = `Temprature: ${jsObject.current.temp.toFixed(0)}°F`;
    cond.innerHTML = `Condition: ${jsObject.current.weather[0].main}`;
    humid.innerHTML = `Humidity: ${jsObject.current.humidity}%`;
    image.setAttribute('src', `images/${jsObject.current.weather[0].icon}-wh.png`);
    image.setAttribute('alt', `Image of ${jsObject.current.weather[0].main} icon`);
    image.setAttribute('class', 'weaticon');

    image.setAttribute('loading', 'lazy');
    curTemp.setAttribute('class', 'curTemp');
    cond.setAttribute('class', 'cond');
    humid.setAttribute('class', 'humid');

    curcard.appendChild(curTemp);
    curcard.appendChild(humid);
    curcard.appendChild(cond);
    curcard.appendChild(image);

    document.querySelector('div.weatinfo').appendChild(curcard);

    let curTempsm = document.createElement('p');
    let condsm = document.createElement('p');
    let humidsm = document.createElement('p');
    let imagesm = document.createElement('img');
    let curcardsm = document.createElement('section');

     //get info from the JSON file
    curTempsm.innerHTML = `Temprature:<br>${jsObject.current.temp}`;
    condsm.innerHTML = `Condition:<br>${jsObject.current.weather[0].main}`;
    humidsm.innerHTML = `Humidity:<br>${jsObject.current.humidity}`;
    imagesm.setAttribute('src', `images/${jsObject.current.weather[0].icon}-wh.png`);
    imagesm.setAttribute('alt', `Image of ${jsObject.current.weather[0].main} icon`);
    imagesm.setAttribute('class', 'weaticon');

    imagesm.setAttribute('loading', 'lazy');
    curTempsm.setAttribute('class', 'curTemp');
    condsm.setAttribute('class', 'cond');
    humidsm.setAttribute('class', 'humid');


    curcardsm.appendChild(curTempsm);
    curcardsm.appendChild(humidsm);
    curcardsm.appendChild(condsm);
    curcardsm.appendChild(imagesm);

    document.querySelector('div.weatinfosm').appendChild(curcardsm);
    });

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    // const day =  jsObject.list.filter(only => only.dt_txt.includes('18:00:00'));
    const daily = jsObject['daily'];
    const milsecToDays = 86400000;
    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    let day = 1;
    // daily.forEach(forecast => {
    for (i=1; i < 4; i++){
      let thedate = new Date((daily[i].dt)*1000);
      let dayOweek = document.createElement('h3');
      let futTemp = document.createElement('p');
      let futcond = document.createElement('p');
      let futicon = document.createElement('img');
      let card = document.createElement('section')


      dayOweek.setAttribute('id', `day${day}`);
      dayOweek.textContent = `${weekdays[(thedate.getDay())]}`;
      futTemp.setAttribute('id', `day${day}temp`);
      futTemp.textContent = `${daily[i].temp.day.toFixed(0)}°F`;
      futcond.setAttribute('id', `day${day}cond`);
      futcond.textContent = `${daily[i].weather[0].main}`;
      futicon.setAttribute('id', `day${day}icon`);
      futicon.setAttribute('class', `fweaticon`);
      futicon.setAttribute('src', `images/${daily[i].weather[0].icon}-wh.png`);
      futicon.setAttribute('alt', `${daily[i].weather[0].description}`);
      day++;
      
      card.appendChild(dayOweek);
      card.appendChild(futTemp);
      card.appendChild(futcond);
      card.appendChild(futicon);

      document.querySelector('div.dayforecast').appendChild(card);

      let thedatesm = new Date((daily[i].dt)*1000);
      let dayOweeksm = document.createElement('h3');
      let futTempsm = document.createElement('p');
      let futcondsm = document.createElement('p');
      let futiconsm = document.createElement('img');
      let cardsm = document.createElement('section')


      dayOweeksm.setAttribute('id', `day${day}`);
      dayOweeksm.textContent = `${weekdays[(thedatesm.getDay())]}`;
      futTempsm.setAttribute('id', `day${day}temp`);
      futTempsm.textContent = `${daily[i].temp.day.toFixed(0)}°F`;
      futcondsm.setAttribute('id', `day${day}cond`);
      futcondsm.textContent = `${daily[i].weather[0].main}`;
      futiconsm.setAttribute('id', `day${day}icon`);
      futiconsm.setAttribute('class', `fweaticon`);
      futiconsm.setAttribute('src', `images/${daily[i].weather[0].icon}-wh.png`);
      futiconsm.setAttribute('alt', `${daily[i].weather[0].description}`);
      day++;
      
      cardsm.appendChild(dayOweeksm);
      cardsm.appendChild(futTempsm);
      cardsm.appendChild(futcondsm);
      cardsm.appendChild(futiconsm);

      document.querySelector('div.dayforecastsm').appendChild(cardsm);
    };
  });
    
