
for (var i = 0; i < document.querySelectorAll(".drum").length; i++)
{
    document.querySelectorAll("button")[i].addEventListener("click", function(){
        makeSound(this.innerHTML)
        animation(this.innerHTML)
    });
}    

document.addEventListener("keydown", function(event) {
    makeSound(event.key)
    animation(event.key)
})
            
function makeSound(key)
{

    switch (key) 
    {
        case "w":
            new Audio("./sounds/tom-1.mp3").play()
            break;

        case "a":
            new Audio("./sounds/tom-2.mp3").play()
            break
        
        case "s":
            new Audio("./sounds/tom-3.mp3").play()
            break

        case "d":
            new Audio("./sounds/tom-4.mp3").play()
            break
        
        case "j":
            new Audio("./sounds/crash.mp3").play()
            break
        
        case "k":
            new Audio("./sounds/kick-bass.mp3").play()
            break

        case "l":
            new Audio("./sounds/snare.mp3").play()
            break
    
        default: console.log(key)
            break;
    }
}

function animation (currentKey){
    document.querySelector("." + currentKey).classList.add("pressed");
    setTimeout(function(){
        document.querySelector("." + currentKey).classList.remove("pressed")
    }, 200)
}
