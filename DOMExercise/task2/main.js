function bgColor() {
    var myList = document.querySelector("div").nextElementSibling.firstElementChild.firstElementChild;
    myList.className = "active";

}
bgColor();

function changeClass() {
    myList.classList.remove("active");
    var firstLi = document.querySelector("div").firstElementChild.firstElementChild;
    firstLi.classList = "active";
}
changeClass();