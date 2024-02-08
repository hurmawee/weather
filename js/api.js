//константы
const API_KEY = "?";
const API_REQ="https://api.openweathermap.org/data/2.5/weather?";
const LANG="ru";
const UNITS="metric";

async function apiRequst(city){
    try {
        const response = await fetch(`${API_REQ}&appid=${API_KEY}&q=${city}&lang=${LANG}&units=${UNITS}`)
        let info = await response.json()
        if (info.cod == 404)
        {
            alert("Вы ввели несуществующий город или с ошибкой")
            return 404;
        }
        let param =[info.name, info.weather[0].description, info.main.temp, info.main.feels_like, info.main.pressure, info.main.humidity, info.wind.speed, info.wind.deg, info.weather[0].id]

        return param
    }
    catch (e)
    {
        alert("Произошла неизвестная ошибка")
    }
}