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
  feedback.email = inputEl.value;
  feedback.message = textareaEl.value;

  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(feedback));
  btnEl.disabled = false;
}

onlocalStorage();

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  if (inputEl.value === '' || textareaEl.value === '') {
    alert('not all fields are filled');
    return;
  }

  console.log(feedback);
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM);
  btnEl.disabled = true;
}

function onlocalStorage() {
  const saveFeedback = localStorage.getItem(FEEDBACK_FORM);

  if (saveFeedback) {
    const feedbackValue = JSON.parse(saveFeedback);
    inputEl.value = feedbackValue.email;
    textareaEl.value = feedbackValue.message;
  }
}
