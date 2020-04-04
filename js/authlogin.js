//log in
const loginForm=document.querySelector('#login_form');
const loginBtn=document.querySelector('#loginBtn');
loginBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const email=loginForm['userEmailli'].value;
  const password=loginForm['userPasswordli'].value;

    // log in the user
  auth.signInWithEmailAndPassword(email, password).then(cred => {
      console.log(cred.user);
      loginForm.reset();

      document.location.replace("chocolatecosmos.html");

  });
  console.log(email,password);
})
