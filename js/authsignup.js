//signup form
const signupForm=document.querySelector('#signup_form');
const signupBtn=document.querySelector('#signupBtn');
signupBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const surname=signupForm['userSurnamesu'].value;
  const firstname=signupForm['userFirstnamesu'].value;
  const company=signupForm['userCompanysu'].value;
  const email=signupForm['userEmailsu'].value;
  const phone=signupForm['userPhonesu'].value;
  const password=signupForm['userPasswordsu'].value;

    // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
      console.log(cred);
      signupForm.reset();

      document.location.replace("chocolatecosmos.html");

  });
  console.log(email,password);
})
