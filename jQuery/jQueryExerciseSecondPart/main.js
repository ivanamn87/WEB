/*
Inserting elements

Start with a blank HTML page

Using just JS (jQuery), create an image gallery

All links to images in the gallery should be elements of the same array!
When the gallery is created and visible on the page, create gallery title and
insert it before the gallery images

Go through gallery images and set a random size to each gallery image

*/


var imagesArray = ["https://a-z-animals.com/media/2021/01/mammals-400x300.jpg", "https://i.natgeofe.com/n/bec7bd50-0d57-4982-aeb5-82e5f8184f89/02-machine-saving-animals-nationalgeographic_1977490.jpg", "https://insideclimatenews.org/wp-content/uploads/2021/01/tiger-bronx-zoo_james-devaney-getty-scaled.jpg"];
var galleryDiv = $("<div class='gallery'>");
galleryDiv.appendTo("body");


    imagesArray.forEach(function(element){
        var galleryImg = $("<img>");
        galleryImg.attr("src", element);
        galleryImg.appendTo(".gallery");
    })


var newTitle = $("<h1>");
newTitle.text("Amazing Gallery");
$("body").prepend(newTitle);


$(".gallery img:first-child").css("width", "800px");
$(".gallery img:not(:first-child):not(:last-child)").css("width", "600px"); // :not(:first-child):not(:last-child)  Sets middle child elements size
$(".gallery img:last-child").css("width", "400px");    












/* $(function(){
    var $gallery = $("div");
    $("body").append($gallery);

    var title = $("<h2>Inserting Elements Gallery</h2>");
    $gallery.append(title);

    $("gallery").prepend(title);
    var allImages = [
        "img/ladybug.jpg",
        "img/leopard.jpg",
        "img/nature.jpg"
    ];

    allImages.forEach(function(element){
/        var $image = $("<img>");
        $image.attr("src", element);
        $image.width(parseInt(Math.rendom() *200 +100));
        $gallery.append($image);
    });

}) */



