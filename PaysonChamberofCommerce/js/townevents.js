const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';
let curTown = "";
if (document.querySelector("h2.cityName").textContent === "Preston Idaho"){
  curTown = "Preston";
} else if (document.querySelector("h2.cityName").textContent === "Soda Springs Idaho"){
  curTown = "Soda Springs";
} else {
  curTown = "Fish Haven";
};


fetch(requestURL)
  .then(function (response) {
    if (!response.ok) {
      throw Error(response.statusText);
    } else {
    return response.json();
    }
  })
  .then(function (jsonObject) {
    
    const townInfo = jsonObject['towns'];
    const only = townInfo.filter((town) => town.name === 'Preston' || town.name === 'Fish Haven' || town.name === 'Soda Springs');

    only.forEach(town => {
    
      if (town.name === curTown){
        for (i=0; i < town.events.length; i++){
          let item = document.createElement('p');
          item.innerHTML = `<span class="tEvent"> ${town.events[i]}</span>`;
          document.querySelector('div.eList').appendChild(item);
        };
      }
    });  
});
