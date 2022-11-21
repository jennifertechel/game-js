window.addEventListener('DOMContentLoaded', main);

function main() {
    loadStartScene();
}

function loadStartScene() {

    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const button1 = document.createElement("button");

    h1.textContent = "Welcome";
    p.textContent = "Oh no, we have a big problem. You overslept and have to get to that important meeting in asap. Before we begin, enter your name."
    button1.textContent = "Let's Begin!";
    button1.onclick = loadTransportScene;
    
    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1);
}

function loadTransportScene() {
    
    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");

    h1.textContent = "First Scene";
    p.textContent = "You get dressed in a hurry. You leave the apartment. Should you run to the bus or call a taxi?"
    button1.textContent = "Run to the bus";
    button1.onclick = loadCoffeeScene;
    
    button2.textContent = "Call a taxi";
    button2.onclick = loadToiletScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1, button2);

}

function loadCoffeeScene() {

    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");

    h1.textContent = "Yay!";
    p.textContent = "You caught the bus just in time. But getting on i a rush results in bumping into a stranger and their coffee spilling all over you. Your shirt is now ruined. Should you make another stop to get a new one, or just button your blazer and hope no one notices?";
    button1.textContent = "Buy a new one";
    button1.onclick = loadShirtScene;
  
    button2.textContent = "Hope no one notices";

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1, button2);
}

function loadToiletScene() {

    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const button1 = document.createElement("button");

    h1.textContent = "Oh no.."
    p.textContent = "Woops. In all the haste you drop your phone in the toilet, with all the important information for the meeting. You have no choice but to admit defeat. This day is not happening.";
    button1.textContent = "Start over";
    button1.onclick = loadStartScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1);
}

function loadShirtScene() {

    const h1 = document.createElement("h1");
    const p = document.createElement("p");
    const button1 = document.createElement("button");

    h1.textContent = "Almost..."
    p.textContent = "You bought and new one and changed in the office bathroom. But you are now two hours late, the meeting is over and your boss fires you on the spot.";
    button1.textContent = "Start over";
    button1.onclick = loadStartScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1);
}




/*
function main() {
    getHtmlElements();
    loadStartScene();
}

function getHtmlElements() {
    let container = document.getElementsByClassName("container");
    let h1 = document.getElementById("h1");
    let text = document.getElementById("text");
    let buttonOptionOne = document.getElementById("buttonOne");
    let input = document.getElementById("username");
}

function loadStartScene() {
    h1.textContent = "Welcome to your first page";
    text.textContent = "Oh no, we have a big problem. You overslept and have to get to that important meeting in asap. Before we begin, enter your name."

    let buttonOptionOne = document.getElementById("buttonOne");
    buttonOptionOne.textContent = "Let's begin!";
    buttonOptionOne.onclick = loadFirstScene;
   
}

function loadFirstScene() {

    const container = document.getElementsByClassName("container");

    h1.textContent = "First step";
    text.textContent = "You get dressed in a hurry. You leave the apartment. Should you run to the bus or call a taxi?";
   
    const buttonOptionOne = document.getElementById("buttonOne");
    buttonOptionOne.textContent = "Run to the bus";
    buttonOptionOne.onclick = loadSecondScene;

    const buttonOptionTwo = document.createElement('button');
    buttonOptionTwo.textContent = "Call a taxi";
    document.body.appendChild(buttonOptionTwo);
    buttonOptionTwo.onclick = loadThirdScene;

}

function loadSecondScene() {
    h1.textContent = "Yay!";
    text.textContent = "You caught the bus just in time. But getting on i a rush results in bumping into a stranger and their coffee spilling all over you. Your shirt is now ruined. Should you make another stop to get a new one, or just button your blazer and hope no one notices?";

    const buttonOptionOne = document.getElementById("buttonOne");
    buttonOptionOne.textContent = "Buy a new one";
    
    buttonOptionTwo.textContent = "Hope no one notices";
}

function loadThirdScene() {
    h1.textContent = "Oh no";
    text.textContent = "Woops. In all the haste you drop your phone in the toilet, with all the important information for the meeting. You have no choice but to admit defeat. This day is not happening."
    
    const buttonOptionOne = document.getElementById("buttonOne");
    buttonOptionOne.textContent = "Start over";

    buttonOptionOne.onclick = loadStartScene;
} */ 

