//Hier staan alle variabelen die ik heb gebruikt en ik heb twee arrays gebruikt.
var tamagotchiStaat = ["tamagotchi-verdrietig2.png", "tamagotchi-huilend.png", "tamagotchi-dik.png", "tamagotchi-dood.png"];
var meter = ["meter-huilen.png", "meter-verdrietig.png", "meter-blij.png", "meter-dik.png", "meter-dood.png"];

var textElement = document.querySelector("#tekst");
var naamInput = document.querySelector("#name");
var tamagotchiImg = document.querySelector("#tamagotchi");
var knipoogButton = document.querySelector("#knipoog-button");
var slaapButton = document.querySelector("#slaap-button");
var nachtKnop = document.querySelector(".achtergrond-nacht");
var waterKnop = document.querySelector(".achtergrond-water");
var bosKnop = document.querySelector(".achtergrond-bos");
var geenAchtergrondKnop = document.querySelector("#geen");
var steakImg = document.querySelector("#steak");
var broccoliImg = document.querySelector("#broccoli");
var brulAudio = document.querySelector("#brul");
var punten = document.querySelector("#puntenteller");
var blijheidsmeter = document.querySelector("#blijheidsmeter");
var springButton = document.querySelector("#springen");

var score = 0;

function updatePunten() {
    //Dit zet de score in mijn HTML.
    punten.textContent = score;
    if (score <= -2) {
        tamagotchiImg.src = 'Images/' + tamagotchiStaat[0];
        blijheidsmeter.src = 'Images/' + meter[1];
    } else {
        terugNaarStandaard();
        blijheidsmeter.src = 'Images/' + meter[2];
    }
    if (score <= -4) {
        tamagotchiImg.src = 'Images/' + tamagotchiStaat[1];
        blijheidsmeter.src = 'Images/' + meter[0];
    }
    if (score > 2) {
        tamagotchiImg.src = 'Images/' + tamagotchiStaat[2];
        blijheidsmeter.src = 'Images/' + meter[3];
    }
    if (score > 4) {
        tamagotchiImg.src = 'Images/' + tamagotchiStaat[3];
        blijheidsmeter.src = 'Images/' + meter[4];
        punten.textContent = 'Game over';
        broccoliImg.hidden = true;
        steakImg.hidden = true;
    } //Met dit if-statement worden deze drie eventlisteners geremoved, want dan ben je game over.
    if (score == 4) {
        knipoogButton.removeEventListener("mouseover", knipOgen);
        slaapButton.removeEventListener("mouseover", gaSlapen);
        tamagotchiImg.removeEventListener("dblclick", terugNaarStandaard);
        springButton.removeEventListener("click", gaSpringen);
    }
}

//Met deze functie worden er punten bij en afgehaald en worden de punten geüpdate.
function puntErbij() {
    console.log("doe er een punt bij");
    score = score + 1;
    updatePunten();
}

function puntEraf() {
    console.log("Doe er een punt af");
    score = score - 1;
    updatePunten();
}
//Met deze functie wordt de tekst veranders van 'Wat is mijn naam?' naar 'Hallo, ik ben + de naam die wordt ingevoerd'.
function groet() {
    textElement.textContent = "Hallo, ik ben" + " " + naamInput.value;
}

function knipOgen() {
    tamagotchiImg.src = "./Images/tamagotchi-knipoog.png";
}

//Met deze functie gaat de leeuw springen. Na 0.5 seconden wordt class spring weggehaald, zodat de leeuw weer kan springen.
function gaSpringen() {
    console.log("spring");
    tamagotchiImg.classList.add("spring");
    setTimeout(() => {
        tamagotchiImg.classList.remove("spring");
    }, 500);
}

function gaSlapen() {
    tamagotchiImg.src = "./Images/tamagotchi-slapend.png";
}

//Met deze functie wordt er een brulgeluid afgespeeld als je de leeuw steak geeft.
function gaEten() {
    brulAudio.play();
}

function terugNaarStandaard() {
    tamagotchiImg.src = "./Images/tamagotchi.png";
}

//Met deze functie kan je de achtergronden veranderen. Eerst worden de anderen achtergronden verwijderd en dan wordt er een nieuwe toegevoegd.
function maakNachtAchtergrond() {
    document.body.classList.remove("achtergrond-nacht", "achtergrond-water", "achtergrond-bos");
    document.body.classList.add('achtergrond-nacht');
}

function maakBosAchtergrond() {
    document.body.classList.remove("achtergrond-nacht", "achtergrond-water", "achtergrond-bos");
    document.body.classList.add("achtergrond-bos");
}

function maakWaterAchtergrond() {
    document.body.classList.remove("achtergrond-nacht", "achtergrond-water", "achtergrond-bos");
    document.body.classList.add("achtergrond-water");
}

//Met deze functie worden alle achtergronden verwijders en geen nieuwe toegevoegd. Dit is voor als je geen achtergrond wilt.
function geefGeenAchtergrond() {
    document.body.classList.remove("achtergrond-nacht", "achtergrond-water", "achtergrond-bos");
}

//Hier heb ik alle EventListeners staan die ik heb gebruikt.
naamInput.addEventListener("change", groet);
knipoogButton.addEventListener("mouseover", knipOgen);
slaapButton.addEventListener("mouseover", gaSlapen);
nachtKnop.addEventListener("click", maakNachtAchtergrond);
waterKnop.addEventListener("click", maakWaterAchtergrond);
bosKnop.addEventListener("click", maakBosAchtergrond);
geenAchtergrondKnop.addEventListener("click", geefGeenAchtergrond);
steakImg.addEventListener("dragstart", gaEten);
steakImg.addEventListener("dragstart", puntErbij);
broccoliImg.addEventListener("dragstart", puntEraf);
tamagotchiImg.addEventListener("dblclick", terugNaarStandaard);
springButton.addEventListener("click", gaSpringen);