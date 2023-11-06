import '/css/style.css'
import javascriptLogo from '/images/javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import date from './date-and-time';
import dayjs from 'dayjs'
let now = dayjs();
let day1 = dayjs("2023-09-05");
const now2 = new Date();

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>The time is: ${date.format(now2, 'hh:mm A')}</h1>
    <h2>Todays Date: ${now.format('MMM DD, YYYY')}</h2>
    <h2>Number of days since we started this program: ${now.diff(day1, "day")}</h2>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
