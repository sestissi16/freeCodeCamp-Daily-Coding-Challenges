from datetime import datetime

def get_weekday(date_string):

    weekdayList = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]

    dateObj = datetime.strptime(date_string, "%Y-%m-%d").date()
    weekday = weekdayList[dateObj.weekday()]

    return weekday

print(get_weekday("2025-11-06"))