// Questions Array
const questions = [

    { question: 'Enter Your First Name' },
    { question: 'Enter Your Last Name' },
    { question: 'Enter Your Email', pattern: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/ }, // Add regex to match email address
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

// Listen for Page Load
document.addEventListener('DOMContentLoaded', prepForm);

// Listen for Next Button Click
nextBtn.addEventListener('click', validate);

// Listen for inputField focused Enter keypress
inputField.addEventListener('keyup', e => {

    // Check if key pressed is 'Enter'
    if(e.keyCode == 13){

        validate();

    }

})

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

// Display Question
 function showQuestion(){

    inputGroup.style.opacity = 1;
    inputProgress.style.transition = '';
    inputProgress.style.width = '100%';

} 

// Hide Question
function hideQuestion(){

    inputGroup.style.opacity = 0;
    inputLabel.style.marginLeft = 0;
    inputProgress.style.width = 0;
    inputProgress.style.transition = 'none';
    inputGroup.style.border = null;

}

// Transform to Create Shake Motion
function transform(x, y){

    console.log(x, y);

    // Add Animation To formBox
    formBox.style.transform = `translate(${x}px, ${y}px)`;

}



// Validate User Input
function validate(){

    // If there is a pattern in array, 
    // make sure it matches
    if(!inputField.value.match(questions[position].pattern || /.+/)){

        // When not matching
        inputFail();

    } else {

        // When matching
        inputPass();

    }

}

// When pattern not matching
function inputFail(){

    // Set .error Class
    formBox.className = 'error';

    // Repeat Shake Motion of transform() 
    // 6 Times, Hits one side 3 times
    for(let i = 0; i < 6; i++){

        setTimeout(transform, shakeTime * i, ((i % 2) * 2 - 1) * 20, 0);

        // Prevent stopping at Right side
        setTimeout(transform, shakeTime * 6, 0, 0);
        
        // Focus Input Field
        inputField.focus();
    }


}


// When pattern is matching
function inputPass(){

    formBox.className = ''; // Removes .error class

    // Animation
    setTimeout(transform, shakeTime * 0, 0, 10); // Push down 
    setTimeout(transform, shakeTime * 1, 0, 0); // Pull up again


    // Change Question
    // Increment Position by 1
    position++; 

    // Check if Next Question Exists,
    if(questions[position]){

        // Hide Current & Get Next
        hideQuestion();
        prepForm();

    } else {

        // If No Other Questions
        hideQuestion();

        // Close formBox
        formBox.className = 'close';

        // Set Form Progress
        formProgress.style.width = '100%';

        // Form Completion
        formComplete();

    }

}


// Form Complete Success Message

function formComplete(){

    // Create h1 tag with Message
    const h1 = document.createElement('h1');

    // Add style
    h1.classList.add('end');

    // Display User's First Name in the Message
    h1.appendChild(document.createTextNode(`Thanks ${questions[0].answer}, You are registered! You'll get an email shortly.`));

    // Fade-in Animation 01 - Timeout 1000
    setTimeout(() => {

        // Append h1 to parent element of formBox 
        formBox.parentElement.appendChild(h1);

        // Fade-in Animation 02 - Timeout 50
        setTimeout(() => h1.style.opacity = 1, 50);

    }, 1000);

}