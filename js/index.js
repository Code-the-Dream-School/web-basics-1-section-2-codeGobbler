// Greeting function that asks the user's name and if they like music,
//depending on their answer, the function returns a conditional response.

let musicQ = () => {
    let name = prompt("Hey, what's your name?");
    let invite = prompt(`Nice name ${name}, you like music?`);
    if (invite==="yes") {
        alert(`I knew you were cool ${name}. You can check out my playlist as you browse my front page.`);
    }
        else {
            alert(`Hey, different strokes for different folks. I respect that ${name}`);
        }
};

musicQ();