import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea ');
const inputEl = document.querySelector('.feedback-form input');
const btnEl = document.querySelector('.feedback-form button');
btnEl.disabled = true;
const feedback = {};
const FEEDBACK_FORM = 'feedback-form-state';

formEl.addEventListener('input', throttle(onFeedbackForm, 500));

function onFeedbackForm(e) {
  
  feedback[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(feedback));
  btnEl.disabled = false;
}

onlocalStorage();

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  if (inputEl.value === '' || textareaEl.value === '') {
    alert('not all fields are filled');
  }
  if (inputEl.value !== '' && textareaEl.value !== '') {
    console.log(feedback);
    e.currentTarget.reset();
  }

  
  localStorage.removeItem(FEEDBACK_FORM);
  btnEl.disabled = true;
}

function onlocalStorage() {
  const saveFeedback = localStorage.getItem(FEEDBACK_FORM);

  if (saveFeedback) {
    const aaa = JSON.parse(saveFeedback);
    inputEl.value = aaa.email;
    textareaEl.value = aaa.message;
  }
}
