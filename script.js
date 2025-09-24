const passwordInput = document.getElementById("passwordInput");
const strengthBar = document.getElementById("strengthBar");
const feedback = document.getElementById("feedback");
const scoreDisplay = document.getElementById("scoreDisplay");
const uppercaseTag = document.getElementById("uppercaseTag");
const lowercaseTag = document.getElementById("lowercaseTag");
const digitTag = document.getElementById("digitTag");
const symbolTag = document.getElementById("symbolTag");


let score = 0;

function check() {

    score = 0;

    const password = passwordInput.value;

    if (password.length >= 12){
        score += 25;
    }
    else if(password.length >= 8){
        score += 15;
    }

    let typeCount = 0;
    let message = "";

    const Uppercase = /[A-Z]/.test(password);
    const Lowercase = /[a-z]/.test(password);
    const Digit = /[0-9]/.test(password);
    const Symbol = /[^a-zA-Z0-9]/.test(password);

    if(Uppercase) {
        typeCount++;
        uppercaseTag.className = `text-sm font-medium min-h-[1rem] text-green-500`;

    }
    else{
        uppercaseTag.className = `text-sm font-medium min-h-[1rem] text-red-500`;
    }

    if(Lowercase) {
        typeCount++;
        lowercaseTag.className = `text-sm font-medium min-h-[1rem] text-green-500`;

    }
    else{
        lowercaseTag.className = `text-sm font-medium min-h-[1rem] text-red-500`;
    }

    if(Digit) {
        typeCount++;
        digitTag.className = `text-sm font-medium min-h-[1rem] text-green-500`;

    }
    else{
        digitTag.className = `text-sm font-medium min-h-[1rem] text-red-500`;

    }
    if(Symbol) {
        typeCount++;
        symbolTag.className = `text-sm font-medium min-h-[1rem] text-green-500`;

    }
    else{
        symbolTag.className = `text-sm font-medium min-h-[1rem] text-red-500`;

    }
    

    
    if(typeCount >= 4){
        score += 55;
    }
    else if(typeCount === 3){
        score += 45;
    }
    else if(typeCount === 2){
        score += 35;
    }
    else if(typeCount === 1){
        score += 25;
    }
   




    scoreDisplay.innerHTML = `<span>${score}</span>/100`;

    if(score >= 80){
        strengthBar.style.width = `${score}%`;
        strengthBar.className = `relative h-2 rounded-full overflow-hidden mb-4 bg-green-500`;
        feedback.innerHTML = `<div id="feedback" class="text-sm font-medium text-gray-600 min-h-[2rem] text-green-500">Very Strong.</div>`
    }
    else if(score >= 60){
        strengthBar.style.width = `${score}%`;
        strengthBar.className = `relative h-2 rounded-full overflow-hidden mb-4 bg-blue-500`;
        feedback.innerHTML = `<div id="feedback" class="text-sm font-medium text-gray-600 min-h-[2rem] text-blue-500">Strong.</div>`
    }
    else if(score >= 45){
        strengthBar.style.width = `${score}%`;
        strengthBar.className = `relative h-2 rounded-full overflow-hidden mb-4 bg-yellow-500`;
        feedback.innerHTML = `<div id="feedback" class="text-sm font-medium text-gray-600 min-h-[2rem] text-yellow-500">Medium.</div>`
    }
    else if(score >= 30){
        strengthBar.style.width = `${score}%`;
        strengthBar.className = `relative h-2 rounded-full overflow-hidden mb-4 bg-orange-500`;
        feedback.innerHTML = `<div id="feedback" class="text-sm font-medium text-gray-600 min-h-[2rem] text-orange-500">Weak.</div>`
    }
    else {
        strengthBar.style.width = `${score}%`;
        strengthBar.className = `relative h-2 rounded-full overflow-hidden mb-4 bg-red-500`;
        feedback.innerHTML = `<div id="feedback" class="text-sm font-medium text-gray-600 min-h-[2rem] text-red-500">Very Weak.</div>`
    }
}

passwordInput.addEventListener('input', check);