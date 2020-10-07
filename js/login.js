
// db.collection("INFORMATION").onSnapshot(snapshot=>{
// // setupcounters(snapshot.docs);
// })
      var sulement=db.collection("INFORMATION");
    sulement.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
    var dropss=doc.id;
    console.log("emmmmmmm "+dropss);
      localStorage.setItem(userid_key, dropss);
             // if (doc.exists) {
                 // console.log('Document data:', doc.data());
    jQuery.each(doc.data(), function (key, value) {
              if(key=="number"){
                localStorage.setItem(account_key, value);
                // document.getElementById("usersNo").value=value;
                // document.getElementById('usersNo').innerHTML=value;
                var fixUser=document.getElementById('countuser');
                var htmls=`<div class="count-box">
                  <i class="ri-user-line"></i>
                  <span id="usersNo" data-toggle="counter-up">${value}</span>
                  <p>Users</p>
                </div>`;
                fixUser.innerHTML=htmls;
                console.log("songof users",value);
              }else if (key=="businesses") {
                 localStorage.setItem(items_key, value);
                 var fixUser=document.getElementById('countbusiness');
                 var htmls=`<div class="count-box">
                   <i class="ri-store-3-fill"></i>
                   <span id="businessesNo" data-toggle="counter-up">${value}</span>
                   <p>Businesses</p>
                 </div>`;
                 fixUser.innerHTML=htmls;
                 console.log("songof businesses",value);
               }else if (key=="facebook") {
                 localStorage.setItem(suppliers_key, value);
                 // var fixUser=document.getElementById('countfacebook');
                 // var htmls=`<div class="count-box">
                 //   <i class="ri-facebook-fill"></i>
                 //   <span id="facebookNo" data-toggle="counter-up">${value}</span>
                 //   <p>Facebook followers</p>
                 // </div>`;
                 // fixUser.innerHTML=htmls;
                 console.log("songof facebook",value);
               }else if (key=="countries") {
                 localStorage.setItem(transactions_key, value);
                 var fixUser=document.getElementById('countcountries');
                 var htmls=`<div class="count-box">
                   <i class="ri-road-map-fill"></i>
                   <span id="countriesNo" data-toggle="counter-up">${value}</span>
                   <p>Countries</p>
                 </div>`;
                 fixUser.innerHTML=htmls;
                 console.log("songof countries",value);
               }
               localStorage.setItem("kzfour", 4);

    })
    });
    }).catch(error => {
    // document.getElementById("progbarlog").style.visibility="hidden";
    console.error('Please check your collection and document name in the [firestore] shortcode!', error);
    });

//   var button = document.getElementById('bta');
//
//   var timeout = 0;
//   button.addEventListener('click', (e) => {
//     e.preventDefault();
//     button.classList.add('active');
// console.log("@@@@@@@@@");
//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       button.classList.remove('active');
//     }, 2000);
//   })
var fuel=0,
zero=0,one=1,two=2,three=3,four=4;

// listen for authentication
// auth.onAuthStateChanged(user=>{
//   if(user){
//   console.log("user logged in",user);
//   document.location.replace("home.html");
// }else {
//   console.log("loged out");
// }
// })

var vinil = localStorage.getItem("emailForSignIn");
console.log(vinil+vinil);
document.getElementById("bodeys").style.visibility="visible";

          var userid_key="userid";
          var account_key="account";
          var items_key="items";
          var suppliers_key="suppliers";
          var transactions_key="transactions";
          var company_key="company";
          var surname_key="surname";
          var firstname_key="firstname";
          var phone_key="phone";
          var location_key="location";
          var email_key="email";
          var numberusers_key="usersNo";
          var financialyear_key="financial year";
          var realfinancialyear_key="real financial year";
          var logo_key="imagelogo";
          var changedlogo_key="changedlogo";
          var tutorial_key="tutorial";
          var budgetaccounts_key="budget accounts";
          var budgetitems_key="budget items";
          var currentbudgetname_key="current budget name";


    localStorage.setItem(changedlogo_key, zero);

const signupForm=document.querySelector('#signup_form1');
const signupBtn=document.querySelector('#signupBtn');

signupBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  signupBtn.classList.add('active');
  // document.getElementById("progbarsing").style.visibility="visible";
  const surname=document.getElementById("userSurnamesu").value;
  const firstname=document.getElementById("userFirstnamesu").value;
  const company=document.getElementById("userCompanysu").value.toUpperCase();
  const email=document.getElementById("userEmailsu").value;
  const location=document.getElementById("userLocation").value;
  const phone=document.getElementById("userPhonesu").value;
  const password=document.getElementById("userPasswordsu").value;
    if (surname === '' || firstname==='' || company==='' || location==='' || email==='' || phone==='' || password==='')
    {
        // alert("Please fill in all fields");
        // $('#selBooks').focus();
        console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
          document.getElementById('errormsg').innerHTML="Please fill in all fields";
          signupBtn.classList.remove('active');
          // document.getElementById("progbarsing").style.visibility="hidden";
        return false;
      }else {

          console.log("1111111111111");
          // var ura = 'http://localhost:3000/authfb';
          var ura= 'https://chocolate-cosmos.web.app/?email='+email;
          // var ura= 'https://localhost:3000/logincopy.html/?email='+email;
          console.log("ura"+ura);
        emailvery();
        function emailvery(){
          console.log(surname);
var actionCodeSettings = {
  // URL you want to redirect back to. The domain (www.example.com) for this
  // URL must be whitelisted in the Firebase Console.
  url: ura,
  // This must be true.
  handleCodeInApp: true
};
console.log(email);
firebase.auth().sendSignInLinkToEmail(email, actionCodeSettings)
  .then(function() {
    // The link was successfully sent. Inform the user.
    // Save the email locally so you don't need to ask the user for it again
    // if they open the link on the same device.
    console.log("sent to to "+email);
    localStorage.setItem('emailForSignIn', email);
    localStorage.setItem(email_key, email);
    // window.localStorage.setItem('emailForSignIn', email);
    outsider();
  })
  .catch(function(error) {
    console.log(error);
    // Some error occurred, you can inspect the code: error.code
  });

        }
                  function outsider(){
    // sign up the user
  firebase.auth().createUserWithEmailAndPassword(email, password).then(async cred => {
    console.log("yyyyyyyyyyyyyyyyyyyyy");
    var user=firebase.auth().currentUser;
    // user.sendEmailVerification().then(function(){
    //   console.log("sent sent sent"+ user);
    //
    // }).catch(function(error){
    //   console.log(error);
    // });

          // function insider(){
    var usernumber=giveidentity();
      // WAIT FOR THE PROMISE
          const checkIfDonesees = () => {
            usernumber.then(ok => {
              usernumber=parseInt(ok)+1;
              console.log("000000",usernumber);

              db.collection("INFORMATION").doc("users").update({
              number:usernumber
              })

              var identitynational=usernumber;
              console.log("000000002",identitynational);
              // signupForm.reset();
              // var name=surname + firstname;
              var waitinside=inside(usernumber,company,surname,firstname,email,phone,location);
              //
              // WAIT FOR THE PROMISE
                  const checkIfDonein = () => {
                    waitinside.then(ok => {
                      console.log("0000004",usernumber);
                                localStorage.setItem(tutorial_key, 1);
                      // signup
                      signupBtn.classList.remove('active');
                      // document.getElementById("progbarsing").style.visibility="hidden";
                      // document.location.replace("create.html");
                          alert("A login link has been sent to "+email+". PLEASE CHECK YOUR EMAIL");
                      console.log("please check email for link");
                      })
                      .catch(err => {
                        console.error(err)
                          document.getElementById('.errormsg').innerHTML=err.message;
                          signupBtn.classList.remove('active');
                          // document.getElementById("progbarsing").style.visibility="hidden";
                      })

                  }
                  checkIfDonein();
              //
              })
              .catch(err => {
                console.error(err)
                  document.querySelector('.error').innerHTML=err.message;
                  signupBtn.classList.remove('active');
                  // document.getElementById("progbarsing").style.visibility="hidden";
              })

          }
          checkIfDonesees();
        // }//end insider
  }).catch(err=>{ //createuser end
document.getElementById("errormsg").innerHTML =err.message;
    // document.querySelector('.error').innerHTML=err.message;
    console.log(err);
    signupBtn.classList.remove('active');
    // document.getElementById("progbarsing").style.visibility="hidden";
  });
  console.log(email,password);
}//outsider end
}//else end
}) // eventlistener end

async function inside(usernumber,company,surname,firstname,email,phone,location){
var userid=generator(usernumber,company);
// fina setup
// document.getElementById("progbarsing").style.visibility="visible";
var frofro="2019";
var toto="2020";
finyear=localStorage.getItem(financialyear_key);

// Retrieve
var idy = userid;
console.log("idididididid"+idy);
var dbacc=idy+"ACCOUNTS"+finyear;
var dbite=idy+"ITEMS"+finyear;
var dbsup=idy+"SUPPLIERS"+finyear;
var dbtra=idy+"TRANSACTIONS"+finyear;
var dbbgtacc=idy+"BUDGETACCOUNTS"+finyear;
var dbbgtit=idy+"BUDGETITEMS"+finyear;
var newfinyear=idy+"FINANCIALYEAR";

  // Store
localStorage.setItem(account_key, dbacc);
localStorage.setItem(items_key, dbite);
localStorage.setItem(suppliers_key, dbsup);
localStorage.setItem(transactions_key, dbtra);
localStorage.setItem(financialyear_key, finyear);
localStorage.setItem(realfinancialyear_key, finyear);
localStorage.setItem(budgetaccounts_key, dbbgtacc);
localStorage.setItem(budgetitems_key, dbbgtit);

localStorage.setItem("login", "1");

var companyThis=localStorage.getItem(company_key);
db.collection(newfinyear).doc(finyear).set({
from: frofro,
to: toto
})

console.log("OVER"+finyear);
///////
var empty="";
  var today = new Date();
  var date = (today.getMonth()+1).toString()+today.getDate().toString()+today.getFullYear().toString();
var something=await db.collection('USERS').doc(userid).set({
  userid: userid,
  firstname: firstname,
  surname: surname,
  company: company,
  email: email,
  location: location,
  phone: phone,
  licence: "14",
  financialyear: "0",
  today:date,
  logo:zero,
  logo64:"not yet",
  created:  firebase.firestore.FieldValue.serverTimestamp(),
  ACCOUNTS:dbacc,
  ITEMS:dbite,
  FINANCIALYEAR:finyear,
  SUPPLIERS:dbsup,
  TRANSACTIONS:dbtra,
  BUDGETACCOUNTS:dbbgtacc,
  BUDGETITEMS:dbbgtit,
  currentbudget:""
})

// localStorage.setItem(userid_key, userid);
// localStorage.setItem(account_key, "blankACCOUNTS");
// localStorage.setItem(items_key, "blankITEMS");
// localStorage.setItem(suppliers_key, "blankSUPPLIERS");
// localStorage.setItem(transactions_key, "blankTRANSACTIONS");
// localStorage.setItem(financialyear_key, "blankFINANCIALYEAR");
localStorage.setItem("login", "0");

localStorage.setItem(company_key, company);
localStorage.setItem(surname_key, surname);
localStorage.setItem(firstname_key, firstname);
localStorage.setItem(phone_key, phone);
localStorage.setItem(email_key, email);
localStorage.setItem(location_key, location);

var very=localStorage.getItem(userid_key);
console.log("0000003 inside",very);
var one=1;
return one;
}

function sanitizeString(str){
str = str.toString().replace(/[^a-z0-9,_-]/gim,"");
    return str.substring(0, 10);
}

function generator(str1,str2){
  // var string=sanitizeString(str1)+sanitizeString(str2);

  return sanitizeString(str1)+sanitizeString(str2);
}




async function giveidentity(){
  var number;
    const docReftss = db.collection("INFORMATION").doc("users");
    var statement =await docReftss.get().then(doc => {
             if (doc.exists) {
                 // console.log('Document data:', doc.data());
    jQuery.each(doc.data(), function (key, value) {
              if(key=="number"){
                number=value;
                localStorage.setItem(numberusers_key, value);
              }else if(key=="financial year"){
                          var finya=value;
                          localStorage.setItem(financialyear_key, value);
                        }

  })
  console.log("000001",number);

  } else {
  // doc.data() will be undefined in this case
  console.error('Please check your collection and document name in the [firestore] shortcode!');
  }
  }).catch(error => {
  console.error('Please check your collection and document name in the [firestore] shortcode!', error);
  });
return number;
}

//log in
const loginForm=document.querySelector('#login_form');
const loginBtn=document.querySelector('#login-button');
loginBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  // document.getElementById("progbarlog").style.visibility="visible";
  loginBtn.classList.add('active');

// $('#progbar1').addClass("active");
  // const email=loginForm['userEmailli'].value;
  // const password=loginForm['userPasswordli'].value;

  const email=document.getElementById("userEmailli").value;
  const password=document.getElementById("userPasswordli").value;
  if (email === '' || password==='')
  {
      // alert("Please fill in all fields");
      // $('#selBooks').focus();
      console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
        document.getElementById('errormsg').innerHTML="Please fill in all fields";
        // document.getElementById("progbarsing").style.visibility="hidden";
        loginBtn.classList.remove('active');
      return false;
    }else {
    // log in the user
  auth.signInWithEmailAndPassword(email, password).then(cred => {
      // console.log(cred.user);
      console.log("000000000");
      localStorage.setItem("kzzero", 0);
////////////////
      var waitforme=storage(email);
      //////////////////
console.log("wait",waitforme);
  // WAIT FOR THE PROMISE
      const checkIfDonesee = () => {
        waitforme.then(ok => {
          waitforme=ok;
                    // var song = localStorage.getItem(account_key);
                    // console.log("555555acckey",song);
                    localStorage.setItem("kzfive", 5);
          console.log("wait:",waitforme);
          localStorage.setItem("login", "1");
          loginForm.reset();
        document.querySelector('.error').innerHTML=" ";
        var take=localStorage.getItem(account_key);
        console.log("take",take);
        // login
        loginBtn.classList.remove('active');
        document.location.replace("index.html");

          })
          .catch(err => {
            console.error(err)
            loginBtn.classList.remove('active');
          })

      }
      checkIfDonesee();

  }).catch(err=>{
    document.querySelector('.error').innerHTML=err.message;
    loginBtn.classList.remove('active');
  });
  console.log(email,password);
}
})



// settings 222
async function storage(emshow){
  var drops;
  localStorage.setItem("kzone", 1);
  console.log('1111111111111');
  // var seconddrops=inner();

  // WAIT FOR THE PROMISE
      // const checkIfDoneiner = () => {
        // seconddrops.then(ok => {
          // seconddrops=ok;

            var total, totalall;
            var accret=1;
            localStorage.setItem("kzthree", 3);
            var sulement=await db.collection("USERS").where("email", "==", emshow)
            .get().then(function(querySnapshot) {
                querySnapshot.forEach(function(doc) {
            var dropss=doc.id;
console.log("emmm "+doc);
              localStorage.setItem(userid_key, dropss);
                     // if (doc.exists) {
                         // console.log('Document data:', doc.data());
            jQuery.each(doc.data(), function (key, value) {
                      if(key=="ACCOUNTS"){
                        localStorage.setItem(account_key, value);
                        var dbacca = localStorage.getItem(account_key);
                        console.log("songof lawino",dbacca);
                      }else if (key=="ITEMS") {
                         localStorage.setItem(items_key, value);
                       }else if (key=="SUPPLIERS") {
                         localStorage.setItem(suppliers_key, value);
                       }else if (key=="TRANSACTIONS") {
                         localStorage.setItem(transactions_key, value);
                       }else if (key=="company") {
                         localStorage.setItem(company_key, value);
                         console.log("company vee",value);
                       }else if (key=="surname") {
                         localStorage.setItem(surname_key, value);
                       }else if (key=="firstname") {
                         localStorage.setItem(firstname_key, value);
                       }else if (key=="phone") {
                         localStorage.setItem(phone_key, value);
                       }else if (key=="financialyear") {
                         localStorage.setItem(realfinancialyear_key, value);
                       }else if (key=="FINANCIALYEAR") {
                         localStorage.setItem(financialyear_key, value);
                         console.log("finafina"+value);
                       }else if (key=="email") {
                         localStorage.setItem(email_key, value);
                       }else if (key=="logo") {
                         localStorage.setItem(changedlogo_key, value);
                       }else if (key=="logo64") {
                         localStorage.setItem(logo_key, value);
                       }else if (key=="BUDGETACCOUNTS") {
                         localStorage.setItem(budgetaccounts_key, value);
                       }else if (key=="BUDGETITEMS") {
                         localStorage.setItem(budgetitems_key, value);
                       }else if (key=="currentbudget") {
                         localStorage.setItem(currentbudgetname_key, value);
                       }
                       localStorage.setItem("kzfour", 4);

          })
          });
          }).catch(error => {
          document.getElementById("progbarlog").style.visibility="hidden";
          console.error('Please check your collection and document name in the [firestore] shortcode!', error);
          });

          // })
          // .catch(err => {
          //   console.error(err)
          // })

      // }
      // checkIfDoneiner();
  async function inner(){
// Create a reference to the cities collection
var sulement=await db.collection("USERS").where("email", "==", emshow)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data());
            drops=doc.id;
              localStorage.setItem(userid_key, drops);
              console.log("22222222drps",drops);
              localStorage.setItem("kztwo", 2);
        });
    }).catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    return drops;
}
  // get userid
  const setupID =(data)=>{
    data.forEach(doc=>{
      drops=doc.id;
        localStorage.setItem(userid_key, drops);
        console.log("2222rr22drps",drops);
        return drops;

// jQuery.each(doc.data(), function (key, value) {
//    if(key=="userid"){
//      localStorage.setItem(userid_key, value);
//      unique=value;
//    }

})
  }

                 return 3;
}

// scripts.js custom js file
$(document).ready(function () {
	google.maps.event.addDomListener(window, 'load', initialize);
});

function initialize() {
	 var input = document.getElementById('userLocation');
	 var autocomplete = new google.maps.places.Autocomplete(input);
   console.log("inin ini");
}

  //reset email
  const resetbtn=document.getElementById('resetpass');
  resetbtn.addEventListener('click', (e) =>{
    e.preventDefault();
    // var auth = firebase.auth();
var emailAddress = document.getElementById("emailreset").value;

auth.sendPasswordResetEmail(emailAddress).then(function() {
  // Email sent.
  console.log("email sent");
}).catch(function(error) {
  // An error happened.
  console.log(error);
});

  })
  //
  // //count up
  // db.collection("INFORMATION").onSnapshot(snapshot=>{
  //   setupUsers(snapshot.docs);
  // })
  //
  // const setupUsers =(data)=>{
  //   let html='';
  //   var list='';
  //   data.forEach(doc=>{
  //     const acc=doc.data();
  //     jQuery.each(doc.data(), function (key, value) {
  //     if(key=="number"){
  //     var useit=value;
  //       document.getElementById('usersNo').innerHTML=useit;
  //       console.log("users "+useit);
  //     }else if (key=="businesses") {
  //     var busit=value;
  //       document.getElementById('businessesNo').innerHTML=busit;
  //       console.log("business "+busit);
  //     }
  //
  //                         })
  //   });
  // }

             $(function(){
               $("#bottomplaceholder").load("universal/bottom.html");
             });

             $(document).ready(function() {
               $(".progress-btn").on("click", function() {
                 var progressBtn = $(this);
                 console.log("CLICK CLICK");
                 if (!progressBtn.hasClass("active")) {
                   progressBtn.addClass("active");
                   setTimeout(function() {
                     progressBtn.removeClass("active");
                   }, 10000);
                 }
               })
             });
