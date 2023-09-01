import throttle from "lodash.throttle";
import "../css/common.css";
import "../css/03-feedback.css";

const STORAGE_KEY = "feedback-form-state";

const refs = {
  form: document.querySelector(".feedback-form"),
  input: document.querySelector("input"),
  textarea: document.querySelector("textarea"),
};

function populateFormOutput() {
  const savedData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  if (savedData) {
    refs.input.value = savedData.email || "";
    refs.textarea.value = savedData.message || "";
  }
}


populateFormOutput();

const formData = {};

refs.form.addEventListener("input", throttle(handlerFormOutput, 500));

function handlerFormOutput(evt) {
  formData[evt.target.name] = evt.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));

  refs.input.value = formData.email || "";
  refs.textarea.value = formData.message || "";

  console.log(formData);
}

refs.form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  localStorage.removeItem(STORAGE_KEY);
  evt.target.reset();


  refs.input.value = "";
  refs.textarea.value = "";

  console.log(formData);
});