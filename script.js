let score = 0;

const question1 = document.querySelector("#question1");
const correct1 = "cuiaba";
question1.addEventListener('click', e => {
    const choice1 = e.target.id;
    if (choice1 === correct1) {
        document.getElementById(choice1).classList.add("right-answer");
        document.getElementById("feed1").innerHTML = "Isso mesmo!"
        score += 1;
    } else {
        document.getElementById(choice1).classList.add("wrong-answer");
        document.getElementById("feed1").innerHTML = "Errou... a resposta certa é Cuiabá!";
    }
}, {once: true});

const question2 = document.querySelector("#question1");
const correct2 = "cuiaba";
question1.addEventListener('click', e => {
    const choice1 = e.target.id;
    if (choice1 === correct1) {
        document.getElementById(choice1).classList.add("right-answer");
        document.getElementById("feed2").innerHTML = "Isso mesmo!"
        score += 1;
    } else {
        document.getElementById(choice1).classList.add("wrong-answer");
        document.getElementById("feed2").innerHTML = "Errou... a resposta certa é Cuiabá!";
    }
}, {once: true});