const controlBlock = `<div class="control-block">
    <div class="control-block_buttons">
    <label class="change-color">
     <input type="color" value="#ffffff">
     <div class="circle"></div>
    </label>
      <img id="load-bg" src="src/icons/reload.svg" width="45" height="45">
      <select class="control-block_languages">
        <option value="en">EN</option>
        <option value="ru">RU</option>
        <option value="be">BE</option>
      </select>
      <div class="control-block_choose-degrees">
        <div class="labels-for-degrees-inputs">
          <input id="celsius" type="radio" name="degrees" value="c" checked>
          <label for="celsius">
            <div class="celsius">
              <p>°C</p>
            </div>
          </label>
          <input id="fahrenheit" type="radio" name="degrees" value="f">
          <label for="fahrenheit">
            <div class="fahrenheit">
              <p>°F</p>
            </div>
          </label>
        </div>
      </div>
    </div>
    <div class="control-block_search">
      <div class="search-input">
        <input id="search-input" type="text">
        <img id="micro" src="src/icons/microfon.png" width="14.5" height="17" alt="micro">
      </div>
      <div id="search-btn" class="search-btn">
        <p>SEARCH</p>
      </div>
    </div>
  </div>`;


const weatherFor3DaysBlock = `<div class="weather-for-3-days">
             <div class="weather-for-3-days_element weather-for-3-days_element-1">
               <p></p>
               <div class="temperature-next-days">
                 <p></p>
                 <img src="" alt="">
               </div>
             </div>
             <div class="weather-for-3-days_element weather-for-3-days_element-2">
               <p></p>
               <div class="temperature-next-days">
                 <p></p>
                 <img src="" alt="">
               </div>
             </div>
             <div class="weather-for-3-days_element weather-for-3-days_element-3">
               <p></p>
               <div class="temperature-next-days">
                 <p></p>
                 <img src="" alt="">
               </div>
             </div>
           </div>`;


const weatherForTodayBlock = `<div class="weather-for-today">
                              <h2></h2>
                              <h4></h4>
                              <div class="weather-for-today_weather-description-block">
                                <div class="temperature">
                                  <p></p>
                                  <img src="">
                                </div>
                                <div class="weather-description">
                                  <div class="weather-description-params">
                                    <p class="description"></p>
                                    <p class="feels-like-temp"></p>
                                    <p class="wind-speed"></p>
                                    <p class="humidity"></p>
                                  </div>
                                </div>
                              </div>
                            </div>`;

const mapBlock = `<div class="map-container">
         <div id="map"></div>
         <p class="lon">Longitude:</p>
         <p class="lat">Latitude:</p>
       </div>`;


const fullCountryNames = {
   BD: 'Bangladesh',
   BE: 'Belgium',
   BF: 'Burkina Faso',
   BG: 'Bulgaria',
   BA: 'Bosnia and Herzegovina',
   BB: 'Barbados',
   WF: 'Wallis and Futuna',
   BL: 'Saint Barthelemy',
   BM: 'Bermuda',
   BN: 'Brunei',
   BO: 'Bolivia',
   BH: 'Bahrain',
   BI: 'Burundi',
   BJ: 'Benin',
   BT: 'Bhutan',
   JM: 'Jamaica',
   BV: 'Bouvet Island',
   BW: 'Botswana',
   WS: 'Samoa',
   BQ: 'Bonaire, Saint Eustatius and Saba ',
   BR: 'Brazil',
   BS: 'Bahamas',
   JE: 'Jersey',
   BY: 'Belarus',
   BZ: 'Belize',
   RU: 'Russia',
   RW: 'Rwanda',
   RS: 'Serbia',
   TL: 'East Timor',
   RE: 'Reunion',
   TM: 'Turkmenistan',
   TJ: 'Tajikistan',
   RO: 'Romania',
   TK: 'Tokelau',
   GW: 'Guinea-Bissau',
   GU: 'Guam',
   GT: 'Guatemala',
   GS: 'South Georgia and the South Sandwich Islands',
   GR: 'Greece',
   GQ: 'Equatorial Guinea',
   GP: 'Guadeloupe',
   JP: 'Japan',
   GY: 'Guyana',
   GG: 'Guernsey',
   GF: 'French Guiana',
   GE: 'Georgia',
   GD: 'Grenada',
   GB: 'United Kingdom',
   GA: 'Gabon',
   SV: 'El Salvador',
   GN: 'Guinea',
   GM: 'Gambia',
   GL: 'Greenland',
   GI: 'Gibraltar',
   GH: 'Ghana',
   OM: 'Oman',
   TN: 'Tunisia',
   JO: 'Jordan',
   HR: 'Croatia',
   HT: 'Haiti',
   HU: 'Hungary',
   HK: 'Hong Kong',
   HN: 'Honduras',
   HM: 'Heard Island and McDonald Islands',
   VE: 'Venezuela',
   PR: 'Puerto Rico',
   PS: 'Palestinian Territory',
   PW: 'Palau',
   PT: 'Portugal',
   SJ: 'Svalbard and Jan Mayen',
   PY: 'Paraguay',
   IQ: 'Iraq',
   PA: 'Panama',
   PF: 'French Polynesia',
   PG: 'Papua New Guinea',
   PE: 'Peru',
   PK: 'Pakistan',
   PH: 'Philippines',
   PN: 'Pitcairn',
   PL: 'Poland',
   PM: 'Saint Pierre and Miquelon',
   ZM: 'Zambia',
   EH: 'Western Sahara',
   EE: 'Estonia',
   EG: 'Egypt',
   ZA: 'South Africa',
   EC: 'Ecuador',
   IT: 'Italy',
   VN: 'Vietnam',
   SB: 'Solomon Islands',
   ET: 'Ethiopia',
   SO: 'Somalia',
   ZW: 'Zimbabwe',
   SA: 'Saudi Arabia',
   ES: 'Spain',
   ER: 'Eritrea',
   ME: 'Montenegro',
   MD: 'Moldova',
   MG: 'Madagascar',
   MF: 'Saint Martin',
   MA: 'Morocco',
   MC: 'Monaco',
   UZ: 'Uzbekistan',
   MM: 'Myanmar',
   ML: 'Mali',
   MO: 'Macao',
   MN: 'Mongolia',
   MH: 'Marshall Islands',
   MK: 'Macedonia',
   MU: 'Mauritius',
   MT: 'Malta',
   MW: 'Malawi',
   MV: 'Maldives',
   MQ: 'Martinique',
   MP: 'Northern Mariana Islands',
   MS: 'Montserrat',
   MR: 'Mauritania',
   IM: 'Isle of Man',
   UG: 'Uganda',
   TZ: 'Tanzania',
   MY: 'Malaysia',
   MX: 'Mexico',
   IL: 'Israel',
   FR: 'France',
   IO: 'British Indian Ocean Territory',
   SH: 'Saint Helena',
   FI: 'Finland',
   FJ: 'Fiji',
   FK: 'Falkland Islands',
   FM: 'Micronesia',
   FO: 'Faroe Islands',
   NI: 'Nicaragua',
   NL: 'Netherlands',
   NO: 'Norway',
   NA: 'Namibia',
   VU: 'Vanuatu',
   NC: 'New Caledonia',
   NE: 'Niger',
   NF: 'Norfolk Island',
   NG: 'Nigeria',
   NZ: 'New Zealand',
   NP: 'Nepal',
   NR: 'Nauru',
   NU: 'Niue',
   CK: 'Cook Islands',
   XK: 'Kosovo',
   CI: 'Ivory Coast',
   CH: 'Switzerland',
   CO: 'Colombia',
   CN: 'China',
   CM: 'Cameroon',
   CL: 'Chile',
   CC: 'Cocos Islands',
   CA: 'Canada',
   CG: 'Republic of the Congo',
   CF: 'Central African Republic',
   CD: 'Democratic Republic of the Congo',
   CZ: 'Czech Republic',
   CY: 'Cyprus',
   CX: 'Christmas Island',
   CR: 'Costa Rica',
   CW: 'Curacao',
   CV: 'Cape Verde',
   CU: 'Cuba',
   SZ: 'Swaziland',
   SY: 'Syria',
   SX: 'Sint Maarten',
   KG: 'Kyrgyzstan',
   KE: 'Kenya',
   SS: 'South Sudan',
   SR: 'Suriname',
   KI: 'Kiribati',
   KH: 'Cambodia',
   KN: 'Saint Kitts and Nevis',
   KM: 'Comoros',
   ST: 'Sao Tome and Principe',
   SK: 'Slovakia',
   KR: 'South Korea',
   SI: 'Slovenia',
   KP: 'North Korea',
   KW: 'Kuwait',
   SN: 'Senegal',
   SM: 'San Marino',
   SL: 'Sierra Leone',
   SC: 'Seychelles',
   KZ: 'Kazakhstan',
   KY: 'Cayman Islands',
   SG: 'Singapore',
   SE: 'Sweden',
   SD: 'Sudan',
   DO: 'Dominican Republic',
   DM: 'Dominica',
   DJ: 'Djibouti',
   DK: 'Denmark',
   VG: 'British Virgin Islands',
   DE: 'Germany',
   YE: 'Yemen',
   DZ: 'Algeria',
   US: 'United States',
   UY: 'Uruguay',
   YT: 'Mayotte',
   UM: 'United States Minor Outlying Islands',
   LB: 'Lebanon',
   LC: 'Saint Lucia',
   LA: 'Laos',
   TV: 'Tuvalu',
   TW: 'Taiwan',
   TT: 'Trinidad and Tobago',
   TR: 'Turkey',
   LK: 'Sri Lanka',
   LI: 'Liechtenstein',
   LV: 'Latvia',
   TO: 'Tonga',
   LT: 'Lithuania',
   LU: 'Luxembourg',
   LR: 'Liberia',
   LS: 'Lesotho',
   TH: 'Thailand',
   TF: 'French Southern Territories',
   TG: 'Togo',
   TD: 'Chad',
   TC: 'Turks and Caicos Islands',
   LY: 'Libya',
   VA: 'Vatican',
   VC: 'Saint Vincent and the Grenadines',
   AE: 'United Arab Emirates',
   AD: 'Andorra',
   AG: 'Antigua and Barbuda',
   AF: 'Afghanistan',
   AI: 'Anguilla',
   VI: 'U.S. Virgin Islands',
   IS: 'Iceland',
   IR: 'Iran',
   AM: 'Armenia',
   AL: 'Albania',
   AO: 'Angola',
   AQ: 'Antarctica',
   AS: 'American Samoa',
   AR: 'Argentina',
   AU: 'Australia',
   AT: 'Austria',
   AW: 'Aruba',
   IN: 'India',
   AX: 'Aland Islands',
   AZ: 'Azerbaijan',
   IE: 'Ireland',
   ID: 'Indonesia',
   UA: 'Ukraine',
   QA: 'Qatar',
   MZ: 'Mozambique',
};

const weatherArrayEng = ['THUNDERSTORM WITH LIGHT RAIN', 'THUNDERSTORM WITH RAIN', 'THUNDERSTORM WITH HEAVY RAIN', 'LIGHT THUNDERSTORM', 'THUNDERSTORM', 'HEAVY THUNDERSTORM', 'RAGGED THUNDERSTORM', 'THUNDERSTORM WITH LIGHT DRIZZLE', 'THUNDERSTORM WITH DRIZZLE', 'THUNDERSTORM WITH HEAVY DRIZZLE', 'LIGHT INTENSITY DRIZZLE', 'DRIZZLE', 'HEAVY INTENSITY DRIZZLE', 'LIGHT INTENSITY DRIZZLE RAIN', 'DRIZZLE RAIN', 'HEAVY INTENSITY DRIZZLE RAIN', 'SHOWER RAIN AND DRIZZLE', 'HEAVY SHOWER RAIN AND DRIZZLE', 'SHOWER DRIZZLE', 'LIGHT RAIN', 'MODERATE RAIN', 'HEAVY INTENSITY RAIN', 'VERY HEAVY RAIN', 'EXTREME RAIN', 'FREEZING RAIN', 'LIGHT INTENSITY SHOWER RAIN', 'SHOWER RAIN', 'HEAVY INTENSITY SHOWER RAIN', 'RAGGED SHOWER RAIN', 'LIGHT SNOW', 'SNOW', 'HEAVY SNOW', 'SLEET', 'LIGHT SHOWER SLEET', 'SHOWER SLEET', 'LIGHT RAIN AND SNOW', 'RAIN AND SNOW', 'LIGHT SHOWER SNOW', 'SHOWER SNOW', 'HEAVY SHOWER SNOW', 'MIST', 'SMOKE', 'HAZE', 'SAND/ DUST WHIRLS', 'FOG', 'SAND', 'DUST', 'VOLCANIC ASH', 'SQUALLS', 'TORNADO', 'CLEAR SKY', 'FEW CLOUDS', 'SCATTERED CLOUDS', 'BROKEN CLOUDS', 'OVERCAST CLOUDS'];
const weatherArrayRu = ['ГРОЗА С ЛЕГКИМ ДОЖДЕМ', 'ГРОЗА С ДОЖДЕМ', 'ГРОЗА С СИЛЬНЫМ ДОЖДЕМ', 'ЛЕГКАЯ ГРОЗА', 'ГРОЗА', 'СИЛЬНАЯ ГРОЗА', 'РВАНАЯ ГРОЗА', 'ГРОЗА С МЕЛКИМ ДОЖДЕМ', 'ГРОЗА С МЕЛКИМ ДОЖДЕМ', 'ГРОЗА С МЕЛКИМ ДОЖДЕМ', 'ГРОЗА С СИЛЬНЫМ ДОЖДЕМ', 'МЕЛКИЙ ДОЖДЬ', 'СИЛЬНЫЙ ДОЖДЬ', 'СИЛЬНЫЙ ДОЖДЬ', 'СИЛЬНЫЙ ДОЖДЬ', 'СИЛЬНЫЙ ДОЖДЬ', 'СИЛЬНЫЙ ДОЖДЬ', 'СИЛЬНЫЙ ДОЖДЬ', 'ДОЖДЬ И МОРОСЬ', 'ДОЖДЬ С ДОЖДЕМ', ' НЕБОЛЬШОЙ ДОЖДЬ', 'УМЕРЕННЫЙ ДОЖДЬ', 'СИЛЬНЫЙ ДОЖДЬ', 'ОЧЕНЬ СИЛЬНЫЙ ДОЖДЬ', 'ЭКСТРЕМАЛЬНЫЙ ДОЖДЬ', 'ЛЕДЯНОЙ ДОЖДЬ', 'ЛИВЕНЬ С ИНТЕНСИВНЫМ ЛИВНЕМ', 'ЛИВЕНЬ С ИНТЕНСИВНЫМ ЛИВНЕМ', 'ДОЖДЬ С ИНТЕНСИВНЫМ ЛИВНЕМ', 'РВАНЫЙ ЛИВЕНЬ', 'ЛЕГКИЙ СНЕГ', 'СНЕГ', 'СИЛЬНЫЙ СНЕГ', 'МОКРЫЙ СНЕГ', 'ДОЖДЬ СО СНЕГОМ', 'ДОЖДЬ СО СНЕГОМ', 'ЛЕГКИЙ ДОЖДЬ СО СНЕГОМ', 'ДОЖДЬ СО СНЕГОМ', 'ДОЖДЬ СО СНЕГОМ', 'СИЛЬНЫЙ ДОЖДЬ СО СНЕГОМ', 'ТУМАН', 'ДЫМ', 'ДЫМКА', 'ПЕСЧАНЫЕ ВИХРИ', 'ТУМАН', 'ПЕСОК', 'ПЫЛЬ', 'ВУЛКАНИЧЕСКИЙ ПЕПЕЛ', 'ШКВАЛЫ', 'ТОРНАДО', 'ЧИСТОЕ НЕБО', 'МАЛО ОБЛАКОВ', 'РАССЕЯННЫЕ ОБЛАКА', 'РАЗОРВАННЫЕ ОБЛАКА', 'ПАСМУРНЫЕ ОБЛАКА'];
const weatherArrayBe = ['НАВАЛЬНІЦА З ЛЁГКІМ ДАЖДЖОМ', 'НАВАЛЬНІЦА З ДАЖДЖОМ', 'НАВАЛЬНІЦА З МОЦНЫМ ДАЖДЖОМ', 'ЛЁГКАЯ НАВАЛЬНІЦА', 'НАВАЛЬНІЦА', 'МОЦНАЯ НАВАЛЬНІЦА', 'ІРВАНАЯ НАВАЛЬНІЦА', 'НАВАЛЬНІЦА З ДРОБНЫМ ДАЖДЖОМ', 'НАВАЛЬНІЦА З ДРОБНЫМ ДАЖДЖОМ', 'НАВАЛЬНІЦА З ДРОБНЫМ ДАЖДЖОМ', 'НАВАЛЬНІЦА З МОЦНЫМ ДАЖДЖОМ', 'ДРОБНЫ ДОЖДЖ', 'МОЦНЫ ДОЖДЖ', 'МОЦНЫ ДОЖДЖ', 'МОЦНЫ ДОЖДЖ', 'МОЦНЫ ДОЖДЖ', 'МОЦНЫ ДОЖДЖ', 'МОЦНЫ ДОЖДЖ', 'МОЦНЫ ДОЖДЖ', 'ДОЖДЖ І ІМЖА', 'ДОЖДЖ З ДАЖДЖОМ', 'НЕВЯЛІКІ ДОЖДЖ', ' ЎМЕРАНЫ ДОЖДЖ', 'МОЦНЫ ДОЖДЖ', 'ВЕЛЬМІ МОЦНЫ ДОЖДЖ', 'ЭКСТРЭМАЛЬНЫ ДОЖДЖ', 'ЛЕДЗЯНЫ ДОЖДЖ', 'ЛІВЕНЬ З ІНТЭНСІЎНЫМ ЛІЎНЕМ', 'ЛІВЕНЬ З ІНТЭНСІЎНЫМ ЛІЎНЕМ', 'ДОЖДЖ З ІНТЭНСІЎНЫМ ЛІЎНЕМ', 'ІРВАНЫ ЛІВЕНЬ', 'ЛЁГКІ СНЕГ', 'СНЕГ', 'МОЦНЫ СНЕГ', 'МОКРЫ СНЕГ', 'ДОЖДЖ СА СНЕГАМ', 'ДОЖДЖ СА СНЕГАМ', 'ЛЁГКІ ДОЖДЖ СА СНЕГАМ', 'ДОЖДЖ СА СНЕГАМ', 'ДОЖДЖ СА СНЕГАМ', 'МОЦНЫ ДОЖДЖ СА СНЕГАМ', 'ТУМАН', 'ДЫМ', 'СМУГА', 'ПЯСЧАНЫЯ ВІХУРЫ', 'ТУМАН', 'ПЯСОК', 'ПЫЛ', 'ВУЛКАНІЧНЫ ПОПЕЛ', 'ШКВАЛЫ', 'ТАРНАДА', 'ЧЫСТАЕ НЕБА', 'МАЛА АБЛОКАЎ', 'РАССЕЯНЫЯ АБЛОКІ', 'РАЗАРВАНЫЯ АБЛОКІ', 'ПАХМУРНЫЯ АБЛОКІ'];


async function translateText(text, lang) {
   const key = 'trnsl.1.1.20191215T105323Z.4672a2f04e4a1e06.87f998832f4ac029c742ab90ba2ff2d557f0eea7';
   const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?lang=${lang}&text=${text}&key=${key}`;
   const data = await fetch(url).then((res) => res.json());
   return data.text[0];
}

// window.onload = async function () {
(async function() {
   let language;
   if (localStorage.getItem('language') !== null) {
      language = localStorage.getItem('language');
   } else {
      language = 'en';
   }
   let degreesFormat;
   if (localStorage.getItem('degreesFormat') !== null) {
      degreesFormat = localStorage.getItem('degreesFormat');
   } else {
      degreesFormat = 'celsius';
   }

   let date = new Date();
   const getYearTime = () => { // function that return time of the year (f.e. winter)
      const timeOfTheYearObj = {
         1: 'winter',
         2: 'winter',
         3: 'spring',
         4: 'spring',
         5: 'spring',
         6: 'summer',
         7: 'summer',
         8: 'summer',
         9: 'autumn',
         10: 'autumn',
         11: 'autumn',
         12: 'winter',
      };
      const number = new Date().getMonth() + 1;
      return timeOfTheYearObj[number];
   };


   const getDayTime = (hours) => (hours < 6 ? 'night' : hours < 12 ? 'morning' : hours < 18 ? 'day' : hours < 23 ? 'evening' : 'night');

   async function getCurrentTime(...args) { // function that returns current city time
      let timeZone;
      if (args.length < 2) {
         date = new Date();
         timeZone = await setTimeZone();
      } else {
         timeZone = await setTimeZone(args[1]);
         if (timeZone === 10800) {
            date = new Date(Date.now());
         } else {
            date = new Date(Date.now() - 10800000 + timeZone * 1000);
         }
      }
      if (args[0] === 'be') {
         const weekDays = ['Ндз', 'Пнд', 'Аўт', 'Срд', 'Чц', 'Птн', 'Сбт'];
         const monthArr = ['Стдудзеня', 'Лютага', 'Сакавіка', 'Красавіка', 'Мая', 'Чэрвеня', 'Ліпеня', 'Жниўня', 'Верасня', 'Кастрычніка', 'Лістапада', 'Снежня'];
         return `${weekDays[date.getDay()]}, ${date.getDate()} ${monthArr[date.getMonth()]}, ${date.getHours()}:${date.getMinutes()} `;
      }
      const options = {
         weekday: 'short',
         hour: '2-digit',
         minute: '2-digit',
         month: 'long',
         day: 'numeric',
         hour12: false
      };
      const time = date.toLocaleString(args[0], options);
      return time;
   }

// Names of next three days
   const getFutureDate = (days, lang) => {
      let weekDays;
      switch (lang) {
         case 'en':
            weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            break;
         case 'ru':
            weekDays = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
            break;
         case 'be':
            weekDays = ['Нядзеля', 'Панядзелак', 'Аўторак', 'Серада', 'Чацвер', 'Пятніца', 'Субота'];
            break;
         default:
            throw new Error('Incorrect language');
      }
      let i = date.getDay() + days;
      if (i < weekDays.length) {
         return weekDays[i];
      }
      while (i >= weekDays.length) {
         i -= weekDays.length;
      }
      return weekDays[i];
   };

// Set location
   async function geolocation() {
      const url = `https://ipinfo.io/json?token=${token}`;
      const data = await fetch(url).then((res) => res.json());
      return data.city;
   }

   async function setTimeZone(...args) {
      if (!args.length) {
         const url = `https://ipinfo.io/json?token=${token}`;
         const data = await fetch(url).then((res) => res.json());
         return data.timezone;
      }
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${args[0]}&units=metric&APPID=${apiKey}`;
      const data = await fetch(url).then((res) => res.json());
      return data.city.timezone;
   }

   async function setLinkToImage(...args) { // function that returns background image
      const accessKey = 'a4e459094ff30eccca82da8258dd3e4e4ce923d584ab01bb47d1e4d364388591';
      let city;
      if (!args.length) {
         city = await geolocation();
      } else {
         city = await setWeatherByCity(args[0]);
         city = city.city.name;
      }
      const yearTime = await getYearTime();
      const dayTime = getDayTime(new Date().getHours());
      const url = `https://api.unsplash.com/photos/random?query=${yearTime},${dayTime},${city}&client_id=${accessKey}`;
      const data = await fetch(url).then((res) => res.json());
      const body = document.querySelector('body');
      body.style.backgroundImage = `url(${data.urls.full}&w=1100)`;
   };


   const token = '81bc3bbbc1edea'
   async function setUserLocation(...args) { // function that returns user's location.
      let url;
      if (!args.length) {
         url = `https://ipinfo.io/json?token=${token}`;
         const data = await fetch(url).then((res) => res.json());
         return [data.city, data.country];
      }
      if (args.length === 1) {
         url = `https://api.openweathermap.org/data/2.5/forecast?q=${args[0]}&units=metric&APPID=${apiKey}`;
      } else {
         url = `https://api.openweathermap.org/data/2.5/forecast?lat=${args[1]}&lon=${args[0]}&units=metric&APPID=${apiKey}`;
      }
      const data = await fetch(url).then((res) => res.json());
      return [data.city.name, data.city.country];
   }

   async function setWeatherByCity(...args) { // function that returns weather on 3 days using city name
      let city;
      if (!args.length) {
         city = await geolocation();
      } else {
         city = args[0];
      }
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`;
      const data = await fetch(url).then((res) => res.json());
      return data;
   }

   async function setCityTemperature(...args) { // function that returns temperature and temperature icons for 3 days
      let city;
      if (!args.length) {
         city = await geolocation();
      } else {
         city = args[0];
      }
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`;
      const data = await fetch(url).then((res) => res.json());
      return [
         [Math.round(data.list[0].main.temp), data.list[0].weather[0].icon],
         [Math.round(data.list[8].main.temp), data.list[8].weather[0].icon],
         [Math.round(data.list[16].main.temp), data.list[16].weather[0].icon],
         [Math.round(data.list[24].main.temp), data.list[24].weather[0].icon],
      ];
   }

   //Today Weather
   const apiKey = 'e7c43ccd84de13b498336e7124ca47df';
   async function setLinkToWeather(...args) {
      let city;
      if (!args.length) {
         city = await geolocation();
      } else {
         city = args[0];
      }
      const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&APPID=${apiKey}`;
      const data = await fetch(url).then((res) => res.json());
      const celsiusTemp = data.list[0].main.temp;
      const {
         humidity
      } = data.list[0].main;
      const windSpeed = data.list[0].wind.speed;
      const feelsLikeTemp = celsiusTemp - 0.4 * (celsiusTemp - 10) * (1 - humidity / 100);
      return [data.list[0].weather[0].description, Math.round(feelsLikeTemp), Math.round(windSpeed), humidity];
   }


   const convertDDToDMS = (dd) => {
      const deg = dd | 0; // truncate dd to get degrees
      const frac = Math.abs(dd - deg); // get fractional part
      const min = (frac * 60) | 0; // multiply fraction by 60 and truncate
      return `${deg}°${min}'`;
   };


   async function setCoordinates(city) {
      const data = await setWeatherByCity(city);
      if (data.cod === '404' || data.cod === '400') {
         return -1;
      }
      const lng = data.city.coord.lon;
      const lat = data.city.coord.lat;
      return [lng, lat];
   }


   async function showOnTheMap(...args) {
      let lng;
      let lat;
      if (!args.length) {
         const data = await setWeatherByCity();
         lng = data.city.coord.lon;
         lat = data.city.coord.lat;
      } else {
         lng = args[0];
         lat = args[1];
      }
      mapboxgl.accessToken = 'pk.eyJ1IjoiYWxpZ3VyYmFub3Y5NSIsImEiOiJjazQwMTc0dG0wOXd3M2xxdXQ3NTYzd3JpIn0.LebAdPabiueHpHwBLAZ04A';
      const map = new mapboxgl.Map({
         container: 'map', // container id
         style: 'mapbox://styles/mapbox/streets-v11', // stylesheet location
         center: [lng, lat], // starting position [lng, lat]
         zoom: 9, // starting zoom
      });
      return map;
   }



   const contentWarapper = document.querySelector('.content-wrapper');
   const htmlContent = `${controlBlock}<div class="weather-and-map"><div class="weather-for-4-days">${weatherForTodayBlock}${weatherFor3DaysBlock}</div>${mapBlock}</div>`;
   contentWarapper.insertAdjacentHTML('afterbegin', htmlContent);
   const loadBgButton = document.getElementById('load-bg');
   const locationStr = document.querySelector('.weather-for-today h2');
   const currentTimeStr = document.querySelector('.weather-for-today h4');
   const temperatureForToday = document.querySelector('.temperature p');
   const temperaturForTodayImg = document.querySelector('.temperature img');
   const weatherForTodayDescription = document.querySelector('.description');
   const changeColorInput = document.querySelector('input[type="color"]');
   const weatherForTodayFeelsLikeTemp = document.querySelector('.feels-like-temp');
   const weatherForTodayWindSpeed = document.querySelector('.wind-speed');
   const celsiusFormat = document.getElementById('celsius');
   const weatherForTodayHumidity = document.querySelector('.humidity');
   const searchInput = document.getElementById('search-input');
   const searchBtn = document.getElementById('search-btn');
   const languageBlock = document.querySelector('select');
   const microImg = document.getElementById('micro');
   const recognition = new webkitSpeechRecognition();
   let isMicro = false;
   recognition.interimResults = false;
   let [lng, lat] = await setCoordinates(await geolocation());

   languageBlock.value = language;
   let feelsLikeText;
   let windText;
   let humidityText;
   let searchText;
   let speed;
   let longitude;
   let latitude;


   let currentTemperature = await setCityTemperature(); // array that contains temperature and icons on current and next 3 days
   const setTemperatureFor3Days = () => {
      for (let i = 1; i <= 3; i += 1) {
         const elem = document.querySelector(`.weather-for-3-days_element-${i}`);
         elem.firstElementChild.innerText = getFutureDate(i, language);
         if (degreesFormat === 'celsius') {
            elem.lastElementChild.firstElementChild.innerText = `${currentTemperature[i][0]}°`;
         } else {
            elem.lastElementChild.firstElementChild.innerText = `${Math.round((9 / 5) * currentTemperature[i][0] + 32)}°`;
         }
         elem.lastElementChild.lastElementChild.setAttribute('src', `http://openweathermap.org/img/wn/${currentTemperature[i][1]}@2x.png`);
      }
   };
   setLinkToImage();
   translateText('Minsk, Belarus', 'ru');
   setTemperatureFor3Days();
   let weatherDescription;
   const setweatherDescription = async (city) => {
      weatherDescription = await setLinkToWeather(city);
      weatherForTodayDescription.innerText = weatherDescription[0];
      if (degreesFormat === 'celsius') {
         weatherForTodayFeelsLikeTemp.innerText = `${feelsLikeText}: ${weatherDescription[1]}°`;
      } else {
         weatherForTodayFeelsLikeTemp.innerText = `${feelsLikeText}: ${Math.round((9 / 5) * weatherDescription[1] + 32)}°`;
      }
      weatherForTodayWindSpeed.innerText = `${windText}: ${weatherDescription[2]} ${speed}`;
      weatherForTodayHumidity.innerText = `${humidityText}: ${weatherDescription[3]}%`;
   };
   await setweatherDescription(await setUserLocation());
   let locationArray = await setUserLocation();
   let city = locationArray[0];
   const switchSiteLanguage = async () => {
      let weatherDescriptionVariable;
      switch (language) {
         case 'en':
            feelsLikeText = 'Feels like';
            windText = 'Wind';
            humidityText = 'Humidity';
            searchText = 'Search';
            speed = 'm/s';
            longitude = 'Longitude';
            latitude = 'Latitude';
            weatherDescriptionVariable = weatherDescription[0];
            break;
         case 'ru':
            feelsLikeText = 'Чувствуется как';
            windText = 'Ветер';
            humidityText = 'Влажность';
            searchText = 'Найти';
            speed = 'м/с';
            longitude = 'Долгота';
            latitude = 'Широта';
            weatherDescriptionVariable = weatherArrayRu[weatherArrayEng.indexOf(weatherDescription[0].toUpperCase())];
            break;
         case 'be':
            feelsLikeText = 'Адчуваецаа як';
            windText = 'Вецер';
            humidityText = 'Вільготнасць';
            searchText = 'Знайсці';
            speed = 'м/с';
            longitude = 'Даўгата';
            latitude = 'Шырата';
            weatherDescriptionVariable = weatherArrayBe[weatherArrayEng.indexOf(weatherDescription[0].toUpperCase())];
            break;
         default:
            throw new Error('Incorrect language');
      }
      locationStr.innerText = await translateText(locationStr.innerText, language);
      document.querySelector('#search-btn p').innerText = searchText;
      weatherForTodayDescription.innerText = weatherDescriptionVariable;
      weatherForTodayFeelsLikeTemp.innerText = `${feelsLikeText}: ${weatherDescription[1]}°`;
      weatherForTodayWindSpeed.innerText = `${windText}: ${weatherDescription[2]} ${speed}`;
      weatherForTodayHumidity.innerText = `${humidityText}: ${weatherDescription[3]}%`;
      for (let i = 1; i <= 3; i += 1) {
         const elem = document.querySelector(`.weather-for-3-days_element-${i}`);
         elem.firstElementChild.innerText = getFutureDate(i, language);
      }
      document.querySelector('.lon').innerText = `${longitude}: ${convertDDToDMS(lng)}`;
      document.querySelector('.lat').innerText = `${latitude}: ${convertDDToDMS(lat)}`;
      currentTimeStr.innerText = await getCurrentTime(language, city);
   };
   let countryCode = locationArray[1];
   currentTimeStr.innerText = await getCurrentTime(language);
   locationStr.innerText = `${city}, ${fullCountryNames[countryCode]}`; // set user's country and city
   switchSiteLanguage();
   if (degreesFormat === 'celsius') {
      temperatureForToday.innerText = `${currentTemperature[0][0]}°`;
      celsiusFormat.setAttribute('checked', true);
   } else {
      temperatureForToday.innerText = `${Math.round((9 / 5) * currentTemperature[0][0] + 32)}°`;
      document.getElementById('fahrenheit').setAttribute('checked', true);
   }
   temperaturForTodayImg.setAttribute('src', `http://openweathermap.org/img/wn/${currentTemperature[0][1]}@2x.png`);
   setInterval(async () => {
      currentTimeStr.innerText = await getCurrentTime(language, city);
   }, 60000);
   showOnTheMap();
   document.querySelector('.lon').innerText = `${longitude}: ${convertDDToDMS(lng)}`;
   document.querySelector('.lat').innerText = `${latitude}: ${convertDDToDMS(lat)}`;

   searchBtn.addEventListener('click', async () => {
      if (isMicro) {
         microImg.setAttribute('src', 'src/icons/microfon.png');
         recognition.stop();
      }
      if (await setCoordinates(searchInput.value) === -1) {
         searchInput.value = language === 'en' ? 'Incorrect city name' : language === 'ru' ? 'Неправильное название города' : 'Няправільная назва горада';
         return;
      }
      [lng, lat] = await setCoordinates(searchInput.value);
      searchInput.value = '';
      showOnTheMap(lng, lat);
      document.querySelector('.lon').innerText = `${longitude}: ${convertDDToDMS(lng)}`;
      document.querySelector('.lat').innerText = `${latitude}: ${convertDDToDMS(lat)}`;
      locationArray = await setUserLocation(lng, lat);
      city = locationArray[0];
      countryCode = locationArray[1];
      currentTimeStr.innerText = await getCurrentTime(language, city);
      setLinkToImage(city);
      currentTemperature = await setCityTemperature(city);
      locationStr.innerText = `${city}, ${fullCountryNames[countryCode]}`;
      if (degreesFormat === 'celsius') {
         temperatureForToday.innerText = `${currentTemperature[0][0]}°`;
      } else {
         temperatureForToday.innerText = `${Math.round((9 / 5) * currentTemperature[0][0] + 32)}°`;
      }
      temperaturForTodayImg.setAttribute('src', `http://openweathermap.org/img/wn/${currentTemperature[0][1]}@2x.png`);
      await setweatherDescription(city);
      setTemperatureFor3Days();
      switchSiteLanguage();
   });
   document.querySelectorAll('input[name="degrees"]').forEach((e) => {
      e.addEventListener('change', () => {
         if (celsiusFormat.checked) {
            degreesFormat = 'celsius';
            temperatureForToday.innerText = `${Math.round((5 / 9) * (temperatureForToday.innerText.substr(0, temperatureForToday.innerText.length - 1) - 32))}°`;
            for (let i = 1; i <= 3; i += 1) {
               const elem = document.querySelector(`.weather-for-3-days_element-${i}`);
               elem.lastElementChild.firstElementChild.innerText = `${Math.round((5 / 9) * (elem.lastElementChild.firstElementChild.innerText.substr(0, elem.lastElementChild.firstElementChild.innerText.length - 1) - 32))}°`;
            }
            weatherForTodayFeelsLikeTemp.innerText = `${feelsLikeText}: ${weatherDescription[1]}°`;
         } else {
            degreesFormat = 'fahrenheit';
            temperatureForToday.innerText = `${Math.round((9 / 5) * temperatureForToday.innerText.substr(0, temperatureForToday.innerText.length - 1) + 32)}°`;
            for (let i = 1; i <= 3; i += 1) {
               const elem = document.querySelector(`.weather-for-3-days_element-${i}`);
               elem.lastElementChild.firstElementChild.innerText = `${Math.round((9 / 5) * elem.lastElementChild.firstElementChild.innerText.substr(0, elem.lastElementChild.firstElementChild.innerText.length - 1) + 32)}°`;
            }
            weatherForTodayFeelsLikeTemp.innerText = `${feelsLikeText}: ${Math.round((9 / 5) * weatherDescription[1] + 32)}°`;
         }
      });
   });
   languageBlock.addEventListener('change', () => {
      language = languageBlock.value;
      switchSiteLanguage();
   });
   loadBgButton.addEventListener('click', () => { // creates new background image
      setLinkToImage(city);
   });
   changeColorInput.addEventListener('change', () => {
      document.querySelector('body').style.color = changeColorInput.value;
      languageBlock.style.color = changeColorInput.value;
      searchInput.style.color = changeColorInput.value;
   });


   microImg.addEventListener('click', () => {
      isMicro = !isMicro;
      if (isMicro) {
         microImg.setAttribute('src', 'src/icons/micro_active.png'),
         recognition.start();
      } else {
         microImg.setAttribute('src', 'src/icons/microfon.png');
         recognition.abort();
      }
   });

   recognition.addEventListener('result', (e) => {
      const transcript = Array.from(e.results)
         .map((result) => result[0])
         .map((result) => result.transcript)
         .join('');
      if (isMicro) {
         searchInput.value = transcript;
      }
   });

   recognition.addEventListener('end', recognition);


   window.addEventListener('beforeunload', () => {
      localStorage.setItem('degreesFormat', degreesFormat);
      localStorage.setItem('language', language);
   });
}());