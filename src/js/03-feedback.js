import throttle from 'lodash.throttle';



const key = 'feedback-form-state'

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('.feedback-form input'),
    message: document.querySelector('.feedback-form textarea')
};

const userData = {};
const onSetData = throttle(function(event) {
    userData.email = refs.email.value
    userData.message = refs.message.value
    localStorage.setItem(key, JSON.stringify(userData))
}, 500)

refs.form.addEventListener(`submit`, onFormSubmit);
refs.email.addEventListener(`input`, onSetData);
refs.message.addEventListener(`input`, onSetData);



function onFormSubmit(event) {
    event.preventDefault();
    console.log(`e-mail: ${refs.email.value}, message: ${refs.message.value}`)

    event.currentTarget.reset();
    localStorage.removeItem(key)
}
onGetData()

function onGetData() {
    const savedData = localStorage.getItem(key);
    const parseData = JSON.parse(savedData);
    if (parseData) {
        refs.email.value = parseData.email || ``
        refs.message.value = parseData.message || ``
    }
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