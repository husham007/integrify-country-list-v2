// Listeners and supportive Functions


import * as module from "./script.js";

export const showCountries = countries => {
  module.countriesWrapper.innerHTML = " ";
  countries.forEach(country => {
    showCountry(country);
  });
  module.resultElement.className = "result-green";
  module.resultElement.textContent = `Number of found Countries are: ${
    countries.length
  }`;
};

function showCountry(country) {
  let countryDiv = document.createElement("div");
  let imageDiv = document.createElement("div");
  let content = document.createElement("div");
  let image = document.createElement("img");

  countryDiv.className = "country";
  // countryContent.className = 'country-content';
  image.src = country.flag;
  content.textContent = country.name;
  //countryContent.appendChild(content);
  imageDiv.appendChild(image);
  countryDiv.appendChild(image);
  countryDiv.appendChild(content);
  module.countriesWrapper.appendChild(countryDiv);
}


export function btnListener(e) {
  reset();
  
  if (module.input.value !== null) {    
    var event = new Event("input", {
      bubbles: true,
      cancelable: true
    });
    module.input.dispatchEvent(event);
  }
}

export function reverseBtnListener(e) {
  reset();
  module.input.value = null;
  if (e.target.className === "fas fa-sort-alpha-up fa-4x icon")
    e.target.className = "fas fa-sort-alpha-down fa-4x icon";
  else e.target.className = "fas fa-sort-alpha-up fa-4x icon";
  
  showCountries(module.countries.reverse());
}

export function inputListener() {
  if (validInputs()) {
    if (module.startBtn.checked) {
      let result = module.countries.filter(country => {
        return country.name
          .toUpperCase()
          .startsWith(module.input.value.toUpperCase());
      });
      showCountries(result);
    } else if (module.searchBtn.checked) {
      let result = module.countries.filter(country => {
        return country.name
          .toUpperCase()
          .includes(module.input.value.toUpperCase());
      });
      showCountries(result);    
    }
  } 
  else showCountries(module.countries);
  
}

function validInputs() {
  module.errorElement.innerHTML = "";
  if (!module.input.value) {
    
    module.errorElement.className = "result-red";
    module.errorElement.textContent = "Please Enter in the search field "   
    return false;
  } else if (!module.input.value.match(/^[A-Za-z]+$/g)) {
    module.errorElement.className = "result-red";
    module.errorElement.textContent = "Only Alphabetical keys dude!! :) ";
    return false;
  } else return true;
}

const element = (elementType, textContent, className, color) => {
  const element = document.createElement(elementType);
  element.textContent = textContent;
  element.className = className;
  element.style.background = color;
  return element;
};

function reset() {
  module.resultElement.textContent = null;
  module.errorElement.textContent = null;
  module.resultElement.className = null;
  module.errorElement.className = null;
}

export function inputClickListener(e){
  document.querySelector('.input-wrapper').style.border= '2px solid black';
}

export function inputBlurListener(e){
  document.querySelector('.input-wrapper').style.border= null;
}
