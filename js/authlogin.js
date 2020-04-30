// listen for authentication
auth.onAuthStateChanged(user=>{
  if(user){
  console.log("user logged in",user);
  document.location.replace("home.html");
}else {
  console.log("loged out");
}
})
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
      document.location.replace("home.html");
  });
  console.log(email,password);
})

// create account
// const creataccaBtn=document.querySelector('#createAccountbtn');
// creataccaBtn.addEventListener('click', (e) =>{
//   e.preventDefault();
//       document.location.href="signUp.html";
// })
