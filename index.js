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