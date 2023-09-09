import throttle from 'lodash.throttle';
import '../css/common.css';
import '../css/03-feedback.css';

const refs = {
  form: document.querySelector('form'),
  input: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

try {
  // Retrieve the stored form state from localStorage
  const stateJSON = localStorage.getItem('feedback-form-state');

  if (stateJSON) {
    // Parse the JSON string into a JavaScript object
    const formState = JSON.parse(stateJSON);

    // Populate the input and textarea fields with the stored values
    refs.input.value = formState.email;
    refs.textarea.value = formState.message;
  }
} catch (error) {
  console.error('Error loading form state from localStorage:', error);
}

refs.form.addEventListener('input', throttle(handlerFormOutput, 500));

function handlerFormOutput(evt) {
  const formState = {
    email: refs.input.value,
    message: refs.textarea.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

function clearFields() {
  refs.input.value = '';
  refs.textarea.value = '';
}

refs.form.addEventListener('submit', evt => {
  evt.preventDefault();
  const state = JSON.parse(localStorage.getItem('feedback-form-state'));
  console.log(JSON.stringify(state));
  console.log('Email: ' + state.email);
  console.log('Message: ' + state.message);
  localStorage.removeItem('feedback-form-state');
  clearFields();
});
