window.addEventListener('DOMContentLoaded', main);

function main() {
    loadStartScene();
}

const h1 = document.createElement("h1");
const p = document.createElement("p");
const input = document.createElement("input");
const button1 = document.createElement("button");
const button2 = document.createElement("button");

let username = "";

function loadStartScene() {

    h1.textContent = "Welcome";
    p.textContent = "Oh no, we have a big problem. You overslept and have to get to that important meeting in asap. Before we begin, enter your name."
    input.type = "text";
    input.placeholder = "Enter your name";
    button1.textContent = "Let's Begin!";
    button1.onclick = saveUsername;
    
    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, input, button1);
}

function saveUsername() {
    username = input.value;
    input.value = "";
    loadTransportScene();
    console.log(username);
}

function loadTransportScene() {
    
    h1.textContent = "Hello " + username;
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

    h1.textContent = "Yay!";
    p.textContent = "You caught the bus just in time. But getting on i a rush results in bumping into a stranger and their coffee spilling all over you. Your shirt is now ruined. Should you make another stop to get a new one, or just button your blazer and hope no one notices?";
    button1.textContent = "Buy a new one";
    button1.onclick = loadShirtScene;
  
    button2.textContent = "Hope no one notices";
    button2.onclick = loadOfficeScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1, button2);
}

function loadOfficeScene() {
    
    h1.textContent = "At the office";
    p.textContent = "You made it to the office. You run into your boss in the elevator. She notices you're flustered and confronts you about it. Do you make up a lie or tell the truth about this morning's chaos?";

    button1.textContent = "Make up a lie";
    button1.onclick = loadBossScene;

    button2.textContent = "Be honest";
    button2.onclick = loadEndScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1, button2);
}

function loadToiletScene() {

    h1.textContent = "Oh no.."
    p.textContent = "Woops. In all the haste you drop your phone in the toilet, with all the important information for the meeting. You have no choice but to admit defeat. This day is not happening.";
    
    button1.textContent = "Start over";
    button1.onclick = loadStartScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1);
}

function loadShirtScene() {

    h1.textContent = "Almost..."
    p.textContent = "You bought and new one and changed in the office bathroom. But you are now two hours late, the meeting is over and your boss fires you on the spot.";
    button1.textContent = "Start over";
    button1.onclick = loadStartScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1);
}

function loadBossScene() {

    h1.textContent = "Liar liar..";
    p.textContent = "Your boss doesn't buy your made-up excuse, and tells you not to bother with the meeting. Honesty lasts longer..";

    button1.textContent = "Start over";
    button1.onclick = loadStartScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1);

}

function loadEndScene() {
    
    h1.textContent = "Congratulations!"
    p.textContent = "Your boss appreciates your honesty and laughs at the situation. She wishes you best of luck on the meeting and you enter the conference room with newfound conficende. Puh, what a day."

    button1.textContent = "Return to start";
    button1.onclick = loadStartScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1);
}


