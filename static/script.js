let startTime;
let waiting = false;

const box = getElementById("box");
const result = getElementById("result");

function startGame(){
    result.innerHTML = "";
    box.style.backgroundColor = "red";

    let delay = Math.random()*4000 + 1000;

    waiting = true;

    setTimeout(function(){
        box.style.backgroundColor = "green";
        startTime = Date.now();


    }, delay);
}

box.onclick = function(){
    if(box.style.backgroundColor === "green"){
        let reactionTime = Date.now() - startTime;
        result.innerHTML = "Reaction Time:" + reactionTime + "ms";
        box.style.backgroundColor = "red";
        box.innerHTML = "Wait...";

    }
    else{
        if(waiting){
            result.innerHTML = "Too soon! Wait for green.";
    }
}

}
