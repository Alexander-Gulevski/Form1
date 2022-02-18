const form = document.querySelector('form');
const input = form.querySelectorAll('input');
const formSubmit = document.querySelector('button');
const checkbox = document.querySelector('.custom-checkbox');
let arr = [];
let key = [];

function OBJ(key, arr) {
  let result = {};
  for (let i = 0; i < key.length; i++) {
      result[key[i]] = arr[i];
  }
  return  JSON.stringify(result);
};

form.addEventListener('change', changeFormHandler);
function changeFormHandler() {
  console.log(form.checkValidity());
  if (form.checkValidity() === true) {
    formSubmit.addEventListener('click',() => {if (checkbox.checked) {
        input.forEach((el,i) =>{
          key.push(el.placeholder !== '' ? el.placeholder: `photoPath${i+1}str`);
          arr.push(el.value);
          el.value = '';})
          console.log(arr, key);
    } else {alert('примите лицензионное соглашение')}
    console.log(OBJ(key,arr));
    });
  }
}

