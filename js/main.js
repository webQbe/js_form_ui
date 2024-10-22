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
const progress = document.querySelector('#progress-bar');
