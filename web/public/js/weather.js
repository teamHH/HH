// Retrieve location and data from JSON on load.
$(window).on("load", function () {
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            var lat = position.coords.latitude;
            var lon = position.coords.longitude;
            var url = "https://api.darksky.net/forecast/d94a73b689a5e065d529ef4f87433cb9/" + lat + ","  + lon + "?lang=zh-tw" + "&callback=?";
            
            //$.getJSON("https://api.darksky.net/forecast/d94a73b689a5e065d529ef4f87433cb9/"+ lat + "," + lon + "?callback=?", getForecast);
            $.getJSON(url, getForecast);
			$.getJSON("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + lon +  "&key=AIzaSyCvjcQzheZD4OKM2DPTBOoyNrtkqqp4D1o", function(googleLocation) {
                $("#location").text(googleLocation.results[2].formatted_address);
            });
        });
      
    } else {
        alert("Browser doesn't support geolocation!");
    }
});

var mainIcon;
var hourlyDataJson;
var hourArr = [];
var dailyDataJson;
var iconPath;
var tempConvert = function(temp) {
    return Math.round((temp - 32) * 5/9);
}

// Date format. 
var now = new Date();
    var minutes = now.getMinutes();
    if (minutes < 10)
        minutes = "0" + minutes;
    var date = now.toDateString() + " " + now.getHours() + ":" + minutes;

// HTML data display from JSON.
var getForecast = function(data) {
    console.log(data);
    $("#date").text(date);
    $("#summary").html(data.currently.summary);
    $("#degree").html(tempConvert(data.currently.temperature));
    $("#real-feel").text(tempConvert(data.currently.apparentTemperature));
    $("#humidity").html(Math.round(data.currently.humidity * 100));
    $("#precip").html(Math.round(data.daily.data[0].precipProbability * 100));
    $("#wind-speed").html(Math.round(data.currently.windSpeed * 1.6));
 
// Toggle button between CELSIUS and FAHRENHEIT.
    $("#degree-cels").click(function() {
        $(this).toggleClass("active");
        if($(this).hasClass("active")) {
            $(this).html("&deg;F");
            $(".conv-deg").html(" &deg;C");
            $("#units").html(" km/h")
            $("#wind-speed").html(Math.round(data.currently.windSpeed * 1.6));
            $("#degree").html(tempConvert(data.currently.temperature));
            $("#real-feel").html(tempConvert(data.currently.apparentTemperature));
            hourlyData();
            dailyData();
        } else {
            $(this).html("&deg;C");
            $(".conv-deg").html(" &deg;F");
            $("#units").html(" mph")
            $("#wind-speed").html(Math.round(data.currently.windSpeed));
            $("#degree").html(Math.round(data.currently.temperature));
            $("#real-feel").html(Math.round(data.currently.apparentTemperature));
            hourlyData();
            dailyData();
        }
    });
    
    mainIcon = data.currently.icon;
    hourlyDataJson = data.hourly.data;
    dailyDataJson = data.daily.data;
    
    checkIcon(data.currently.icon);
    $("#main-icon").attr("src", iconPath);
    
    
    for (var i = 0; i < hourlyDataJson.length; i += 4) {
        hourArr.push(hourlyDataJson[i]);
    }
    
    hourlyData();
    dailyData();
};

// Check icon status from JSON and append the right icon.
function checkIcon(icon) {
    if (icon === "wind") {
        iconPath = "https://image.ibb.co/dK7R2v/windy.png";
    } else if (icon === "clear-day") {
        iconPath = "https://image.ibb.co/k5uCaF/sun_1.png";
    } else if (icon === "cloudy") {
        iconPath = "https://image.ibb.co/g4579a/cloudy.png";
    } else if (icon === "clear-night") {
        iconPath = "https://image.ibb.co/htT5vF/moon_2.png";
    } else if (icon === "rain") {
        iconPath = "https://image.ibb.co/k2p0Ua/rain_4.png";
    } else if (icon === "snow") {
        iconPath = "https://image.ibb.co/nEXyFF/snowing.png";
    } else if (icon === "sleet") {
        iconPath = "https://image.ibb.co/mid5vF/frozen_rain.png";
    } else if (icon === "fog") {
        iconPath = "https://image.ibb.co/eFHLUa/fogg.png";
    } else if (icon === "partly-cloudy-day") {
        iconPath = "https://image.ibb.co/iwy5vF/partly_cloudy_day.png";
    } else if (icon === "partly-cloudy-night") {
        iconPath = "https://image.ibb.co/dgEpNv/partly_cloudy_night.png";
    }  
};

// Display hourly temperature, icon and time dynamically.
function hourlyData () {
    for (i = 0; i < hourArr.length; i++) {
        checkIcon(hourArr[i].icon);
        $("#hourly-icon-" + i).attr("src", iconPath);
        $("#hour-" + i).html(convertUnixTime());

        if ($("#degree-cels").hasClass("active")) {
            $("#hourly-deg-" + i).html(tempConvert(hourArr[i].temperature));
        } else {
            $("#hourly-deg-" + i).html(Math.round(hourArr[i].temperature));
        }   
    }
};

function convertUnixTime() {
    var date = new Date(hourArr[i].time * 1000);
    var hours = date.getHours();
    if (hours < 10)
        hours = "0" + hours;
    return hours + ':' + "00";
};

// Display daily temperature, icon and time dynamically.
function dailyData () {
    for (i = 0; i < dailyDataJson.length; i++) {
        checkIcon(dailyDataJson[i].icon);
        $("#daily-icon-" + i).attr("src", iconPath);
        $("#day-" + i).html(unixTimeToDay());
            
        if($("#degree-cels").hasClass("active")) {
            $("#daily-deg-" + i).html(tempConvert(dailyDataJson[i].temperatureMax));
        } else {
            $("#daily-deg-" + i).html(Math.round(dailyDataJson[i].temperatureMax));
        }
    }
};

function unixTimeToDay() {
    var date = new Date(dailyDataJson[i].time * 1000);
    var dayName = ["週日", "週一", "週二", "週三", "週四", "週五", "週六"]
    return dayName[date.getDay()];
};