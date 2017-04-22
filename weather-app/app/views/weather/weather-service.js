app.factory('weatherService', ['$http', '$rootScope', function($http, $rootScope){
	return{
		saveFavorite,
		getFavorite,
		getForecasts
	}

	function saveFavorite(state, city){
		localStorage.setItem('favoriteState', state);
		localStorage.setItem('favoriteCity', city);
	}

	function getFavorite(){
		const state = localStorage.getItem('favoriteState');
		const city = localStorage.getItem('favoriteCity');

		if(!state || !city){
			return{
				state: 'SC',
				city: 'Blumenau'
			}
		}
		return{
			state,
			city
		}
	}

	function getForecasts(city){
		const API_UNITS = 'METRIC';
		const API_URL = 'http://api.openweathermap.org/data/2.5/forecast/daily?';
		const API_KEY = '794f2041bd4af1a3a68e3738c47768cb';
		const API_LANG = 'pt';
		const BAD_WEATHER_ICONS = ['09d', '10d', '11n', '13d','09n', '10n', '11n', '13n'];
		const DAYS_OF_WEEK =['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
		$http.get(`${API_URL}q=${city}&cnt=7&units=${API_UNITS}&lang=${API_LANG}&APPID=${API_KEY}`).then(res=>{

			let min = {temp: 50};
			let max = {temp: -10};
			let beachData = {saturday:{shouldGoToBeach: false,}, sunday:{shouldGoToBeach: false}};
			const forecasts = res.data.list.map(forecast=>{
				const icon = forecast.weather[0].icon;
				const temp = Math.round(forecast.temp.day);
				//CONVERT UNIX TIMESTAMP TO MOMENT
				let date = new Date(forecast.dt * 1000);
				const dayOfWeek = date.getDay();
				date = date.getUTCDate() + "/" + (date.getUTCMonth() + 1);

				//VERIFY THE MIN AND MAX OF THE NEXT WEEK
				min = temp < min.temp ? {date, temp} : min;
				max = temp > max.temp ? {date, temp} : max;

				//VERIFY IF SHOULD GO TO BEACH
				if(dayOfWeek == 6 || dayOfWeek == 0){
					beachData[dayOfWeek == 6 ? 'saturday' : 'sunday'].shouldGoToBeach = temp >= 25 && !BAD_WEATHER_ICONS.includes(icon);
					beachData[dayOfWeek == 6 ? 'saturday' : 'sunday'].date = date;
					beachData[dayOfWeek == 6 ? 'saturday' : 'sunday'].temp = temp;
				}
				return{
					date,
					temp,
					icon,
					dayOfWeek: DAYS_OF_WEEK[dayOfWeek]
				}
			});
			$rootScope.$broadcast('updateForecasts', {
				min,
				max,
				beachData,
				forecasts
			});
		});
	}
}]);