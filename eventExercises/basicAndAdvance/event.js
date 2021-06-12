/* Event Handlers from HTML ---- BASIC
 ● Create page containing only one button
 ● Toggle background color on button click   */ 


 var button = document.querySelector("button");
 var body = document.querySelector("body");
 var isOn = true;

 function changeBackgroundColor () {
     var div = document.querySelector("div");
     div.classList.toggle("active");
 }


/*  ADVANCE
● Adapt basic example
● On button click, automatically toggle background
● Have a button to cancel automatic toggle    */


function turnOff() {
    if (isOn) {
        button.onclick = null;
        isOn = false;
    } else {
        button.onclick = changeBackgroundColor;
        isOn = true;
    }
}

/*  Event Handlers Defined on DOM Elements (Chat Room)
● Create chat room page containing
○ Input field for writing message
○ Button for sending message
○ Area for showing sent messages

● After the Send button is clicked, the message from the input field is moved to the
area with all other messages

*/


