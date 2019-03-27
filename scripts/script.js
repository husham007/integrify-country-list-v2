/*
  Countries filter script
  Author: Husham
  License: free to use
*/

import * as module from "./functions.js";

export const startBtn = document.querySelector("#start");
export const searchBtn = document.querySelector("#include");
export const reverseBtn = document.querySelector(".fa-sort-alpha-down");
export const resultElement = document.querySelector(".result");
export const errorElement = document.querySelector(".error");
export const input = document.querySelector(".input-text");
export const countriesWrapper = document.querySelector(".countries-wrapper");
export let countries = [];

const url = "https://restcountries.eu/rest/v2/all"; // Get countries


// Feetching data from API
fetch(url)
  .then(resp => resp.json()) // Transform the data into json
  .then(function(data) {
    countries = [...data]; // cloning the data
    module.showCountries(countries);
  })
  .catch(function(error) {
    console.log(error);
  });

// Event Listeners registration

startBtn.addEventListener("click", module.btnListener);
searchBtn.addEventListener("click", module.btnListener);
reverseBtn.addEventListener("click", module.reverseBtnListener);
input.addEventListener("input", module.inputListener);
input.addEventListener("click", module.inputClickListener);
input.addEventListener("blur", module.inputBlurListener);

