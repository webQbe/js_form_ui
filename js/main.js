// Questions Array
const questions = [

    { question: 'Enter Your First Name' },
    { question: 'Enter Your Last Name' },
    { question: 'Enter Your Email', pattern: '/\S+@\S+\.\S+/' }, // Add regex to match email address
    { question: 'Create A Password', type: 'password' }

];

// Transition Times

// Shake Animation time 100 milliseconds
const shakeTime = 100; 

// Time to switch from one question to another
const switchTime = 200;

// Initialize Position of First Question
let position = 0;

// Initialize DOM Elements
const formBox = document.querySelector('#form-box');
const nextBtn = document.querySelector('#next-btn');
const prevBtn = document.querySelector('#prev-btn');
const inputGroup = document.querySelector('#input-group');
const inputField = document.querySelector('#input-field');
const inputLabel = document.querySelector('#input-label');
const inputProgress = document.querySelector('#input-progress');
const formProgress = document.querySelector('#progress-bar');


// Event Listeners

// Listen for page load
document.addEventListener('DOMContentLoaded', prepForm);

// Functions

// Prepare DOM Elements
function prepForm(){

    // Get Current Question from Array & Set it to inputLabel
    inputLabel.innerHTML = questions[position].question;

    // Get Current Question Type & Set it to inputField
    // If No Type is Found, set it to Text
    inputField.type = questions[position].type || 'text';

    // Get Current Answer
    // If no default value, set to blank
    inputField.value = questions[position].answer || '';

    // Focus On Element
    inputField.focus();

    // Set formProgress Bar Width
    // Percentage Out of Total Array Length (100%)
    formProgress.style.width = (position * 100) / questions.length + '%';

    // Decide whether to Display Prev Button OR User Icon
    prevBtn.className = position ? 'fas fa-arrow-left' : 'fas fa-user';

    // Show Question & Display inputProgress
    showQuestion();


}




