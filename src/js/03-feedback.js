import throttle from 'lodash.throttle';
const formEl = document.querySelector('.feedback-form');
const textareaEl = document.querySelector('.feedback-form textarea ');
const inputEl = document.querySelector('.feedback-form input');

const feedback = {};

const FEEDBACK_FORM = 'feedback-form-state';

formEl.addEventListener('input', throttle(onFeedbackForm, 500));

function onFeedbackForm(e) {
  feedback[e.target.name] = e.target.value;
  localStorage.setItem(FEEDBACK_FORM, JSON.stringify(feedback));
}
onlocalStorage();

formEl.addEventListener('submit', onSubmitForm);

function onSubmitForm(e) {
  e.preventDefault();

  console.log(feedback);
  e.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_FORM);
}

function onlocalStorage() {
  const saveFeedback = localStorage.getItem(FEEDBACK_FORM);

  if (saveFeedback) {
    const { email, message } = JSON.parse(saveFeedback);
    inputEl.value = email;
      textareaEl.value = message;
      feedback.email = email;
      feedback.message = message;
  }
}
