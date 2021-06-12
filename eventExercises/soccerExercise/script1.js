/*  Soccer player
○ Create page which has soccer field as bg image
○ In top left corner there should be image of soccer player
○ When user clicks anywhere on the field, the player is moved to that
position
○ Add the button which is used to disable player movement   */

var containerNode = document.querySelector(".container");
var imgNode = document.querySelector(".player");
var buttonNode = document.querySelector(".stop");

function addPictureHandler(event) {
    var xPosition = event.clientX;
    var yPosition = event.clientY;
    console.log(xPosition);
    console.log(yPosition);

    imgNode.style.left = xPosition - 50 + 'px';
    imgNode.style.top = yPosition - 50 + 'px';
}

containerNode.addEventListener("click", addPictureHandler);

function removeHandler() {
    containerNode.removeEventListener("click", addPictureHandler);
}