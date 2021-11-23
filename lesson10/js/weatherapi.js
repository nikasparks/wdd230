const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&APPID=478880ddcd6c3a44883f6715e5d40bf3"
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);

    // const condition = document.querySelector('#condition');
    // const temp = document.querySelector('#temp');
    // const humid = document.querySelector('#humid');
    // const wspeed = document.querySelector('#wspeed');
    document.querySelector('#condition').textContent = jsObject.weather[0].main;
    document.querySelector('#temp').textContent = `${jsObject.main.temp.toFixed(0)} ℉`;
    document.querySelector('#humid').textContent = `${jsObject.main.humidity.toFixed(0)}%`;
    document.querySelector('#wspeed').textContent = `${jsObject.wind.speed.toFixed(0)} mph`;
    const temp = parseFloat(jsObject.main.temp.toFixed(0));
    const wspeed = parseFloat(jsObject.wind.speed.toFixed(0));
    const wcfactor = windChill(temp, wspeed);
    const weathericon = document.querySelector('#icon');

  function windChill(temp, wspeed){
    let wcfactor = 0
    if (temp<=50 && wspeed>3){
        wcfactor= 35.74 + 0.6215 * temp - 35.75 * wspeed**0.16 + 0.4275 * temp * wspeed**0.16
    }
    return wcfactor;
  }

    // let imgsrc =  `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    // let imgalt = jsObject.weather[0].description;

    condition.textContent = jsObject.weather[0].main;
    // temp.textContent = `${jsObject.main.temp.toFixed(0)} ℉`;
    humid.textContent = `${jsObject.main.humidity.toFixed(0)}%`;
    // wspeed.textContent = `${jsObject.wind.speed.toFixed(0)} mph`;

    // weathericon.setAttribute('src', imgsrc);
    // weathericon.setAttribute('alt', imgalt);
  
  document.querySelector('#wcfactor').innerHTML = `${wcfactor.toFixed(1)}℉`;

  });



