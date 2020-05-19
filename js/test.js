//signup form
const signupFormee=document.querySelector('#testt');
const signupBtn=document.querySelector('#signupBtn');
signupBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const surname=signupFormee['userSurnamesu'].value;
  const firstname=signupFormee['userFirstnamesu'].value;
  const company=signupFormee['userCompanysu'].value;
  const email=signupFormee['userEmailsu'].value;
  const phone=signupFormee['userPhonesu'].value;
  const password=signupFormee['userPasswordsu'].value;


  // console.log(email,password);
})
var Harvard=sanitizeSlash("45/85/5");
// console.log(Harvard);
function sanitizeSlash(str){
  // console.log("sani1",str);
  str = str.replace(/[^a-z0-9,_-]/gim,"");
    return str;//.trim();
}

db.collection("USERS").where("email", "==", "a@gmail.com")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
