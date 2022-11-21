/** Event that waits for HTML document to loaded before executing main function */
window.addEventListener('DOMContentLoaded', main);

/** Function calling on function for the starting scene */
function main() {
    loadStartScene();
}

/** @type {HTMLHeadingElement} creating h1-tag to display scene heading */
const h1 = document.createElement("h1");
/** @type {HTMLParagraphElement} creating p-tag to display scene message */
const p = document.createElement("p");
/** @type {HTMLInputElement} creating input for user to enter their name */
const input = document.createElement("input");
/** @type {HTMLButtonElement} creating button for option number one in scenes */
const button1 = document.createElement("button");
/** @type {HTMLButtonElement} creating button for option number two in scenes  */
const button2 = document.createElement("button");

/** Variable to hold input from user */
let username = "";

/** Function that loads and displays welcome/get started-message,  */
function loadStartScene() {

    h1.textContent = "Welcome to Sleepyhead Chaos";
    p.textContent = "Oh no, you overslept and have to get to an important meeting asap. Can you make it to the office in time? Before we begin, enter your name."
    input.type = "text";
    input.placeholder = "Enter your name";
    button1.textContent = "Let's Begin!";
    button1.onclick = saveUsername;
    
    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, input, button1);
}

/** Function that saves username in a variable, and redirects to next scene */
function saveUsername() {
    username = input.value;
    input.value = "";
    loadTransportScene();
}

/** Function that loads and displays a new message for the first scene, including two options with click-events*/
function loadTransportScene() {
    
    h1.textContent = "Hello " + username;
    p.textContent = "You get dressed in a hurry. You're about to leave the apartment. Should you run to the bus or call a taxi?";
    button1.textContent = "Run to the bus";
    button1.onclick = loadCoffeeScene;
    
    button2.textContent = "Call a taxi";
    button2.onclick = loadToiletScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1, button2);
}

/** Function that loads and displays a new message for the third scene, including two options with click-events */
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

/** Function that loads and displays a new message for the fourth scene, including two options with click-events */
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

/** Function that loads and displays a new message for a dead-end scene, and a return option */
function loadToiletScene() {

    h1.textContent = "Oh no.."
    p.textContent = "Woops. In all the haste you drop your phone in the toilet, with all the important information for the meeting. You have no choice but to admit defeat. This day is not happening.";
    
    button1.textContent = "Start over";
    button1.onclick = loadStartScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1);
}

/** Function that loads and displays a new message for a dead-end scene, and a return option */
function loadShirtScene() {

    h1.textContent = "Almost..."
    p.textContent = "You bought and new one and changed in the office bathroom. But you are now two hours late, the meeting is over and your boss fires you on the spot.";
    button1.textContent = "Start over";
    button1.onclick = loadStartScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1);
}

/** Function that loads and displays a new message for a dead-end scene, and a return option */
function loadBossScene() {

    h1.textContent = "Liar liar..";
    p.textContent = "Your boss doesn't buy your made-up excuse, and tells you not to bother with the meeting. Honesty lasts longer..";

    button1.textContent = "Start over";
    button1.onclick = loadStartScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1);

}

/** Function that loads and displays a new message for the final scene, and a return option */
function loadEndScene() {
    
    h1.textContent = "Congratulations " + username + "!";
    p.textContent = "Your boss appreciates your honesty and laughs at the situation. She wishes you best of luck on the meeting and you enter the conference room with newfound conficende. Puh, what a day."

    button1.textContent = "Return to start";
    button1.onclick = loadStartScene;

    const container = document.getElementById("container");
    container.innerHTML = "";
    container.append(h1, p, button1);
}


