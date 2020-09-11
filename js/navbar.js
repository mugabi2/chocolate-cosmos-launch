// logout
function logmeout(){
    auth.signOut();
    localStorage.clear();
      document.location.replace("landing.html");
    }
// log out
// const logoutBtn=document.querySelector('#logout');
// logoutBtn.addEventListener('click', (e) =>{
//   e.preventDefault();
//     auth.signOut();
//     localStorage.clear();
//       document.location.replace("landing.html");
// // Retrieve
// // var sample = localStorage.getItem(userid_key);
// // console.log(777,sample);
// })
