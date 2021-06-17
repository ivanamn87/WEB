function selectLi() {
    var li = document.querySelectorAll("li")
    console.log(li);
    li.forEach(function (element) {
        element.className = "first"
    })
}
selectLi();


function selThird() {
    var ul = document.querySelectorAll("ul");
    var ul3 = ul[ul.length - 1];
    console.log(ul3);
    var li = ul3.children;
    console.log(li);
    for (var i = 0; i < li.length; i++) {
        li[i].className = "second"

    }
}
selThird();


//Writing without functions
//2
var secondUlNode = document.querySelector("ul").nextElementSibling;
console.log(secondUlNode);

secondUlNode.className = "colors";

//3
var allLi = document.querySelectorAll("li");
console.log(allLi);

//4
var li0 = allLi[0];
li0.className = "liBackground";

var li1 = allLi[1];
li1.className = "liBackground";

var li2 = allLi[2];
li2.className = "liBackground";

var li3 = allLi[3];
li3.className = "liBackground";

var li4 = allLi[4];
li4.className = "liBackground";

var li5 = allLi[5];
li5.className = "liBackground";

//Easier way with writting less code vvv
//allLi.forEach((li) => li.style.backgroundColor = "red");

/* Or can be written like this
for (var i = 0; i < allLi.length; i++) {
    allLi[i].style.backgroundColor = "blue"; 
}
*/


//5
var newUl = document.createElement("ul");
newUl.innerHTML = "New UL text <li>first</li> <li>second</li>";
document.body.appendChild(newUl);



//6
newUl.className = "third";



/*
Selecting One/Multiple Elements
1. Create two unordered lists on the page.
2. Create a function that selects the second list and applies a class that sets some
background color to it.
3. Create a second function that, when triggered, selects all <li> elements on the
page.
4. The function also sets a class that sets some bg color to every <li> element.
5. Create one more unordered list and one more function
6. The function​ should select only <li> elements from that last list
Each <li> element should get a class that sets some bg color and transforms the
text to uppercase */



/* Traversing
Create two unordered lists.
Each list should be wrapped in a div element.
One <li> element in the second list should have a class “active”, which sets its background color.

Create a function that selects the <li> element with class “active”.
Remove the class from that element, and then select the first <li> element in the first unordered list using node relations.
Apply class to that newly selected <li> element
/*
/**/

var liClass = document.querySelectorAll("li")
console.log(liClass);

liClass[4].className = "active"

function selectLi() {
    var activeLi = document.querySelectorAll("li");
    activeLi[4].classList.remove("active");
    var newLi = activeLi[4].parentElement.parentElement.previousElementSibling.firstElementChild.childred[0]; //instead of children[0] we can put another firstElementChild and then we acceset li1
    newLi.className = "active";
    console.log(newLi);

}
selectLi(); 


/* Access/Update Text Node
Create an unordered list containing <li> items that represent navigation.

Create a function that takes text from one of the <li> elements 
and presents it on screen using alert.
  
Create one more function.
The function should take some text as an argument.
The function should select the last <li> element in the list 
and replace its text with text passed as the function argument.
*/


document.querySelector('nav ul li').textContent;

alert(document.querySelector('nav ul li').textContent);

function replaceText(text) {
    var lastChild = document.querySelector('nav ul li').textContent;
    lastChild = text;
    console.log(lastChild);
}
replaceText('neki novi tekst')



/* InnerHTML
Do the following exercise in two ways: using DOM manipulation methods and using innerHTML.
Create a function that is used for building a dropdown/select element.
It first builds a dropdown and then adds it to the DOM.
The function takes two arguments: the first is an array of strings and the second is a DOM node to which the dropdown will be added.
Create options that correspond to items in the passed array and add them to the select element.
Add the whole dropdown list to DOM .

Use this function to create two selects on the page.
The first select should be appended to the first div on the page.
The second select should be appended to the last div on the page.
*/

function createDropdown(array, node) {

    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {

        var item = document.createElement('li');                 // Create the list item:

        item.appendChild(document.createTextNode(array[i]));     // Set its contents:

        list.appendChild(item);                                  // Add it to the list:
    }
    var insertNode = document.querySelector(node);               //Inserting our dropdown list to NODE
    insertNode.appendChild(list);

    
    var select1 = "";
    var select2 = "";

    for (var i = 0; i < array.length; i++) {
        select1 += array[i];
    }

    div[0].innerHTML = select1;
    div[div.length - 1].innerHTML = select2;
    return div;
}
createDropdown(["first", "second", "third"], "div");




/* Attributes
Create a form that contains multiple input elements with labels.
Some of those elements should be required.

Create a function that validates the form.
The function checks each input element that belongs to the form.
If the element has the required attribute and no data, it should get red borde
*/


document.documentElement.hasChildNodes()    //returns children Nodes as an ARRAY
console.log(htmlNode.hasChildNodes());    //prints HTML and true (true because it has children)
console.log(document.documentElement.hasChildNodes()); //same thing as above just written in another way
console.log(document.documentElement.childNodes)      
console.log(htmlNode.childNodes);    //NodeList(3): head, text written inside tags (==$0 > blank spaces it sees as text), body
var bodyNode = htmlNode.childNodes[0];       //this is how we select body because its on index 2 of list
console.log(bodyNode);
console.log(bodyNode.tagName);  //BODY > because that the tag name


var containerDivNode = bodyNode.childNodes[1];  //this is how we access container div, because on index 0 it sees #text
//this method of accesing is called traversing
//this method of accesing is called traversing > When a node is selected, you can select another element in relation to it


var bodyNode = htmlNode.childNodes[2];
console.log(bodyNode);
console.log(bodyNode.tagName);
document.documentElement.childNodes[1].parentNode //this is how we select parent of childNodes[1]
console.log(containerDivNode.parentNode);   //we can access body like this, because its parent of containerDiv
var bodyNode = containerDivNode.parentNode;     //because body is parent of container
//getElementById("id")
//querySelector("css selector")     >>> these two selectors always return single node
//querySelector("p") >>> it will select us first p (paragraph) that it finds
var firstParagraphNode = document.getElementById("firstId");    //this is how we select first paragraph by ID
console.log(firstParagraphNode);
var firstParagraphNode2 = document.querySelector("div");        //it will select container div because its first div
// we can also write ("#first") or ("p") > we use css sintax
// ("header img") will give us img inside header
/*
Methods that return more than one element:
    - getElementsByTagName("tag")
    - getElementsByClassName("class")
    - querySelectorAll("css selector")
*/
var divNodeList = document.getElementsByTagName("div")
console.log(divNodeList);   //returns all divs
 
var alertDivNodeList = document.getElementsByClassName("alert") //returns all elements that have class alert inside them
console.log(alertDivNodeList);  //returns all elements that have class alert inside them
var divNodeList2 = document.querySelectorAll(".container div") //select all divs inside Div with class container
console.log(divNodeList2);  //select all divs inside Div with class container
var alertDivNodeList = document.getElementsByClassName("alert")
var alertDivNodeList1 = document.querySelectorAll(".container div")
var firstDivNode = alertDivNodeList1[0];
console.log(firstDivNode.className) //first and alert
firstDivNode.className = "something";   //to change the div with class "first" class to "something"



//Whitespace Nodes is space betwen elements.
//if we dont want that unwanted text nodes be created by browsers instead of node we will use
// parentElement, previousElementSibling, nextElementSibling, cildren, firstElementChild, lastElementChild
// parentElement, previousElementSibling, nextElementSibling, children, firstElementChild, lastElementChild






