import throttle from 'lodash.throttle';


const feedbackForm = document.querySelector('.feedback-form');
const email = document.querySelector('.feedback-form input');
const message = document.querySelector('.feedback-form textarea');

console.log(feedbackForm)
console.log(email)
console.log(message)

const userData = {};
const onSetData = throttle(function(event) {
    userData.email = email.value
    userData.message = message.value
    localStorage.setItem('feedback-form', JSON.stringify(userData))
}, 500)

feedbackForm.addEventListener(`submit`, onFormSubmit);
email.addEventListener(`input`, onSetData);
message.addEventListener(`input`, onSetData);

onGetData()

function onGetData() {
    const savedData = localStorage.getItem('feedback-form');
    const parseData = JSON.parse(savedData);
    if (parseData) {
        email.value = parseData.email || ``
        message.value = parseData.message || ``
    }
}

function onFormSubmit(event) {
    event.preventDefault();
    console.log(`e-mail: ${email.value}, message: ${message.value}`)

    // event.currentTarget.reset();
    localStorage.getItem('feedback-form')
}


















// formInput.addEventListener('submit', form);
// console.log(formInput);


// function form(event) {
//     event.preventDefault();
//     console.log(`e-mail: ${formInput.value}, message: ${ formInput.value}`)
//     localStorage.removeItem("feedback-form-state", JSON.stringify(value))
//     event.currentTarget.reset();

// }
// const messageInput = document.querySelector('.feedback-form textarea');

// messageInput.addEventListener('input', message);

// function message(event) {
//     event.preventDefault();
//     console.log(`e-mail: ${formInput.email.value}, message: ${ formInput.message.value}`)
//     localStorage.removeItem("feedback-form-state", JSON.stringify(value))
//     event.currentTarget.reset();

// }