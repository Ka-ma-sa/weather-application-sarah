function changeTemp(responses) {
	let temp = document.querySelector("#realtime-temp");
	temp.innerHTML = Math.round(responses.data.temperature.current);
	let place = document.querySelector("#location");
	place.innerHTML = responses.data.city;
}

function updatedCity(event) {
	event.preventDefault();
	let city = document.querySelector("#location-input").value;
	let apiKey = "7baftbbf50402a793aa44f3065a0o1bd";
	let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

	axios.get(apiUrl).then(changeTemp);
}

let searchForm = document.querySelector("#city-serach-form");
searchForm.addEventListener("submit", updatedCity);

let now = new Date();

let hour = now.getHours();
if (hour < 10) {
	hour = `0${hour}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
	minutes = `0${minutes}`;
}
let currentWeekday = document.querySelector("#weekday");
weekdays = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturaday",
];
currentWeekday.innerHTML = weekdays[now.getDay()];

let currentTime = document.querySelector("#current-time");
currentTime.innerHTML = `${hour}:${minutes}`;


