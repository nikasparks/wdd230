let cityURL = ""; 
let cityURLfor = "";
// let city = "";
let title = document.querySelector("h2").textContent;
if (title === "Preston Idaho"){
  cityURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=478880ddcd6c3a44883f6715e5d40bf3'
  cityURLfor = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&APPID=478880ddcd6c3a44883f6715e5d40bf3'
  // city = "5604473"
}else if (title === "Soda Springs Idaho"){ 
  cityURL = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=478880ddcd6c3a44883f6715e5d40bf3'
  cityURLfor = 'https://api.openweathermap.org/data/2.5/forecast?id=5607916&units=imperial&APPID=478880ddcd6c3a44883f6715e5d40bf3'
  // city = "5607916"
}else if (title === "Fish Haven Idaho"){
  cityURL = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&APPID=478880ddcd6c3a44883f6715e5d40bf3'
  cityURLfor = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&APPID=478880ddcd6c3a44883f6715e5d40bf3'
  // city = "5585010"
};
// const apiURL = `https://api.openweathermap.org/data/2.5/weather?${city}&units=imperial&APPID=478880ddcd6c3a44883f6715e5d40bf3`;  
const apiURL = cityURL;
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    document.querySelector('#condition').textContent = jsObject.weather[0].main;
    document.querySelector('#temp').textContent = `${jsObject.main.temp.toFixed(0)} ℉`;
    document.querySelector('#humid').textContent = `${jsObject.main.humidity.toFixed(0)}%`;
    document.querySelector('#wspeed').textContent = `${jsObject.wind.speed.toFixed(0)} mph`;
    const temp = parseFloat(jsObject.main.temp.toFixed(0));
    const wspeed = parseFloat(jsObject.wind.speed.toFixed(0));
    const wcfactor = windChill(temp, wspeed);

  function windChill(temp, wspeed){
    let wcfactor = 0
    if (temp<=50 && wspeed>3){
        wcfactor= 35.74 + 0.6215 * temp - 35.75 * wspeed**0.16 + 0.4275 * temp * wspeed**0.16
        wcfactor= `${wcfactor.toFixed(0)}℉`
    }else{wcfactor= "N/A"}
    
    return wcfactor;
  }
  document.querySelector('#wcfactor').innerHTML = wcfactor;
  });

// const apiURLfor = 'https://api.openweathermap.org/data/2.5/forecast?${city}&units=imperial&APPID=478880ddcd6c3a44883f6715e5d40bf3'
const apiURLfor = cityURLfor;
fetch(apiURLfor)
  .then((response) => response.json())
  .then((jsObject) => {
    // console.log(jsObject);
    
    const six =  jsObject.list.filter(only => only.dt_txt.includes('18:00:00'));
    // console.log(six);

    const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    let day = 0;
    six.forEach(forecast => {
      let thedate = new Date(forecast.dt_txt);
      
      document.querySelector(`#day${day+1}`).textContent = weekdays[thedate.getDay()];
      document.querySelector(`#day${day+1}condtemp`).textContent = `${forecast.weather[0].main} ${forecast.main.temp.toFixed(0)}℉`;
      document.querySelector(`#day${day+1}icon`).setAttribute('src', `images/${forecast.weather[0].icon}-wh.png`);
      document.querySelector(`#day${day+1}icon`).setAttribute('alt', forecast.weather[0].description);
      day++;
      
    });
  });
    
    
    

    
    
    
    
    
    
    
    
    //create the card with the elements for the information
    // let card = document.createElement('section');
    // let info = document.createElement('article');
    // let h2 = document.createElement('h2');
    // let yearFounded = document.createElement('p');
    // let population = document.createElement('p');
    // let rainFall = document.createElement('p');
    // let motto = document.createElement('q');
    // let image = document.createElement('img');

    //get info from the JSON file
    // h2.innerHTML = `<span class="tName"> ${town.name}</span>`;
    // motto.innerHTML = `<span class="tMotto">${town.motto}</span>`;
    // yearFounded.innerHTML = `<span class="year"> Founded: ${town.yearFounded}</span>`;
    // population.innerHTML = `<span class="population"> Population: ${town.currentPopulation}</span>`;
    // rainFall.innerHTML = `<span class="rainfall"> Rain Fall: ${town.averageRainfall}</span>`;
    // image.setAttribute('src', `images/${town.photo}`);
    // image.setAttribute('alt', `Image of ${town.name}`);
    // image.setAttribute('loading', 'lazy');
    //Create the card
    // info.appendChild(h2);
    // info.appendChild(motto);
    // info.appendChild(yearFounded);
    // info.appendChild(population);
    // info.appendChild(rainFall);
    // card.appendChild(info);
    // card.appendChild(image);
    //send to html on page
    // document.querySelector('div.townCards').appendChild(card);








//   });
