function getWeekday(dateString) {
    // getDay function returns a number so I can match that to the index to get the actual day
    const weekdayList = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    // the dates in the test are written with "-" so I need to replace them with "/" 
    // so the timezone doesn't get parsed wrong and give me one day earlier than I wanted.
    // https://stackoverflow.com/questions/7556591/is-the-javascript-date-object-always-one-day-off
    const date = new Date(dateString.replace(/-/g, '\/'));

    let weekday = weekdayList[date.getDay()];

    return weekday;
}

getWeekday("2025-11-06")