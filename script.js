const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


function showError(input, message){
  const formControl = input.parentElement;
  formControl.className = 'form-control error';
  const small = formControl.querySelector('small');
  small.innerText = message;
  console.log(small);
}

function showSucces(input){
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
}

//Check email is valid
const isValidEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


//check required fields
function checkRequired(inputArr){
  inputArr.forEach( function(input) {
    console.log(input.value);
    if(input.value.trim() === ''){
      showError(input, `${getFieldName(input)} is required`);
    }else {
      showSucces(input);
    }
  });
}

//Check input length
function checkLength(input, min, max){
  if(input.value.checkLength < min){
    showError(input,`${getFieldName(input)} must be at least ${min} characters`)
  } else if(input.value.length > max){
    showError(input,`${getFieldName(input)} must be less than ${max} characters`);
  } else {
    showError(input);
  }
}

//Get field name
function getFieldName(input){
  return input.id.charAt(0).toUpperCase() + input.id.slice(1)
}

//Event listener
form.addEventListener('submit', function(e){
  e.preventDefault();

  checkRequired([username, email, password, password2])
  checkLength(username, 3, 6);
  checkLength(password, 6, 25);
})




// form.addEventListener('submit', function(e){
//   e.preventDefault()
 
//   if(username.value === ''){
//     showError(username, 'Username is required');
//   } else {
//     showSucces(username);
//   }

//   if(email.value === ''){
//     showError(email, 'Email is required');
//   } else if(!isValidEmail(email.value)){
//     showError(email, 'Email is not valid')
//   } else {
//     showSucces(email);
//   }

//   if(password.value === ''){
//     showError(password, 'Password is required');
//   } else {
//     showSucces(password);
//   }

//   if(password2.value === ''){
//     showError(password2, 'Password is required');
//   } else {
//     showSucces(password2);
//   }

// });