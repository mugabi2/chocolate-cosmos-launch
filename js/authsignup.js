//signup form
const signupFormee=document.querySelector('#signups');
const signupBtn=document.querySelector('#signupBtned');
console.log(55555);
signupBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const supName=signupFormee['userSurnamesue'].value;
  const supPhone=signupFormee['userPhonesue'].value;
  console.log(supName," ",supPhone);
})
// signupBtn.addEventListener('click', (e) =>{
//   e.preventDefault();
//   const surname=signupFormee['userEmailli'].value;
//   const firstname=signupFormee['userFirstnamesu'].value;
//   const company=signupFormee['userCompanysu'].value;
//   const email=signupFormee['userEmailsu'].value;
//   const phone=signupFormee['userPhonesu'].value;
//   const password=signupFormee['userPasswordsu'].value;
// console.log(surname);
//     if (surname === '' || firstname==='' || company==='' || email==='' || phone==='' || password==='') {
//         alert("Please fill in all fields");
//         // $('#selBooks').focus();
//         console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
//             signupForm.getElementById('fillall').innerHTML
//                 = 'A computer science portal for geeks';
//         return false;
//       }else {
//         console.log("yyyyyyyyyyyyyyyyyyyyy");
//       }
//     // sign up the user
//   auth.createUserWithEmailAndPassword(email, password).then(cred => {
//     var identitynational=cred.uid;
//       console.log(9999999999,identitynational);
//       signupForm.reset();
//       var name=surname + firstname;
//
//       var userid=generator(company,phone);
//         db.collection('USERS').doc(identitynational).set({
//             userid: userid,
//             name: name,
//             company: company,
//             email: email,
//             phone: phone,
//             created:  firebase.firestore.FieldValue.serverTimestamp()
//           })
//       document.location.replace("chocolatecosmos.html");
//
//   });
//   console.log(email,password);
// })




// signupBtn.addEventListener('click', (e) =>{
//   e.preventDefault();
//   const surname=signupFormee['userEmailli'].value;
//   const firstname=signupFormee['userFirstnamesu'].value;
//   const company=signupFormee['userCompanysu'].value;
//   const email=signupFormee['userEmailsu'].value;
//   const phone=signupFormee['userPhonesu'].value;
//   const password=signupFormee['userPasswordsu'].value;
// console.log(surname);
//     if (surname === '' || firstname==='' || company==='' || email==='' || phone==='' || password==='') {
//         alert("Please fill in all fields");
//         // $('#selBooks').focus();
//         console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
//             signupForm.getElementById('fillall').innerHTML
//                 = 'A computer science portal for geeks';
//         return false;
//       }else {
//         console.log("yyyyyyyyyyyyyyyyyyyyy");
//       }
//     // sign up the user
//   auth.createUserWithEmailAndPassword(email, password).then(cred => {
//     var identitynational=cred.uid;
//       console.log(9999999999,identitynational);
//       signupForm.reset();
//       var name=surname + firstname;
//
//       var userid=generator(company,phone);
//         db.collection('USERS').doc(identitynational).set({
//             userid: userid,
//             name: name,
//             company: company,
//             email: email,
//             phone: phone,
//             created:  firebase.firestore.FieldValue.serverTimestamp()
//           })
//       document.location.replace("chocolatecosmos.html");
//
//   });
//   console.log(email,password);
// })

function sanitizeString(str){
str = str.replace(/[^a-z0-9\,_-]/gim,"");
    return str.substring(0, 10);
}

function generator(str1,str2){
  // var string=sanitizeString(str1)+sanitizeString(str2);

  return sanitizeString(str1)+sanitizeString(str2);
}
