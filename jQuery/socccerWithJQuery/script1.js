/*  Soccer player
○ Create page which has soccer field as bg image
○ In top left corner there should be image of soccer player
○ When user clicks anywhere on the field, the player is moved to that
position
○ Add the button which is used to disable player movement   */


function movePlayer(e) {
    $("img").css({
        "left": e.pageX - 50,
        "top": e.pageY -50
    }, 500)
};

$("body").on("click", movePlayer);

$("button").click(function() {
    $("body").off("click", movePlayer)
})



