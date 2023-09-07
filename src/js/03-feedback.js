import throttle from "lodash.throttle";
import "../css/common.css";
import "../css/03-feedback.css";

const refs = {
  form: document.querySelector("form"),
  input: document.querySelector("input"),
  textarea: document.querySelector("textarea"),
};

refs.input.addEventListener("input", throttle(handlerFormOutput, 500));
refs.textarea.addEventListener("input", throttle(handlerFormOutput, 500));

function handlerFormOutput(evt) {
  localStorage.setItem(evt.target.name, evt.target.value);
}

refs.form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  localStorage.clear();
});
