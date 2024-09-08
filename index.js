
for(var i=0;i<7;i++){
document.querySelectorAll("button")[i].addEventListener("click", iAmClicked);
}
function iAmClicked(){
    var buttonClicked = this.innerHTML;
    makeSound(buttonClicked);  
    addAnimation(buttonClicked); 
}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    addAnimation(event.key);
});

function makeSound(key){
    switch(key){
        case "w":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;
        case "a":
            var kickBase = new Audio('./sounds/kick-bass.mp3');
            kickBase.play();
            break;
        case "s":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "d":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "j":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "k":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "l":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        default:
            console.log("press the mentioned keys");
    }
}

function addAnimation(currKey){
    var activeButton = document.querySelector("."+currKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}

