//setInterval(createSpheres(), 1000);

/*var myScore = 0;

function startGame(){
    //newSphere = new component 
/*    myScore = new component ("30px", "Consolas", "black", 280, 40, "text");
*/
/*     myScore = ("30px", "Impact", "black", 280, 40, "text");
        

}*/
document.body.style.background = "url('giphybg.gif') center";
var lost = false
var score = 0

var array = ["#dollarSign", "#dress", "#cat", "#STEM", "#magazine", "#healthCare"]



function circleDis(sphereid) {
    console.log(sphereid)
    // score = document.createElement("a-text")
    // document.getElementById("scene").appendChild(score)
    var circle = document.getElementById(sphereid)
    score += 5
    //<a-entity text="value: Hello World;"></a-entity>
    //var text = document.createElement("a-text")
    //score.setAttribute("a-entity", "text")
    // score.setAttribute("position", "0 2 -10 ")
    // score.setAttribute("color", "black")
    // score.setAttribute("width", "20")

    document.getElementById("text1").setAttribute("value", score)


    console.log(score)

    circle.parentNode.removeChild(circle)
    // circle.setAttribute("visible", "false")
    // var parent = document.getElementById("scene");

    // parent.removeChild(parent.childNodes[0]);
}

var i = 0


//function to create spheres 
function createSpheres() {
    console.log(lost)
    if (lost == false) {
        i++
        var random = Math.floor(Math.random() * (array.length));
        
        
        var num = Math.floor(Math.random() * 10);
        num *= Math.floor(Math.random()*2) == 1 ? 1 : -1;
        var newSphere = document.createElement("a-box")
        newSphere.setAttribute("class", `circleClass`)
        newSphere.setAttribute("src", array[random])
        newSphere.setAttribute("height", 1)
        newSphere.setAttribute("color", "white")
        newSphere.setAttribute("width", 1)
        newSphere.setAttribute("depth", 0.5)

        newSphere.setAttribute("id", `circle${num}`)
        newSphere.setAttribute("position", `${num} 2 -10`)
        newSphere.setAttribute("scale", "2 2 2")

        document.getElementById("scene").appendChild(newSphere)
        newSphere.addEventListener("click", function() {
            console.log("here")
            circleDis(`circle${num}`)
        })
        var animation = document.createElement("a-animation")
        animation.setAttribute("attribute", "position")
        animation.setAttribute("to", `0 2 0`)
        animation.setAttribute("dur", "2000")
        newSphere.appendChild(animation)

        if (i == 15) { //THIS IS THE NUMBER!!!!!
            clearInterval(myVar)
            var myVar3;
            myVar3 = setInterval(winMessage, 4040);

        }
        /*  if (lost == false) {
         console.log("you won")}
    
    
        else if (lost == true); {
             console.log("you lose")
        }*/
    }
}

//lost function 
function checkLost() {
    /*    console.log("here")*/
    //calls with class name
    var circles = document.getElementsByClassName("circleClass")
    for (var index = 0; index < circles.length; index++) {
        var currentCircle = circles[index]
        var currentPosition = currentCircle.getAttribute("position")
        //if positon is at 0 0 0
        if (currentPosition['x'] == 0 && currentPosition['y'] == 2 && currentPosition['z'] == 0) {
            clearInterval(myVar)
            var myVar4;
            myVar4 = setInterval(loseMessage, 4);

            //remove the circle if missed 
            currentCircle.parentNode.removeChild(currentCircle)
            // document.getElementById("scene1").reset();
            lost = true
            return true
        }
    }


    return false;


}

/*var glassAudio = new Audio("glassAudio.mp3");
var trumpAudio = new Audio("wrongAudio.mp3");*/


var myVar;
myVar = setInterval(createSpheres, 2040);


var myVar2;

myVar2 = setInterval(checkLost, 1);

function winMessage() {
    if (lost == false) {
        var text = document.createElement("a-text")
        text.setAttribute("position", "-4 3 -4")
        text.setAttribute("width", "10")
        text.setAttribute("value", "Congradulations! You smashed the patriarchy!")
        document.getElementById("scene1").appendChild(text)
        document.body.style.background = "url('glassgif.gif') center";
        var audio1 = new Audio('glassAudio.mp3');
        audio1.play();
        setInterval(pauseAudio, 5000)
     
        

    }
}

function loseMessage() {
    if (lost == true) {
        var text2 = document.createElement("a-text")
        text2.setAttribute("position", "-4 3 -4")
        text2.setAttribute("width", "10")
        text2.setAttribute("value", "Another loss at the hands of the patriarchy:(")
        document.getElementById("scene1").appendChild(text2)
         document.body.style.background = "url('giphy-1.gif') center";
         var audio2 = new Audio('wrongAudio.mp3');
        audio2.play();
         
    }
}

function pauseAudio (){
    var vid = document.getElementById("audio1");
vid.volume = 0;
}

/*function trumpFig() {
    if dtrump = 
            ("trumpText").toggleClass("show");*/
