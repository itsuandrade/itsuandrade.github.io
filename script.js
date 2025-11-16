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

const question2 = document.querySelector("#question2");
const correct2 = "28jul";
question2.addEventListener('click', e => {
    const choice2 = e.target.id;
    if (choice2 === correct2) {
        document.getElementById(choice2).classList.add("right-answer");
        document.getElementById("feed2").innerHTML = "Isso mesmo!"
        score += 1;
    } else {
        document.getElementById(choice2).classList.add("wrong-answer");
        document.getElementById("feed2").innerHTML = "Errou... a resposta certa é 28 de Julho!";
    }
}, {once: true});

const question3 = document.querySelector("#question3");
const correct3 = "leonardo";
question3.addEventListener('click', e => {
    const choice3 = e.target.id;
    if (choice3 === correct3) {
        document.getElementById(choice3).classList.add("right-answer");
        document.getElementById("feed3").innerHTML = "Isso mesmo!"
        score += 1;
    } else {
        document.getElementById(choice3).classList.add("wrong-answer");
        document.getElementById("feed3").innerHTML = "Errou... a resposta certa é Leonardo (Tisatto com Z)!";
    }
}, {once: true});

const question4 = document.querySelector("#question4");
const correct4 = "aposentar";
question4.addEventListener('click', e => {
    const choice4 = e.target.id;
    if (choice4 === correct4) {
        document.getElementById(choice4).classList.add("right-answer");
        document.getElementById("feed4").innerHTML = "Isso mesmo!"
        score += 1;
    } else {
        document.getElementById(choice4).classList.add("wrong-answer");
        document.getElementById("feed4").innerHTML = "Errou... a resposta certa é APOSENTADORIA PRECOCE!";
    }
}, {once: true});

const question5 = document.querySelector("#question5");
const correct5 = "pc";
question5.addEventListener('click', e => {
    const choice5 = e.target.id;
    if (choice5 === correct5) {
        document.getElementById(choice5).classList.add("right-answer");
        document.getElementById("feed5").innerHTML = "Isso mesmo!"
        score += 1;
    } else {
        document.getElementById(choice5).classList.add("wrong-answer");
        document.getElementById("feed5").innerHTML = "Adoro todos (menos HC), mas a resposta certa é PC Gamer!";
    }
}, {once: true});

let scorePoints = document.getElementById("scorePoints");
let scoreFeedback = document.getElementById("scoreFeedback");
let message = "";

setInterval(function() {
    scorePoints.innerHTML = score + " pontos";

    if (score === 5) message = "Sabe tudo! Te amo, queride amigue <3";
    else if (score === 4) message = "Sabe bastante!";
    else if (score === 3) message = "Ainda pode aprender mais sobre mim...";
    else message = "Agora você é ex-amigo...";

    scoreFeedback.innerHTML = message;
}, 1);