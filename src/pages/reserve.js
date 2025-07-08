import "../styles/reserve.css"

const reserveSect = document.createElement("div")
reserveSect.classList.add("reserveSect")

const reserveHead = document.createElement("div");
reserveHead.classList.add("reserveHead")
const h1 = document.createElement("h1");
h1.textContent = "Reserve a table"
const tag = document.createElement("h3");
tag.textContent = "We can't wait to serve you."
reserveHead.append(h1, tag);

const form = document.createElement("form");
const inputName = document.createElement("input");
inputName.type = "text";
inputName.name = "name";
inputName.placeholder = "Name";
inputName.required = true;
inputName.autofocus = true;
inputName.autocomplete = true;
inputName.id = "nameField";
inputName.classList.add("form-input");

const inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.name = "email";
inputEmail.placeholder = "Email";
inputEmail.required = true;
inputEmail.autocomplete = true;
inputEmail.id = "emailField";
inputEmail.classList.add("form-input");

const inputPhone = document.createElement("input");
inputPhone.type = "tel";
inputPhone.name = "phone";
inputPhone.placeholder = "Phone Number";
inputPhone.required = true;
inputPhone.autocomplete = true;
inputPhone.pattern = "[0-9]{11}";
inputPhone.id = "phoneField";
inputPhone.classList.add("form-input");

const inputDate = document.createElement("input");
inputDate.type = "date";
inputDate.name = "date";
inputDate.required = true;
inputDate.autocomplete = true;
inputDate.id = "dateField";
inputDate.classList.add("form-input");

const inputTime = document.createElement("input");
inputTime.type = "time";
inputTime.name = "time";
inputTime.required = true;
inputTime.autocomplete = true;
inputTime.id = "timeField";
inputTime.classList.add("form-input");

const inputPeople = document.createElement("input");
inputPeople.type = "number";
inputPeople.name = "people";
inputPeople.placeholder = "Number of Guests";
inputPeople.min = 1;
inputPeople.max = 20;
inputPeople.required = true;
inputPeople.id = "peopleField";
inputPeople.classList.add("form-input");

const inputMessage = document.createElement("textarea");
inputMessage.name = "message";
inputMessage.placeholder = "Any special requests?";
inputMessage.rows = 4;
inputMessage.id = "messageField";
inputMessage.classList.add("form-input");

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.textContent = "Reserve Now";
submitButton.classList.add("submit-btn");


form.append(inputName, inputEmail, inputPhone, inputDate, inputTime, inputPeople, inputMessage, submitButton);

form.addEventListener('submit', (e) => {
    e.preventDefault();
});

reserveSect.append(reserveHead, form);

export default function reserve(content) {
    content.append(reserveSect);
}