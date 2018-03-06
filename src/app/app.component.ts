import { Component } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

  constructor(private _http: Http) { this.searchCity() }

  dayMap = {
    0 : "Sunday",
    1 : "Monday",
    2 : "Tuesday",
    3 : "Wednesday",
    4 : "Thursday",
    5 : "Friday",
    6 : "Saturday"
  }

  monthMap = {
    0 : "January",
    1 : "February",
    2 : "March",
    3 : "April",
    4 : "May",
    5 : "June",
    6 : "July",
    7 : "August",
    8 : "September",
    9 : "October",
    10 : "November",
    11 : "December",
  }

  cityName = "Denver";
  newDate = new Date();

  cityHumidity1 = "";
  cityPressure1 = "";
  cityTemp1 = "";
  cityTempMin1 = "";
  cityTempMax1 = "";
  cityDesc1 = "";
  cityIcon1 = "";
  iconUrl1 = "";
  date1 = new Date();
  day1 = this.date1.getDay();
  dayName1={}; dayName2={}; dayName3={}; dayName4={}; dayName5={};
  month1 = this.date1.getDay();
  monthName1 = {};
  dateNum1 = this.date1.getDate();
  fullYear = this.date1.getFullYear();

  cityHumidity2 = "";
  cityPressure2 = "";
  cityTemp2 = "";
  cityTempMin2 = "";
  cityTempMax2 = "";
  cityDesc2 = "";
  cityIcon2 = "";
  iconUrl2 = "";
  date2 = new Date();
  day2 = this.date2.getDay();

  cityHumidity3 = "";
  cityPressure3 = "";
  cityTemp3 = "";
  cityTempMin3 = "";
  cityTempMax3 = "";
  cityDesc3 = "";
  cityIcon3 = "";
  iconUrl3 = "";
  date3 = new Date();
  day3 = this.date3.getDay();

  cityHumidity4 = "";
  cityPressure4 = "";
  cityTemp4 = "";
  cityTempMin4 = "";
  cityTempMax4 = "";
  cityDesc4 = "";
  cityIcon4 = "";
  iconUrl4 = "";
  date4 = new Date();
  day4 = this.date4.getDay();

  cityHumidity5 = "";
  cityPressure5 = "";
  cityTemp5 = "";
  cityTempMin5 = "";
  cityTempMax5 = "";
  cityDesc5 = "";
  cityIcon5 = "";
  iconUrl5 = "";
  date5 = new Date();
  day5 = this.date5.getDay();

  searchCity() {
    this._http.get("https://api.openweathermap.org/data/2.5/forecast?q=" + this.cityName + "&APPID=283cbe444e547b37aeebc38a47c1f12c&cnt=40")
    .subscribe(
      (res: Response) => {
        const city = res.json();

        this.date1 = new Date(city.list[0].dt * 1000);
        this.day1 = this.date1.getDay();
        this.dayName1 = this.dayMap[this.day1];
        this.monthName1 = this.monthMap[this.month1];
        this.dateNum1 = this.date1.getDate()
        this.fullYear = this.date1.getFullYear();
        this.cityHumidity1 = city.list[0].main.humidity;
        this.cityPressure1 = city.list[0].main.pressure;
        this.cityTemp1 = (city.list[0].main.temp * (9/5) - 459.67).toFixed(1);
        this.cityTempMin1 = (city.list[0].main.temp_min * (9/5) - 459.67).toFixed(1);
        this.cityTempMax1 = (city.list[0].main.temp_max * (9/5) - 459.67).toFixed(1);
        this.cityDesc1 = city.list[0].weather[0].description;
        this.cityIcon1 = city.list[0].weather[0].icon;
        this.iconUrl1 = "http://openweathermap.org/img/w/" + this.cityIcon1 + ".png";

        this.date2 = new Date(city.list[7].dt * 1000);
        this.day2 = this.date2.getDay();
        this.dayName2 = this.dayMap[this.day2];
        this.cityHumidity2 = city.list[7].main.humidity;
        this.cityPressure2 = city.list[7].main.pressure;
        this.cityTemp2 = (city.list[7].main.temp * (9/5) - 459.67).toFixed(1);
        this.cityTempMin2 = (city.list[7].main.temp_min * (9/5) - 459.67).toFixed(1);
        this.cityTempMax2 = (city.list[7].main.temp_max * (9/5) - 459.67).toFixed(1);
        this.cityDesc2 = city.list[7].weather[0].description;
        this.cityIcon2 = city.list[7].weather[0].icon;
        this.iconUrl2 = "http://openweathermap.org/img/w/" + this.cityIcon2 + ".png";

        this.date3 = new Date(city.list[15].dt * 1000);
        this.day3 = this.date3.getDay();
        this.dayName3 = this.dayMap[this.day3];
        this.cityHumidity3 = city.list[15].main.humidity;
        this.cityPressure3 = city.list[15].main.pressure;
        this.cityTemp3 = (city.list[15].main.temp * (9/5) - 459.67).toFixed(1);
        this.cityTempMin3 = (city.list[15].main.temp_min * (9/5) - 459.67).toFixed(1);
        this.cityTempMax3 = (city.list[15].main.temp_max * (9/5) - 459.67).toFixed(1);
        this.cityDesc3 = city.list[15].weather[0].description;
        this.cityIcon3 = city.list[15].weather[0].icon;
        this.iconUrl3 = "http://openweathermap.org/img/w/" + this.cityIcon3 + ".png";

        this.date4 = new Date(city.list[23].dt * 1000);
        this.day4 = this.date4.getDay();
        this.dayName4 = this.dayMap[this.day4];
        this.cityHumidity4 = city.list[23].main.humidity;
        this.cityPressure4 = city.list[23].main.pressure;
        this.cityTemp4 = (city.list[23].main.temp * (9/5) - 459.67).toFixed(1);
        this.cityTempMin4 = (city.list[23].main.temp_min * (9/5) - 459.67).toFixed(1);
        this.cityTempMax4 = (city.list[23].main.temp_max * (9/5) - 459.67).toFixed(1);
        this.cityDesc4 = city.list[23].weather[0].description;
        this.cityIcon4 = city.list[23].weather[0].icon;
        this.iconUrl4 = "http://openweathermap.org/img/w/" + this.cityIcon4 + ".png";

        this.date5 = new Date(city.list[31].dt * 1000);
        this.day5 = this.date5.getDay();
        this.dayName5 = this.dayMap[this.day5];
        this.cityHumidity5 = city.list[31].main.humidity;
        this.cityPressure5 = city.list[31].main.pressure;
        this.cityTemp5 = (city.list[31].main.temp * (9/5) - 459.67).toFixed(1);
        this.cityTempMin5 = (city.list[31].main.temp_min * (9/5) - 459.67).toFixed(1);
        this.cityTempMax5 = (city.list[31].main.temp_max * (9/5) - 459.67).toFixed(1);
        this.cityDesc5 = city.list[31].weather[0].description;
        this.cityIcon5 = city.list[31].weather[0].icon;
        this.iconUrl5 = "http://openweathermap.org/img/w/" + this.cityIcon5 + ".png";
      }
    )

  }

  title = '5 Day Weather Forecast by City';
}
