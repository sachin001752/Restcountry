let newPage = document.querySelector(".newPage");

newPage.innerHTML = `
  <nav>
      <div class="logo">
        <p class="logo-text">Where in the world?</p>
      </div>
    </nav>
    <main>
      <div class="back-home">
        <button class="back-btn">
          <img src="./img/back-arrow.png" alt="" class="back-arrow" />
          <span class="back">back</span>
        </button>
      </div>
      <div class="search-container">
        <input type="text" placeholder="Search country..." id="searchCountry" class="newPageSearch"/>

        <button class="search-btn find-btn">Find</button>
      </div>
      <div class="country-details-container">
        <div class="flag-info">
          <img class="flag-img" src="https://flagcdn.com/in.svg" alt="" />
        </div>
        <div class="country-info-container">
          <h1 class="country-name">India</h1>
          <div class="country-detail">
            <div class="country-left-detail">
              <p class="native-name">
                Native Name : <span class="tetx native-name-text"> भारत</span>
              </p>
              <p class="population">
                population : <span class="population-text"> 1380M</span>
              </p>
              <p class="Region">
                Region: <span class="region-text">Asia</span>
              </p>
              <p class="sub-region">
                Sub Region : <span class="sub-region-text">Southern Asia</span>
              </p>
              <p class="capital">
                capital : <span class="capital-text">New Delhi</span>
              </p>
            </div>
            <div class="country-right-detail">
              <p class="currency">
                currancy : <span class="currency-text"> Indian rupee</span>
              </p>
              <p class="language">
                language : <span class="language-text">Hindi</span>
              </p>
              <p class="area">area : <span class="area-text">3M</span></p>
            </div>
          </div>
          <div class="border-country">
            <p class="border">
              borders Country :
              <span class="border-country-text"
                >AFG,BGD,BTN,MMR,CHN,NPL,PAK,LKA</span
              >
            </p>
          </div>
        </div>
      </div>
    </main>     

  `;
let searchCity = document.querySelector("#searchCountry");
let newSearchcity = document.querySelector(".newPageSearch");
// let searchCity1 = document.querySelector("#searchCountry");
let searchBtn = document.querySelector(".search-btn");
let newSearchbtn = document.querySelector(".find-btn");
let countryName = document.querySelector(".country-name");
let flagimg = document.querySelector(".flag-img");
let nativeName = document.querySelector(".native-name-text");
let population = document.querySelector(".population-text");
let region = document.querySelector(".region-text");
let subRegion = document.querySelector(".sub-region-text");
let capital = document.querySelector(".capital-text");
let currency = document.querySelector(".currency-text");
let language = document.querySelector(".language-text");
let area = document.querySelector(".area-text");
let borderCountry = document.querySelector(".border-country-text");
let backButton = document.querySelector(".back-btn");
let countryBox = document.querySelectorAll(".country-box");
let boxFlagImg = document.querySelectorAll(".country-flag");
let boxCountryName = document.querySelectorAll(".Country-name");
let boxNativename = document.querySelectorAll(".native-name");
let boxRegion = document.querySelectorAll(".country-region");
let boxSubReigion = document.querySelectorAll(".country-sub-region");
let boxBorderCountry = document.querySelectorAll(".country-border");
let boxCapitalName = document.querySelectorAll(".country-capital");
let boxPopulation = document.querySelectorAll(".country-population");
let boxLanguage = document.querySelectorAll(".country-language");
let boxCurrency = document.querySelectorAll(".country-currency");
let boxArea = document.querySelectorAll(".country-area");
let modal = document.querySelector(".modal");

function addPage() {
  newPage.style.display = "block";
}
function removePage() {
  newPage.style.display = "none";
  searchCity.value = "";
}

searchBtn.addEventListener("click", cityInfo);
newSearchbtn.addEventListener("click", newcityInfo);

for (let i = 0; i < countryBox.length; i++) {
  countryBox[i].addEventListener("click", function () {
    addPage();
    countryName.textContent = boxCountryName[i].textContent;
    nativeName.textContent = boxNativename[i].textContent;
    region.textContent = boxRegion[i].textContent;
    population.textContent = boxPopulation[i].textContent;
    capital.textContent = boxCapitalName[i].textContent;
    flagimg.src = boxFlagImg[i].src;
    currency.textContent = boxCurrency[i].textContent;
    language.textContent = boxLanguage[i].textContent;
    area.textContent = boxArea[i].textContent;
    subRegion.textContent = boxSubReigion[i].textContent;
    borderCountry.textContent = boxBorderCountry[i].textContent;
  });
}
backButton.addEventListener("click", removePage);

searchCity.addEventListener("keypress", function (e) {
  if (e.key == "Enter") {
    cityInfo();
  }
});
newSearchcity.addEventListener("click", function (e) {
  if (e.key == "Enter") {
    newcityInfo();
  }
});

function cityInfo() {
  if (searchCity.value != "") {
    countryDetail();
    addPage();
  }
}
function newcityInfo() {
  if (newSearchcity.value != "") {
    countryDetailNew();
  }
}

function countryDetail() {
  fetch(`httpsname://restcountries.com/v2/${searchCity.value}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      if (response.length < 3) {
        countryName.textContent = response[response.length - 1].name;
        flagimg.src = response[response.length - 1].flag;
        if (Number(response[response.length - 1].population) > 1000000) {
          population.textContent = `${Math.trunc(
            Number(response[response.length - 1].population) / 1000000
          )}M`;
        } else {
          population.textContent = response[response.length - 1].population;
        }
        nativeName.textContent = response[response.length - 1].nativeName;
        region.textContent = response[response.length - 1].region;
        subRegion.textContent = response[response.length - 1].subregion;
        capital.textContent = response[response.length - 1].capital;
        currency.textContent = response[response.length - 1].currencies[0].name;
        language.textContent = response[response.length - 1].languages[0].name;
        area.textContent = response[response.length - 1].area;
        borderCountry.textContent = response[response.length - 1].borders;
      } else if (response.length >= 3) {
        countryName.textContent = response[response.length - 2].name;
        flagimg.src = response[response.length - 2].flag;
        if (Number(response[response.length - 2].population) > 1000000) {
          population.textContent = `${Math.trunc(
            Number(response[response.length - 2].population) / 1000000
          )}M`;
        } else {
          population.textContent = response[response.length - 2].population;
        }
        nativeName.textContent = response[response.length - 2].nativeName;
        region.textContent = response[response.length - 2].region;
        subRegion.textContent = response[response.length - 2].subregion;
        capital.textContent = response[response.length - 2].capital;
        currency.textContent = response[response.length - 2].currencies[0].name;
        language.textContent = response[response.length - 2].languages[0].name;
        area.textContent = response[response.length - 2].area;

        borderCountry.textContent = response[response.length - 2].borders;
        if (searchCity.value == "china") {
          nativeName.textContent = response[0].nativeName;
          region.textContent = response[0].region;
          subRegion.textContent = response[0].subregion;
          capital.textContent = response[0].capital;
          currency.textContent = response[0].currencies[0].name;
          language.textContent = response[0].languages[0].name;
          area.textContent = response[0].area;
          borderCountry.textContent = response[0].borders;
        }
      }

      if (borderCountry.textContent == "") {
        borderCountry.textContent = "Country border the ocean";
      }
    });
}
function countryDetailNew() {
   fetch(`https://restcountries.com/v2/name/${newSearchcity.value}`)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
      countryName.textContent = response[response.length - 1].name;
      flagimg.src = response[response.length - 1].flag;
      if (Number(response[response.length - 1].population) > 1000000) {
        population.textContent = `${Math.trunc(
          Number(response[response.length - 1].population) / 1000000
        )}M`;
      } else {
        population.textContent = response[response.length - 1].population;
      }
      nativeName.textContent = response[response.length - 1].nativeName;
      region.textContent = response[response.length - 1].region;
      subRegion.textContent = response[response.length - 1].subregion;
      capital.textContent = response[response.length - 1].capital;
      currency.textContent = response[response.length - 1].currencies[0].name;
      language.textContent = response[response.length - 1].languages[0].name;
      area.textContent = response[response.length - 1].area;

      borderCountry.textContent = response[response.length - 1].borders;
      if (
        searchCity.textContent == "china" ||
        newSearchcity.textContent == "china"
      ) {
        countryName.textContent = response[0].name;
        flagimg.src = response[0].flag;
        if (Number(response[0].population) > 1000000) {
          population.textContent = `${Math.trunc(
            Number(response[0].population) / 1000000
          )}M`;
        } else {
          population.textContent = response[0].population;
        }
        nativeName.textContent = response[0].nativeName;
        region.textContent = response[0].region;
        subRegion.textContent = response[0].subregion;
        capital.textContent = response[0].capital;
        currency.textContent = response[0].currencies[0].name;
        language.textContent = response[0].languages[0].name;
        area.textContent = response[0].area;

        borderCountry.textContent = response[0].borders;
      }

      if (borderCountry.textContent == "") {
        borderCountry.textContent = "Country border the ocean";
      }
    });
}
function countrydetailnew() {
  let country = document.getElementById("countryInput").value.trim().toLowerCase();
  let audio = document.getElementById("anthemAudio");

  
  const api = {
    "india": "./audio/anthems/india.mp3",
    "usa": "./audio/anthems/usa.mp3",
    "france": "./audio/anthems/france.mp3",
    "japan": "./audio/anthems/japan.mp3",
    // add more countries here
  };

  if (anthemList[country]) {
    audio.src = anthemList[country];
    audio.play();
  } else {
    alert("Anthem not found! Please check the country name.");
  }
}




// An array containing all the country names in the world
// var countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua & Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia & Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre & Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts & Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad & Tobago","Tunisia","Turkey","Turkmenistan","Turks & Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];

// initiate the autocomplete function on the "myInput" element, and pass along the countries array as possible autocomplete values:
// autocomplete(searchCity, countries);

