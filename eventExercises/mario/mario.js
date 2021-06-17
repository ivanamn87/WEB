/*  
Super Mario
○ Create Super Mario emulator
○ On right arrow click, Mario should run to the right

■ Running animation
■ Ground should move while Mario is running
*/

var body = document.querySelector('body');
var img = document.querySelector('.mario');
var xPos = 0;
var yPos = 0;

document.addEventListener ('keydown', switchImgSrcLeft);
document.addEventListener ('keydown', moveBackgroundLeft);

document.addEventListener ('keydown', switchImgSrcRight);
document.addEventListener ('keydown', moveBackgroundRight);

document.addEventListener ('keyup', stopRunning);



function moveBackgroundRight(event){
    if(event.keyCode === 39){
        body.style.backgroundPosition = xPos + "px " + yPos;
        xPos -=20; 
    }
}

function moveBackgroundLeft(event){
    if(event.keyCode === 37){
        body.style.backgroundPosition = xPos + "px " + yPos;
        xPos +=20; 
    }

}


function switchImgSrcRight(event){
    if(event.keyCode === 39) {
        img.src = "./SuperMarioAssets/mario_running.gif";
        document.removeEventListener('keydown', switchImgSrcRight);
    }
}

function switchImgSrcLeft(event){
    if(event.keyCode === 37) {
        img.src = "./SuperMarioAssets/left_running.gif";
        document.removeEventListener('keydown', switchImgSrcLeft);
    }
}




function stopRunning(event){
    if(event.keyCode === 39){
        img.src = "./SuperMarioAssets/mario.png";
        document.addEventListener('keydown', switchImgSrcRight);
    }
    if(event.keyCode === 37){
        img.src = "./SuperMarioAssets/mario_left.png";
        document.addEventListener('keydown', switchImgSrcLeft);
    }
}

