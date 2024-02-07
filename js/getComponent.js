
var weather = new Map();
weather.set(2, "img/white-storm.svg");//2** гроза
weather.set(3, "img/white-rain.svg");//3**-5** дожди
weather.set(6, "img/white-snow.svg");//6** снег
weather.set(71, "img/white-rain.svg");//701-762 туман
weather.set(72, "img/white-rain.svg");//771-781 сильный ветер
weather.set(80, "img/white-sunny.svg");//код 800 ясно
weather.set(81, "img/white-cloudy.svg");//801-802 полуобллчно
weather.set(82, "img/white-partly-cloudy.svg");//803-804 облочно

function getImage(weatherID) {
    ID = String(weatherID)
    if (ID[0] === '2')
        return weather.get(2)
    if (ID[0] === '3' || ID[0] === '4' || ID[0] === '5')
        return weather.get(3)
    if (ID[0] === '6')
        return weather.get(6)
    if (Number(ID) >= 701 && (Number(ID) <= 762))
        return weather.get(71)
    if (Number(ID) >= 771 && (Number(ID) <= 781))
        return weather.get(72)
    if (ID === '800')
        return weather.get(80)
    if (ID === '801' || ID === '802')
        return weather.get(81)
    if (ID === '803' || ID === '804')
        return weather.get(82)

    return "img/question.svg"
}


function getDirection(deg){

    if(0 <= deg && deg <= 45)
        return "C"
    if(45 <= deg && deg <= 90)
        return "CВ"
    if(90 <= deg && deg <= 135)
        return "В"
    if(135 <= deg && deg <= 180)
        return "ЮВ"
    if(180 <= deg && deg <= 225)
        return "Ю"
    if(225 <= deg && deg <= 270)
        return "ЮЗ"
    if(270 <= deg && deg <= 315)
        return "З"
    if(315 <= deg && deg <= 360)
        return "СЗ"
    return "?"
}