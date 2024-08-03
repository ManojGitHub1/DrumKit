// Using named function
// document.querySelector("button").addEventListener("click", handleClick);
// function handleClick() {
//     alert("I got clicked");
// }

// Using anonymus function
// document.querySelector("button").addEventListener("click", function handleClick() {
    // alert("I got clicked");
// });

// var no_of_drum = document.querySelectorAll(".drum").length;
// for(var i=0; i<no_of_drum; i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click", function () {
//         alert("I got clicked");
//     });
// }


// ***********Detecting Button Press
var no_of_drum = document.querySelectorAll(".drum").length;
for(var i=0; i<no_of_drum; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        // this runned on console outputs clicked button
        // console.log(this.innerHTML); 
        // this.style.color = "white";

        var buttonInnerHTML = this.innerHTML;
        makeSound(buttonInnerHTML);

        buttonanimation(buttonInnerHTML);

    });
}

// ***********Detecting Keyboard Press
// adding eventlistener to entire document rather than button
document.addEventListener("keypress", function(event) {
    makeSound(event.key)
    
    buttonanimation(event.key)
})

function makeSound(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;

        case "j":
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;

        case "k":
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;

        case "l":
            var kick = new Audio("sounds/kick-bass.mp3");
            kick.play();
            break;

        default:
            console.log(buttonInnerHTML);
            break;
    }
}


function buttonanimation(currentkey) {
    var activeButton = document.querySelector("." + currentkey);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);

}

