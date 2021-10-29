/*
* Defining Table
* Input(s): Current temperature in F and current wind speed.
* Processing: Use f = 35.74 + 0.6215 t - 35.75 s^0.16 + 0.4275 t s^0.16 and inputs to find the wind chill.
* Output(s):wind chill in F 
*/
 
let temp=parseFloat(document.querySelector('#temp').textContent);
let wspeed=parseFloat(document.querySelector('#wspeed').textContent); 
let wcfactor=windChill(temp, wspeed).toFixed(1);


function windChill(temp, wspeed){
    let wcfactor = 0
    if (temp<=50 && wspeed>3.0){
        wcfactor= 35.74 + 0.6215 * temp - 35.75 * wspeed**0.16 + 0.4275 * temp * wspeed**0.16
    }
    return wcfactor;
}

document.querySelector('#wcfactor').innerHTML = `${wcfactor}℉`;
