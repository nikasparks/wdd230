
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

     //get info from the JSON file
     curTemp.innerHTML = `Temprature:<br>${jsObject.current.temp}`;
     cond.innerHTML = `Condition:<br>${jsObject.current.weather[0].main}`;
     humid.innerHTML = `Humidity:<br>${jsObject.current.humidity}`;
     image.setAttribute('src', `images/${jsObject.current.weather[0].icon}-wh.png`);
     image.setAttribute('alt', `Image of ${jsObject.current.weather[0].main} icon`);
     image.setAttribute('class', 'weaticon');

     image.setAttribute('loading', 'lazy');
     curTemp.setAttribute('class', 'curTemp');
     cond.setAttribute('class', 'cond');
     humid.setAttribute('class', 'humid');

     
     //send to html on page
     document.querySelector('div.weatinfo').appendChild(curTemp);
     document.querySelector('div.weatinfo').appendChild(humid);
     document.querySelector('div.weatinfo').appendChild(cond);
     document.querySelector('div.weatinfo').appendChild(image);
    });

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    
    // const day =  jsObject.list.filter(only => only.dt_txt.includes('18:00:00'));
    const daily = jsObject['daily'];

    const weekdays = ['Sun', 'Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat'];
    let day = 0;
    // daily.forEach(forecast => {
    for (i=0; i < 3; i++){
      let thedate = new Date(daily.dt);
      let theOweek = document.createElement('h2');
      let futTemp = document.createElement('p');
      let futcond = document.createElement('p');
      let futicon = document.createElement('img');
      let card = document.createElement('section')
      

      theOweek.innerHTML = `${}`; 
      document.querySelector(`#day${day+1}`).textContent = weekdays[thedate.getDay()];
      document.querySelector(`#day${day+1}condtemp`).textContent = `${forecast.weather[0].main} ${forecast.main.temp.toFixed(0)}℉`;
      document.querySelector(`#day${day+1}icon`).setAttribute('src', `images/${forecast.weather[0].icon}-wh.png`);
      document.querySelector(`#day${day+1}icon`).setAttribute('alt', forecast.weather[0].description);
      day++;
      
    };
  });
    
