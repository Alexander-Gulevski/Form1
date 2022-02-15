const form = document.querySelector('form');
const input = document.querySelectorAll('input');
const formSubmit = document.querySelector('button');
const checkbox = document.querySelector('.custom-checkbox');

form.addEventListener('change', changeFormHandler);
function changeFormHandler() {
  console.log(form.checkValidity());
  if (form.checkValidity() === true) {
    formSubmit.addEventListener('click',() => {if (checkbox.checked) {
        for(let i = 0; i < input.length; i++){
        input[i].value = '';}
    } else {alert('поставьте флажок')}
    });
  }
}