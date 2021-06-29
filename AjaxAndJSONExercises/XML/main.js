var ENDPOINT = "http://www.geoplugin.net/xml.gp?ip=";

var $countryDisplay = document.querySelector('#country');
var $cityDisplay = document.querySelectorAll('#city')
var $submit = document.querySelector('#submit');
var $ipInput = document.querySelector('#ip');


// 1.create request
var newRequest = new XMLHttpRequest();



// 3. onload hendler
    newRequest.onload = function (){
        if(newRequest.status >= 200 && newRequest.status < 300){
            var response = newRequest.responseXML;
            var country = response.querySelector('geoplugin_countryName').textContent;
            var city = response.querySelector('geoplugin_continentName').textContent;

            console.log(city, $cityDisplay);
            var $countryDisplay = document.querySelector('#country');
            $countryDisplay.textContent = country;
            $cityDisplay.textContent = city;
            console.log(response);
        }
    }


    $submit.addEventListener('click', function(){
        var ipAddress = $ipInput.nodeValue;
        var completeURL = ENDPOINT + ipAddress;
    // 2. init request
    newRequest.open('GET', completeURL);
    // 4. send request
        newRequest.send();
    })