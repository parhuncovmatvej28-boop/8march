let compliments = [
    "Ты самая добрая!",
    "Ты невероятная!",
    "Ты вдохновляешь!",
    "Ты делаешь каждый день лучше!"
];

function generate() {
    let name = document.getElementById("name").value;
    let role = document.getElementById("role").value;
    let randomText = compliments[Math.floor(Math.random() * compliments.length)];

    let message = `С 8 Марта, ${role} ${name}! 💐 ${randomText}`;
    document.getElementById("output").innerText = message;

    createConfetti();
}

function createConfetti() {
    for (let i = 0; i < 30; i++) {
        let conf = document.createElement("div");
        conf.className = "confetti";
        conf.style.left = Math.random() * window.innerWidth + "px";
        conf.style.animationDuration = (Math.random() * 3 + 2) + "s";
        document.body.appendChild(conf);
    }
}


function nextStep(){
    document.getElementById("form").innerHTML="<h1>Процесс помывки посуды:</h1><ul id=\"steps\"></ul><button onclick=\"nextStep3()\">Следующий шаг</button>";
}

function nextStep2(){
    document.getElementById("form").innerHTML="<h1>:</h1><ul id=\"steps\"></ul><button onclick=\"nextStep()\">Следующий шаг</button>";
}

const steps = [
    "Залейте воду в раковину",
    "Намылите губку",
    "Потрите тарелку",
    "Сполосните посуду чистой водой",
    "Просушите кухонным полотенцем"
];

let currentStepIndex = 0;

window.onload = () => renderSteps();

function nextStep3() {
    const stepList = document.querySelector("#steps");
    let currentStepElement = stepList.children[currentStepIndex];

    if(currentStepElement){
        currentStepElement.classList.add('active-step');
    }

    if(currentStepIndex >= steps.length - 1) {
        alert("Все шаги выполнены успешно!");
          document.getElementById("form").innerHTML="<a href=\"ind.html\">перейти</a>";
        return;
    }

    currentStepIndex++;
    renderSteps();
}

function renderSteps() {
    const stepList = document.querySelector("#steps");
    stepList.innerHTML = '';

    for(let i = 0; i <= currentStepIndex; i++) {
        const li = document.createElement('li');
        li.textContent = steps[i];
        stepList.appendChild(li);
    }
}