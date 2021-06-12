/*   
Event Handlers Defined on DOM Elements (Chat Room)

● Create chat room page containing
○ Input field for writing message
○ Button for sending message
○ Area for showing sent messages

● After the Send button is clicked, the message from the input field is moved to the
area with all other messages
*/


var buttonHandler = document.querySelector(".send");
var chat = document.querySelector(".chat");
var input = document.querySelector(".chatInput");

buttonHandler.addEventListener("click", function () {
    var paragraph = document.createElement("P");
    paragraph.innerHTML = "" + input.value;
    document.getElementById("chat").appendChild(paragraph);
    input.value = "";
});