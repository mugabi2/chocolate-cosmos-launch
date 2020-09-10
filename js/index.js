var vine=0;
          var userid_key="userid";
          var account_key="account";
          var items_key="items";
          var suppliers_key="suppliers";
          var transactions_key="transactions";
          var company_key="company";
          var location_key="location";
          var surname_key="surname";
          var firstname_key="firstname";
          var phone_key="phone";
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

// localStorage.setItem(tutorial_key, 0);
// Confirm the link is a sign-in with email link.
if (//!!!!!!!!!!!!!!!!
  vine==1
  // firebase.auth().isSignInWithEmailLink(window.location.href)
) {
  // Additional state parameters can also be passed via URL.
  // This can be used to continue the user's intended action before triggering
  // the sign-in operation.
  // Get the email if available. This should be available if the user completes
  // the flow on the same device where they started it.
  var email = localStorage.getItem('emailForSignIn');
  var emaila = localStorage.getItem(email_key);
  console.log("email "+email);
  console.log("email "+emaila);
  if (!email) {
    // User opened the link on a different device. To prevent session fixation
    // attacks, ask the user to provide the associated email again. For example:
    email = window.prompt('Please provide your email for confirmation');
  }
  // The client SDK will parse the code from the link for you.
  // firebase.auth().signInWithEmailLink(email, window.location.href)
  //   .then(function(result) {
    var tutorial_key="tutorial";
    // localStorage.setItem(tutorial_key, 1);
    // document.location.replace("create.html");

    var sulement=db.collection("USERS").where("email", "==", email);
    sulement.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
    var dropss=doc.id;
    console.log("emmmmmmm "+dropss);
      localStorage.setItem(userid_key, dropss);
             // if (doc.exists) {
                 // console.log('Document data:', doc.data());
    jQuery.each(doc.data(), function (key, value) {
              if(key=="ACCOUNTS"){
                localStorage.setItem(account_key, value);
                var dbacca = localStorage.getItem(account_key);
                console.log("songof lawino",value);
              }else if (key=="ITEMS") {
                 localStorage.setItem(items_key, value);
                 console.log("songof lawino",value);
               }else if (key=="SUPPLIERS") {
                 localStorage.setItem(suppliers_key, value);
                 console.log("songof lawino",value);
               }else if (key=="TRANSACTIONS") {
                 localStorage.setItem(transactions_key, value);
                 console.log("songof lawino",value);
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
    // document.getElementById("progbarlog").style.visibility="hidden";
    console.error('Please check your collection and document name in the [firestore] shortcode!', error);
    });

            // localStorage.setItem("login", 0);
    var status = localStorage.getItem("login");
    // if (status=="3") {
    // localStorage.setItem(tutorial_key, 1);
               // }
			console.log("email:"+ email);
			console.log("success success");
      // Clear email from storage.
      window.localStorage.removeItem('emailForSignIn');
      // You can access the new user via result.user
      // Additional user info profile not available via:
      // result.additionalUserInfo.profile == null
      // You can check if the user is new or existing:
      // result.additionalUserInfo.isNewUser
    // })
    // .catch(function(error) {
    //   // Some error occurred, you can inspect the code: error.code
    //   // Common errors could be invalid email and invalid or expired OTPs.
    // });

}else if(vine==0) {///2222222222222222222222222222222222222222222222222222///////////////////////////////////////////////
  // console.log("else else");

                  // Or with jQuery

                        $(document).ready(function(){
                          $('.helpmodals').modal();
                        });

                           jQuery(document).ready(function(){
                                 // jQuery('.helpmodals').modal();
                                 jQuery(document).ready(function(){
                                     jQuery('.helpmodals').modal('open');
              //                       jQuery('.helpmodals').modal({
              //   dismissible: false
              // });
                                 });
                           });
  var totalitems,totalaccounts,itemaccount;
var fuel=0,
zero=0,one=1,two=2,three=3,four=4;
var identitynational;
// logmeout();
          var song = localStorage.getItem(userid_key);
          console.log("song id",song);
          var songs = localStorage.getItem("login");
          console.log("song login",songs);
          var s0 = localStorage.getItem("kzzero");
          var s1 = localStorage.getItem("kzone");
          var s2 = localStorage.getItem("kztwo");
          var s3 = localStorage.getItem("kzthree");
          var s4 = localStorage.getItem("kzfour");
          var s5 = localStorage.getItem("kzfive");
          // console.log("fix0",s0);
          // console.log("fix1",s1);
          // console.log("fix3",s3);
          // console.log("fix4",s4);
          // console.log("fix5",s5);
          document.getElementById("probartra").style.visibility="visible";
function pageSetup(){
  var change = localStorage.getItem(changedlogo_key);
  if(change==one){
    var image64 = localStorage.getItem(logo_key);
    // console.log("6464"+image64);
  var output = document.getElementById('output_image');
    output.src=image64;
  }
  var today = new Date();
    var datetoday = (today.getMonth()+1).toString()+today.getDate().toString()+today.getFullYear().toString();
    var dateDB,licence;
    var userid = localStorage.getItem(userid_key);
    const docRef = db.collection("USERS").doc(userid);
    docRef.get().then(doc => {
               if (doc.exists) {
                   // console.log('Document data:', doc.data());
      jQuery.each(doc.data(), function (key, value) {
      if(key=="today"){
        dateDB=value;
                   }
        else if (key=="licence") {
        licence=value;
        }
                   })
               } else {
                   // doc.data() will be undefined in this case
                   console.error('Please check your collection and document name in the [firestore] shortcode!');
               }
               if(datetoday==dateDB){
               }else {
              licence=(parseInt(licence))-1;
                 innerPageSetup(licence,datetoday,userid);
               }
               var proco = localStorage.getItem(company_key);
               var proem = localStorage.getItem(email_key);
              document.getElementById("procona").innerHTML = proco;
              document.getElementById("proem").innerHTML = proem;
              document.getElementById("liceNumb").innerHTML = "LICENCE: "+licence+" days";
           }).catch(error => {
               console.error('Please check your collection and document name in the [firestore] shortcode!', error);
           });
}
function innerPageSetup(lice,theday,idpara){
    db.collection('USERS').doc(idpara).update({
        licence: lice,
            today: theday
      }).then(() => {
      }).catch(err => {
        console.log("errrr");
        console.log(err.message);
        document.getElementById("progbarfy").style.visibility="hidden";
      });
}
// localStorage.setItem(account_key, "ACCOUNTSblank");
// localStorage.setItem(items_key, "ITEMSblank");
// localStorage.setItem(suppliers_key, "SUPPLIERSblank");
// localStorage.setItem(transactions_key, "TRANSACTIONSblank");
// listen for authentication
auth.onAuthStateChanged(user=>{
          // console.log(user.uid);
  // .then(cred => { console.log(55555,cred);})
  if(user){
  pageSetup();
    // Store
// localStorage.setItem(userid_key, user.uid);
var statuss = localStorage.getItem(userid_key);
var fycheck = localStorage.getItem(financialyear_key);
  // console.log("financial",fycheck);
  identitynational=user.uid;
document.getElementById("bodey").style.visibility="visible";
// $('#modal-accounts').modal({ show: false})
// openModal();
if (fycheck=="blankFINANCIALYEAR") {
  console.log("finafina"+fycheck);
localStorage.setItem("login", "0");
// document.getElementById("warningfy").innerHTML ="Please set your Financil Year";
}
var status = localStorage.getItem("login");
if (status=="0") {
// document.getElementById("warningfy").innerHTML ="Please set your Financil Year";
             jQuery(document).ready(function(){
                   jQuery('#helpmodal').modal();
                   jQuery(document).ready(function(){
                       jQuery('#helpmodal').modal('open');
                   });
             });
           }
        //get user id
          //         const docRef1 = db.collection('USERS').doc(suptrans);
          // docRef1.get().then(doc => {
          //            if (doc.exists) {
          //                // console.log('Document data:', doc.data());
          //   jQuery.each(doc.data(), function (key, value) {
          //   if(key=="total"){
          //     var cash=value;
          //     cash=parseInt(cash)+parseInt(amounttrans);
          //     // console.log("cash:"+cash);
          //   docRef1.update({
          //     total: cash
          //   })
          //                          }
          //                })
          //            } else {
          //                // doc.data() will be undefined in this case
          //                console.error('Please check your collection and document name in the [firestore] shortcode!');
          //            }
          //        }).catch(error => {
          //            console.error('Please check your collection and document name in the [firestore] shortcode!', error);
          //        });
}else {
  document.location.replace("landing.html");
  console.log("loged out");
}
})
function generator(str){
  var string=sanitizeString(str);
  var execute=0;
      db.collection('USERS').doc(string).set({
          code: string
        });
}
function execute(numba){
  if(numba==1){
  }else {
  }
}
function sanitizeString(str){
  // console.log("sani1",str);
str = str.replace(/[^a-z0-9\,_-]/gim,"");
    return str;//.trim();
}
function sanitizeStringComma(str){
  // console.log("sani1",str);
str = str.toString().replace(/,/g, "");
    return str;//.trim();
}
const display =(data)=>{
  const getter=doc.data();
  const disdata=getter.total;
console.log(disdata);
}
// ***************
const transList=document.querySelector('.transofar');
var y=0,k=0;
const setupTransacs =(data)=>{
  let html='';
  var list='';
  var liste;
  var coname="s t.#!@#$%^&*(ar";
  var identity,identityp,identityd;
  var identitye,identityp,identityd;
  var prints=[];
  var deletes=[];
  var identities=[];
  generator(coname);
  // console.log("sani2",sani);
  data.forEach(doc=>{
    const acc=doc.data();
    // list+=doc.id+" "+"<br/>";
    // //////////////////
      // Retrieve
      var dbtra = localStorage.getItem(transactions_key);
          const docReft = db.collection(dbtra).doc(doc.id);
  // docReft.get().then(doc => {
             // if (doc.exists) {
               var itd,amd,dtd,spd,tmd;
                 // console.log('Document data:', doc.data());
    jQuery.each(acc, function (key, value) {
    if(key=="item"){
       itd=value;
     }else if (key=="amount") {
       amd=value;
     }else if (key=="date") {
       dtd=value;
     }else if (key=="time") {
       tmd=value;
     }else if (key=="supplier") {
       spd=value;
     }
      liste=doc.id+" "+itd+" "+amd+" "+spd+" "+dtd+" "+tmd;
      k++;
      identity=doc.id;
      identitye=doc.id+'e';
      identityp=doc.id+'p';
      identityd=doc.id+'d';

      // console.log("kkkkk:",k);
      // if(k==30){return true;}
      // console.log(liste);
     // console.log("html1:",html);
                 })
            var li;
            y++;
            prints.push(identityp);
            deletes.push(identityd);
            identities.push(identity);
            identities.push(identitye);
            // console.log(y);
                 if(y%2==1){
                 li=`
              <li class="entry blue lighten-4">
              <div class=" valign-wrapper left">
              <div class="divlist">${liste}</div>
              <div class="text-right divicon">
              <button href="#!" class="modal-trigger bottonicon white z-depth-1">
              <i id="${identityp}" class="center iconprint small material-icons right histicon">edit</i>
              <i id="${identitye}" class="center iconprint small material-icons right histicon">edit</i>
              </button>
              <button class="modal-trigger  bottonicon  white z-depth-1">
              <i id="${identityp}" class=" iconprint small material-icons right histicon">print</i>
              </button>
              <button class="modal-trigger  bottonicon  white z-depth-1">
              <i id="${identityd}" class=" icondelete small material-icons right histicon">delete_forever</i>
              </button>
              </div>
              </div>
              </li>
            `;
          }else {
              // console.log("2");
              li=`
           <li class="entry ">
           <div class=" valign-wrapper left">${liste}
             <i id="${identityp}" class="iconprint small material-icons right">print</i>
             <i id="${identityd}" class="icondelete small material-icons right">delete_forever</i>
           </div>
           </li>
       `;
            }
            html+=li;
             // } else {
             //     // doc.data() will be undefined in this case
             //     console.error('Please check your collection and document name in the [firestore] shortcode!');
             // }
         // }).catch(error => {
         //     console.error('Please check your collection and document name in the [firestore] shortcode!', error);
         // });
  /////////////////////
  });
  // console.log("list"+list);
  // data.forEach(doc=>{
  //   const acc=doc.data();
    // console.log(doc.id,acc);
  // });
  // console.log("html:",html);
transList.innerHTML=html;
// console.log(identities);
// for(var i=0;i<y;i++){
// var $currentitem=prints[i];
// console.log("yoo ",currentitem);
var cutstring;
      $(document).ready(function(){
        $(".iconprint").on("click", function(){
          var idhere=$(this).attr("id");
          console.log("preeeee ",idhere);
var queryString = "?para1=" + idhere;
window.location.href = "print.html" + queryString;
      // alert(  $(this).attr("id")  );
        });
      });
      $(document).ready(function(){
        $(".icondelete").on("click", async function(){
          // console.log("deeee ",$(this).attr("id"));
            cutstring=$(this).attr("id");
            cutstring = cutstring.substring(0, cutstring.length - 1);
        cutstring=$(this).attr("id");
        cutstring = cutstring.substring(0, cutstring.length - 1);
            if (confirm("Do you want to delete "+cutstring+" from transactions")) {
// GETTING
              var total,icamount,icitem,icsupplier,icaccount;
                // Retrieve
                var dbtra = localStorage.getItem(transactions_key);
              const docRef = db.collection(dbtra).doc(cutstring);
              var somename =await docRef.get().then(doc => {
                         if (doc.exists) {
                             // console.log('Document data:', doc.data());
                jQuery.each(doc.data(), function (key, value) {
                if(key=="amount"){
                icamount=value;
                }else if (key=="item") {
                icitem=value;
                }else if (key=="supplier") {
                icsupplier=value;
              }else if (key=="account") {
                icaccount=value;
                }

// SUBTRACTING AND UPDATING

// WAIT FOR THE PROMISE
// const checkIfDonede = () => {
//   accnow.then(ok => {
//     accnow=ok;
//       console.log("wala",ok)
//       console.log("wala",accnow);
//     })
//     .catch(err => {
//       console.error(error)
//     })
//
// }
// checkIfDonede();
                                    })
                                } else {
                                    // doc.data() will be undefined in this case
                                    console.error('Please check your collection and document name in the [firestore] shortcode!');
                                }
                                var acite,acto;
                                  // Retrieve
                                  var dbacca = localStorage.getItem(account_key);
                               const docReft = db.collection(dbacca).doc(icaccount);
                               docReft.get().then(doc => {
                                        if (doc.exists) {
                                            // console.log('Document data:', doc.data());
                               jQuery.each(doc.data(), function (key, value) {
                               if(key==icitem){
                               acite=value;
                             }else if (key=="total") {
                               acto=value;
                             }
                                                 var updacc=parseInt(acite)-parseInt(icamount);
                                                 var updaccto=parseInt(acto)-parseInt(icamount);
                                                 // console.log("in IT meth acc total:",total);
                                                   // Retrieve
                                                   var dbacca = localStorage.getItem(account_key);
                                                   db.collection(dbacca).doc(icaccount).update({
                                                 [icitem]: updacc,
                                                 total:updaccto
                                                 })
                       })
                   } else {
                       // doc.data() will be undefined in this case
                       console.error('Please check your collection and document name in the [firestore] shortcode!');
                   }
               }).catch(error => {
                   console.error('Please check your collection and document name in the [firestore] shortcode!', error);
               });
//////////////////////////////
  // Retrieve
  var dbit = localStorage.getItem(items_key);
                                var itit;
                                const docReftem = db.collection(dbit).doc(icitem);
                               docReftem.get().then(doc => {
                                        if (doc.exists) {
                                            // console.log('Document data:', doc.data());
                               jQuery.each(doc.data(), function (key, value) {
                               if(key=="total"){
                              itit=value;
                            }
                            var updit=parseInt(itit)-parseInt(icamount);
                            // console.log("in IT meth acc total:",total);
                             db.collection(dbit).doc(icitem).update({
                            total:updit
                                    })
                       })
                   } else {
                       // doc.data() will be undefined in this case
                       console.error('Please check your collection and document name in the [firestore] shortcode!');
                   }
               }).catch(error => {
                   console.error('Please check your collection and document name in the [firestore] shortcode!', error);
               });
/////////////
  // Retrieve
  var dbsu = localStorage.getItem(suppliers_key);
  console.log("fix"+dbsu);
                                var supsup;
                                const docRefts = db.collection(dbsu).doc(icsupplier);
                               docRefts.get().then(doc => {
                                        if (doc.exists) {
                                            // console.log('Document data:', doc.data());
                               jQuery.each(doc.data(), function (key, value) {
                               if(key=="total"){
                                 supsup=value;
                                 console.log("fix"+supsup);
                                }
                                var updsup=parseInt(supsup)-parseInt(icamount);
                            // console.log("in IT meth acc total:",total);
                             db.collection(dbsu).doc(icsupplier).update({
                            total:updsup
                            })
                       })
                   } else {
                       // doc.data() will be undefined in this case
                       console.error('Please check your collection and document name in the [firestore] shortcode!');
                   }
               }).catch(error => {
                   console.error('Please check your collection and document name in the [firestore] shortcode!', error);
               });
//////////////
                            }).catch(error => {
                                console.error('Please check your collection and document name in the [firestore] shortcode!', error);
                            });
                             // var y=1;
            //                  return y;
              // Retrieve
              var dbtra = localStorage.getItem(transactions_key);
            db.collection(dbtra).doc(cutstring).delete().then(function() {
                console.log("Document successfully deleted!");
            }).catch(function(error) {
                console.error("Error removing document: ", error);
            });
          }
        });
      });
    // }
}
// accounts
const accountList=document.querySelector('.guides');
const setupAccounts =(data)=>{
  let html='';
  var list='';
  data.forEach(doc=>{
    const acc=doc.data();
    list+=doc.id+" "+"<br/>";
  });
  // console.log("list"+list);
  // data.forEach(doc=>{
  //   const acc=doc.data();
    const li=`
    <li>
    <div class="collapsible-header grey lighten-4">ACCOUNTS</div>
    <div class="collapsible-body white"><span>${list}</span></div>
    </li>
    `;
    html+=li;
    // console.log(doc.id,acc);
  // });
accountList.innerHTML=html;
// console.log(html);
}
function sanitizeSlash(str){
  console.log("sani1",str);
  str = str.replace(/[^a-z0-9,_-]/gim,"");
    return str;//.trim();
}
//financialyear
// const finForm=document.querySelector('#financialyear-form');
const finBtn=document.querySelector('#financialyearBtn');
finBtn.addEventListener('click', (e) =>{
  e.preventDefault();
})
//accounts
const accountsForm=document.querySelector('#accounts-form');
const createAccBtn=document.querySelector('#createAccBtn');
createAccBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const accountName=accountsForm['account_name'].value.toUpperCase();
    // document.querySelector('.error').innerHTML=err.message;
    // $('#progbarac').addClass("active");
  document.getElementById("progbarac").style.visibility="visible";
    // Retrieve
    var dbacca = localStorage.getItem(account_key);
  db.collection(dbacca).doc(accountName).set({
      total: 0
    }).then(() => {
      // close the create modal & reset form
      const modal = document.querySelector('#modal-accounts');
      M.Modal.getInstance(modal).close();
      accountsForm.reset();
        document.getElementById("progbarac").style.visibility="hidden";
    }).catch(err => {
      console.log(err.message);
        // document.querySelector('.error').innerHTML=err.message;
        // $('#progbar2').removeClass("active");
          document.getElementById("progbarac").style.visibility="hidden";
    });
  // console.log(accountName);
})
// bring finyear modal
// const helpfinebtn=document.querySelector('#helpfinebtn');
// helpfinebtn.addEventListener('click', (e) =>{
//   e.preventDefault();
//                jQuery(document).ready(function(){
//                      jQuery('#modal-financialyear').modal();
//                      jQuery(document).ready(function(){
//                          jQuery('#modal-financialyear').modal('open');
//                      });
//                });
//    const modal = document.querySelector('#helpmodal');
//      document.getElementById("progbarfy").style.visibility="hidden";
//    M.Modal.getInstance(modal).close();
// })
// traing
const transactForm=document.querySelector('#transactform');
const transactBtn=document.querySelector('#transactbut');
transactBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const itemtrans=transactForm['trait'].value;
  const suptrans=transactForm['trasup'].value;
  const datetrans=transactForm['date'].value;
  var amounttrans=transactForm['amount'].value;
  const quantity=transactForm['quantity'].value;
  const numbertrans = Math.round(+new Date()/1000);
  if (itemtrans === 'Item' || suptrans==='Supplier' || datetrans==='' || amount==='' || quantity==='') {
      alert("Please fill in all fields");
      // $('#selBooks').focus();
      console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
      return false;
    }else {
      console.log("yyyyyyyyyyyyyyyyyyyyy");
    }
    var amounttrans=sanitizeStringComma(amounttrans);
    amounttrans=amounttrans*quantity;
  var accit;
  var d = new Date(); // for now
  const timetransaction=d.getHours()+":"+d.getMinutes();
  // worktrans(amounttrans,datetrans,itemtrans,suptrans,timetransaction,numbertrans);
    //111111111111111111111111
          // adding supplier
          console.log(99999999,identitynational);
            // Retrieve
            var dbsu = localStorage.getItem(suppliers_key);
                    const docRef1 = db.collection(dbsu).doc(suptrans);
            docRef1.get().then(doc => {
                       if (doc.exists) {
                           // console.log('Document data:', doc.data());
              jQuery.each(doc.data(), function (key, value) {
              if(key=="total"){
                var cash=value;
                cash=parseInt(cash)+parseInt(amounttrans);
                // console.log("cash:"+cash);
              docRef1.update({
                total: cash
              })
                                     }
                           })
                       } else {
                           // doc.data() will be undefined in this case
                           console.error('Please check your collection and document name in the [firestore] shortcode!');
                       }
                   }).catch(error => {
                       console.error('Please check your collection and document name in the [firestore] shortcode!', error);
                   });
                   // 222222222222222222222222222222222222222222222222
    var accnow=totalIt(itemtrans,amounttrans);
// WAIT FOR THE PROMISE
    const checkIfDone = () => {
      accnow.then(ok => {
        accnow=ok;
          console.log("now4",ok)
          console.log("now",accnow);
            var totnow,totnowit;
              // Retrieve
              var dbacca = localStorage.getItem(account_key);
                    const docRef = db.collection(dbacca).doc(accnow);
                    docRef.get().then(doc => {
                               if (doc.exists) {
                      jQuery.each(doc.data(), function (key, value) {
                        if(key==itemtrans){
                        totnowit=value;
                      }else if (key=="total") {
                        totnow=value;
                      }
                      var itttup=parseInt(totnowit)+parseInt(amounttrans);
                      var ttup=parseInt(totnow)+parseInt(amounttrans);
                      db.collection(dbacca).doc(accnow).update({
                        [itemtrans]: itttup,
                        total: ttup
                      })
                    // db.collection('ACCOUNTS').doc(accnow).update({
                    //   total: ttup
                    // })
                      })
                               } else {
                                   // doc.data() will be undefined in this case
                                   console.error('Please check your collection and document name in the [firestore] shortcode!');
                               }
                           }).catch(error => {
                               console.error('Please check your collection and document name in the [firestore] shortcode!', error);
                           });
                                   // 3333333333333333333333333333 TRANSACTIONS
                                   let id =String(numbertrans)
                                   console.log("rrrrrr",accnow);
                                     // Retrieve
                                     var dbtra = localStorage.getItem(transactions_key);
                                     db.collection(dbtra).doc(id).set({
                                         account: accnow,
                                         amount: amounttrans,
                                         date:   datetrans,
                                         item:   itemtrans,
                                         supplier:suptrans,
                                         time:timetransaction,
                                         created:  firebase.firestore.FieldValue.serverTimestamp()
                                       }).then(() => {
                                         transactForm.reset();
                                       }).catch(err => {
                                         console.log(err.message);
                                       });
        })
        .catch(err => {
          console.error(error)
        })
    }
    checkIfDone();
  totalitems=totalitems+amounttrans;
// db.collection('ITEMS').doc(itemtrans).update({
//   total: totalitems
// })
})
//items
const itForm=document.querySelector('#items-form');
const createItBtn=document.querySelector('#createIt');
createItBtn.addEventListener('click', (e) =>{
  e.preventDefault();
    document.getElementById("progbarit").style.visibility="visible";
  const itName=itForm['item_name'].value;
  const itAcc=itForm['metro'].value;
      // Retrieve
      var dbitacc = localStorage.getItem(account_key);
      var dbit = localStorage.getItem(items_key);

      db.collection(dbit).get()
          .then(function(querySnapshot) {
              querySnapshot.forEach(function(doc) {
                if (doc.id==itName) {
                  itchecker=1;
                  console.log("equal equal");
                }

              })

                        if (itchecker==1) {//same names
                          console.log("same name same name");
                          // close the create modal & reset form
                            document.getElementById("progbarit").style.visibility="hidden";
                          itForm.reset();
                        document.getElementById("item_name").focus();
                      }else {
                        console.log("noto not not");
                              db.collection(dbitacc).doc(itAcc).update({
                           [itName]: 0
                         })
                db.collection(dbit).doc(itName).set({
                    total: 0,
                    account: itAcc
                  }).then(() => {
                    // close the create modal & reset form
                      document.getElementById("progbarit").style.visibility="hidden";
                    itForm.reset();
                  }).catch(err => {
                    console.log(err.message);
                      document.getElementById("progbarit").style.visibility="hidden";
                  });
              }
          });

  //     db.collection(dbitacc).doc(itAcc).update({
  //            [itName]: 0
  //          })
  //         // Retrieve
  //         var dbit = localStorage.getItem(items_key);
  // db.collection(dbit).doc(itName).set({
  //     total: 0,
  //     account: itAcc
  //   }).then(() => {
  //     // close the create modal & reset form
  //     const modal = document.querySelector('#modal-items');
  //       document.getElementById("progbarit").style.visibility="hidden";
  //     itForm.reset();
  //   M.Modal.getInstance(modal).close();
  //   }).catch(err => {
  //     console.log(err.message);
  //       document.getElementById("progbarit").style.visibility="hidden";
  //   });
  // console.log(itAcc);
})
//suppliers
const supForm=document.querySelector('#suppliers-form');
const createsupBtn=document.querySelector('#regsup');
createsupBtn.addEventListener('click', (e) =>{
  e.preventDefault();
    document.getElementById("progbarsup").style.visibility="visible";
  const supName=supForm['supplier_name'].value;
  const supPhone=supForm['supplier_phone'].value;
    // Retrieve
    var dbsu = localStorage.getItem(suppliers_key);
  db.collection(dbsu).doc(supName).set({
      name:supName,
      total: 0,
      phone_number:supPhone
    }).then(() => {
      // close the create modal & reset form
      const modal = document.querySelector('#modal-suppliers');
        document.getElementById("progbarsup").style.visibility="hidden";
      M.Modal.getInstance(modal).close();
      supForm.reset();
    }).catch(err => {
      console.log(err.message);
        document.getElementById("progbarsup").style.visibility="hidden";
    });
  // console.log(supName);
})
// const drBtn=document.querySelector('#procardtrigpc');
// drBtn.addEventListener('click', (e) =>{
//   // document.getElementById("mySidenav").style.width = "250px";
//   // document.querySelector("#bodey").style.marginLeft = "250px";
//   // document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
//   // console.log("opennerve");
//   // e.preventDefault();
//   // drBtn.style.display = "block";
//   // alert("Hello! I am an alert box!!");
// })
function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.querySelector("bodey").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
  console.log("opennerve");
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.querySelector("bodey").style.marginLeft= "0";
  document.body.style.backgroundColor = "white";
}
// logout
function logmeout(){
    auth.signOut();
    localStorage.clear();
      document.location.replace("landing.html");}
// log out
const logoutBtn=document.querySelector('#logout');
logoutBtn.addEventListener('click', (e) =>{
  e.preventDefault();
    auth.signOut();
    localStorage.clear();
      document.location.replace("landing.html");
// Retrieve
// var sample = localStorage.getItem(userid_key);
// console.log(777,sample);
})
// dropdown
const dropdownpro=document.querySelector('.finapro');
const setupDropdownprocard =(data)=>{
  let html=`
    <select class="team wonder" id="droppro">`;
  let htmlEnd=`
</select>`;
  var list='';
  data.forEach(doc=>{
    const drops=doc.data();
    const li=`
    <option>${doc.id}</option>
    `;
    html+=li;
  });
  html+=htmlEnd;
dropdownpro.innerHTML=html;
// console.log(html);
  // Or with jQuery
  $(document).ready(function(){
    $('select').formSelect();
  });
}
// dropdown
// const dropdownList=document.querySelector('.one');
const dropdownList=document.querySelector('.itacc');
const dropdownListtrait=document.querySelector('.trait');
const dropdownListtrasup=document.querySelector('.trasup');
const dropdownListfin=document.querySelector('.finalist');
const dropdownListfinapro=document.querySelector('.finapro');
const setupDropdownfinalist =(data)=>{
var sample = localStorage.getItem(realfinancialyear_key);
  // console.log("finalist222",data);
  let html=`
    <select id="selectId2" onchange="configurationsfinalist()" class="team wonder" id="metropo">
    <option selected>${sample}</option>`;
  let htmlEnd=`
</select>`;
  var list='';
  data.forEach(doc=>{
    const drops=doc.data();
    const li=`
    <option>${doc.id}</option>
    `;
    html+=li;
  });
  html+=htmlEnd;
dropdownListfin.innerHTML=html;
// console.log(html);
  // Or with jQuery
  $(document).ready(function(){
    $('select').formSelect();
  });
}
const setupDropdownitacc =(data)=>{
  let html=`
    <select class="team wonder" id="metro">
    <option>Choose item's Account</option>`;
  let htmlEnd=`
</select>`;
  var list='';
  data.forEach(doc=>{
    const drops=doc.data();
    const li=`
    <option>${doc.id}</option>
    `;
    html+=li;
  });
  html+=htmlEnd;
dropdownList.innerHTML=html;
// console.log(html);
  // Or with jQuery
  $(document).ready(function(){
    $('select').formSelect();
  });
}
// profile financialyear
const setupDropdownfinapro =(data)=>{
//   let html=`
//     <select id="trait">
//     <option>Item</option>`;
//   let htmlEnd=`
// </select>`;
var sample = localStorage.getItem(realfinancialyear_key);
// console.log(777,sample);
  let html=`
    <select id="selectId" onchange="configurations()">
      <option selected>${sample}</option>`;
  let htmlEnd=`
</select>`;
  var list='';
  data.forEach(doc=>{
    const drops=doc.data();
    // const li=`
    // <option>${doc.id}</option>
    // `;
    const li=`
    <option id="${doc.id}">${doc.id}</option>
    `;
    html+=li;
  });
  html+=htmlEnd;
  // console.log(3333,html);
dropdownListfinapro.innerHTML=html;
// console.log(html);
  // Or with jQuery
  $(document).ready(function(){
    $('select').formSelect();
  // document.getElementById("probartra").style.visibility="invisible";
  var status = localStorage.getItem("login");
  });
}
// trait
const setupDropdowntrait =(data)=>{
  // console.log(data);
  let html=`
    <select id="trait">
    <option>Item</option>`;
  let htmlEnd=`
</select>`;
//   let html=`
//   <ul id='dropdown1' class='dropdown-content'>
//     <li><a href="#!">one</a></li>`;
//   let htmlEnd=`
// </ul>`;
  var list='';
  data.forEach(doc=>{
    const drops=doc.data();
    // const li=`
    // <option>${doc.id}</option>
    // `;
    const li=`
    <option>${doc.id}</option>
    `;
    html+=li;
  });
  html+=htmlEnd;
  // console.log(3333,html);
  // console.log(3333,html);
dropdownListtrait.innerHTML=html;
// console.log(html);
  // Or with jQuery
  $(document).ready(function(){
    $('select').formSelect();
  document.getElementById("probartra").style.visibility="invisible";
  var status = localStorage.getItem("login");
  });
}
  // Or with jQuery
  $('.dropdown-trigger').dropdown();
// trasup
const setupDropdowntrasup =(data)=>{
  let html=`
    <select  id="trasup">
    <option>Supplier</option>`;
  let htmlEnd=`
</select>`;
  var list='';
  data.forEach(doc=>{
    const drops=doc.data();
    const li=`
    <option>${doc.id}</option>
    `;
    html+=li;
  });
  html+=htmlEnd;
dropdownListtrasup.innerHTML=html;
          document.getElementById("probartra").style.visibility="hidden";
// console.log(html);
  // Or with jQuery
  $(document).ready(function(){
    $('select').formSelect();
  });
}
function accountIt(item,amt,accc){
    // Retrieve
    var dbit = localStorage.getItem(items_key);
            const docRef = db.collection(dbit).doc(itemtrans);
    docRef.get().then(doc => {
               if (doc.exists) {
                   // console.log('Document data:', doc.data());
      jQuery.each(doc.data(), function (key, value) {
      if(key=="account"){
        accit=value;
        // var geto="total";
        // var holdingtot=doc.data("total");
        // console.log("holding:",holdingtot);
        accit='beans';
          let id =String(numbertrans)
          console.log(numbertrans);
                   }
                   })
               } else {
                   // doc.data() will be undefined in this case
                   console.error('Please check your collection and document name in the [firestore] shortcode!');
               }
           }).catch(error => {
               console.error('Please check your collection and document name in the [firestore] shortcode!', error);
           });
    /////////////////////
}
function configurations(){
  var finyear = document.getElementById("selectId").value;
  console.log("sisisi "+finyear);
  // Retrieve
  // var aidemoi = localStorage.getItem(logo_key);
  // console.log(aidemoi);
  var idy = localStorage.getItem(userid_key);
  var dbacc=idy+"ACCOUNTS"+finyear;
  var dbite=idy+"ITEMS"+finyear;
  var dbsup=idy+"SUPPLIERS"+finyear;
  var dbtra=idy+"TRANSACTIONS"+finyear;
  var newfinyear=idy+"FINANCIALYEAR";
    // clear
  localStorage.removeItem(account_key);
  localStorage.removeItem(items_key);
  localStorage.removeItem(suppliers_key);
  localStorage.removeItem(transactions_key);
  localStorage.removeItem(financialyear_key);
  localStorage.removeItem(realfinancialyear_key);
    // Store
  localStorage.setItem(account_key, dbacc);
  localStorage.setItem(items_key, dbite);
  localStorage.setItem(suppliers_key, dbsup);
  localStorage.setItem(transactions_key, dbtra);
  localStorage.setItem(financialyear_key, dbtra);
  localStorage.setItem(realfinancialyear_key, finyear);
  var frofro="frofro",toto="toto"
    db.collection('USERS').doc(idy).update({
        ACCOUNTS: dbacc,
            ITEMS: dbite,
                SUPPLIERS: dbsup,
                    TRANSACTIONS: dbtra,
                        from: frofro,
                            to: toto,
                            financialyear:finyear,
                            FINANCIALYEAR:newfinyear
      }).then(() => {
        // close the create modal & reset form
        // const modal = document.querySelector('#modal-financialyear');
        //   document.getElementById("progbarfy").style.visibility="hidden";
        // M.Modal.getInstance(modal).close();
        location.reload();
        // accountsForm.reset();
      }).catch(err => {
        console.log("errrr");
        console.log(err.message);
        document.getElementById("progbarfy").style.visibility="hidden";
      });
}
function configurationsfinalist(){
  var finyear = document.getElementById("selectId2").value;
  document.getElementById("progbarfy").style.visibility="visible";
  console.log("sisisi "+finyear);
  // Retrieve
  // var aidemoi = localStorage.getItem(logo_key);
  // console.log(aidemoi);
  var idy = localStorage.getItem(userid_key);
  var dbacc=idy+"ACCOUNTS"+finyear;
  var dbite=idy+"ITEMS"+finyear;
  var dbsup=idy+"SUPPLIERS"+finyear;
  var dbtra=idy+"TRANSACTIONS"+finyear;
  var newfinyear=idy+"FINANCIALYEAR";
    // clear
  localStorage.removeItem(account_key);
  localStorage.removeItem(items_key);
  localStorage.removeItem(suppliers_key);
  localStorage.removeItem(transactions_key);
  localStorage.removeItem(financialyear_key);
  localStorage.removeItem(realfinancialyear_key);
    // Store
  localStorage.setItem(account_key, dbacc);
  localStorage.setItem(items_key, dbite);
  localStorage.setItem(suppliers_key, dbsup);
  localStorage.setItem(transactions_key, dbtra);
  localStorage.setItem(financialyear_key, dbtra);
  localStorage.setItem(realfinancialyear_key, finyear);
  var frofro="frofro",toto="toto"
    db.collection('USERS').doc(idy).update({
        ACCOUNTS: dbacc,
            ITEMS: dbite,
                SUPPLIERS: dbsup,
                    TRANSACTIONS: dbtra,
                        from: frofro,
                            to: toto,
                            financialyear:finyear,
                            FINANCIALYEAR:newfinyear
      }).then(() => {
        // close the create modal & reset form
        // const modal = document.querySelector('#modal-financialyear');
          document.getElementById("progbarfy").style.visibility="hidden";
        // M.Modal.getInstance(modal).close();
        location.reload();
        // accountsForm.reset();
      }).catch(err => {
        console.log("errrr");
        console.log(err.message);
        document.getElementById("progbarfy").style.visibility="hidden";
      });
}
$('#selectId select').on('change', function(){
    console.log("option selected!")
    // do your stuff here.
})
// current total items
async function totalIt(item,amt){
  var total, totalall;
  var accret;
    // Retrieve
    var dbit = localStorage.getItem(items_key);
          const docReftm = db.collection(dbit).doc(item);
          var statement =await docReftm.get().then(doc => {
                     if (doc.exists) {
            jQuery.each(doc.data(),  function (key, value) {
              if(key=="total"){
              var tot=value;
               total=parseInt(tot)+parseInt(amt);
              db.collection(dbit).doc(item).update({
                     total: total
                   })
                     var accit=value;
          }else if(key=="account"){
              accret= value;
                                   }
                         })
                     } else {
                         // doc.data() will be undefined in this case
                         console.error('Please check your collection and document name in the [firestore] shortcode!');
                     }
                 }).catch(error => {
                     console.error('Please check your collection and document name in the [firestore] shortcode!', error);
                 });
                 return accret;
}
// current total items
function worktrans(
  at,dt,it,st,tt,nt
){
                 return tot;
}
// dropdown
$('.dropdown-triggerpn').dropdown();
// dropdown
$('.dropdown-triggerpc').dropdown();
// dropdown procard
$('.procardtrigpn').dropdown();
// dropdown procard
// $('.procardtrigpc').dropdown();
  // Retrieve
  var dbacca = localStorage.getItem(account_key);
  // console.log("song",dbacca);
// get acc data
db.collection(dbacca).onSnapshot(snapshot=>{
  setupAccounts(snapshot.docs);
  setupDropdownitacc(snapshot.docs);
})
  // Retrieve
  var dbit= localStorage.getItem(items_key);
// get item data
db.collection(dbit).onSnapshot(snapshot=>{
  setupDropdowntrait(snapshot.docs);
})
  // Retrieve
  var fiya= localStorage.getItem(userid_key)+"FINANCIALYEAR";
// get item data
db.collection(fiya).onSnapshot(snapshot=>{
  // console.log("great1"+fiya);
  //   console.log("great2"+snapshot);
  setupDropdownfinapro(snapshot.docs);
})
  // Retrieve
  var dbfy= localStorage.getItem(userid_key)+"FINANCIALYEAR";
  // console.log("finalist111",dbfy);
db.collection(dbfy).onSnapshot(snapshot=>{
  setupDropdownfinalist(snapshot.docs);
  // console.log("finalist",snapshot);
})
  // Retrieve
  var dbsu = localStorage.getItem(suppliers_key);
// get sup data
db.collection(dbsu).onSnapshot(snapshot=>{
  setupDropdowntrasup(snapshot.docs);
})
  // Retrieve
  var dbtra = localStorage.getItem(transactions_key);
// get transac data
db.collection(dbtra).orderBy("created", "desc").onSnapshot(snapshot=>{
  setupTransacs(snapshot.docs);
  // console.log("traaaa:",snapshot.docs);
})
//////////
//////////
// datepicker
var currYear = (new Date()).getFullYear();
var today = new Date();
var datetoday = (today.getMonth()+1).toString()+today.getDate().toString()+today.getFullYear().toString();
$(document).ready(function() {
  $(".datepicker").datepicker({
    defaultDate: datetoday,
    setDefaultDate: true,
    format: "mm/dd/yyyy",
    autoClose:true
  }).datepicker("setDate", new Date());
});
// datepicker2
var currYear = (new Date()).getFullYear();
$(document).ready(function() {
  $(".dater").datepicker({
    defaultDate: new Date(),
    // setDefaultDate: new Date(2000,01,31),
    format: "mm/dd/yyyy",
    autoClose:true
  }).datepicker("setDate", new Date());
});
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  // setup materialize components
  document.addEventListener('DOMContentLoaded', function() {
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  });
    // Or with jQuery
    $(document).ready(function(){
      $('.helpmodal').modal();
    });
      function preview_image(event) {
      auth.onAuthStateChanged(user=>{
              file=event.target.files[0];
        var reader = new FileReader();
        reader.onload = function(){
          var output = document.getElementById('output_image');
          readed=reader.result;
          output.src = readed;
        }
      storage.ref('users/'+ user.uid + '/logo.jpg').put(file).then(doc => {
        console.log("upload successful");
              storage.ref('users/'+ user.uid + '/logo.jpg').getDownloadURL().then(imgURL => {
                console.log("upload saving");
                var userid = localStorage.getItem(userid_key);
                localStorage.setItem(logo_key, imgURL);
                localStorage.setItem(changedlogo_key, one);
                db.collection("USERS").doc(userid).update({
              logo: one,
              logo64:imgURL
              })
                     }).catch(error => {
                         console.error('Please check your collection and document name in the [firestore] shortcode!', error);
                     });
             }).catch(error => {
                 console.error('Please check your collection and document name in the [firestore] shortcode!', error);
             });
        reader.readAsDataURL(file);
      })
      }
      // let file{};
      function chooseFile(e){
      auth.onAuthStateChanged(user=>{
        file=e.target.files[0];
          var output = document.getElementById('output_image');
          // output.src = file.src;
        storage.ref('users/'+ user.uid + '/logo.jpg').put(file).then(doc => {
          console.log("upload successful");
               }).catch(error => {
                   console.error('Please check your collection and document name in the [firestore] shortcode!', error);
               });
        // imgData = getBase64Image(file);
        // localStorage.setItem("imgData", imgData);
        // var dataImage = localStorage.getItem('imgData');
        // // bannerImg = document.getElementById('tableBanner');
        // output.src = "data:image/png;base64," + dataImage;
               })
      }
  $(document).ready(function(){
    $('.sidenav').sidenav();
  });
  function getBase64Image(img) {
      var canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      var ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);
      var dataURL = canvas.toDataURL("image/png");
      console.log("datdatdat"+dataURL);
      return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }
      // $(function(){
      //   $("#bottomind").load("bottom.html");
      // });
      $.get("universal/nav.html", function(data){
          $("#navind").replaceWith(data);
      });
      $.get("universal/bottom.html", function(data){
          $("#bottomind").replaceWith(data);
      });
      $(document).ready(function() {
  var textbox = '#amount';
  var hidden = '#amount';
  $(textbox).keyup(function () {
  var num = $(textbox).val();
    var comma = /,/g;
    num = num.replace(comma,'');
    $(hidden).val(num);
    var numCommas = addCommas(num);
    $(textbox).val(numCommas);
  });
});
function addCommas(nStr) {
  nStr += '';
  var comma = /,/g;
  nStr = nStr.replace(comma,'');
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}
function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: 'en'}, 'google_translate_element');
}

var tour = new Tour({
  steps: [
  {
    element: ".tranco",
    title: "RECORD TRANSACTION",
    content: "Fill in and click Transact button"
  },
  {
    element: "#reportshtml",
    title: "REPORTS",
    content: "Let's look at some reports."
  }
  ,
  {
    element: "#transactbut",
    title: "RECORD A TRANSACTION",
    content: "Choose an item.",
    path:'reports.html'
  }
],
  backdrop: true,
  storage: false,
  template: `<div class='popover tour black-text'>
    <div class='arrow'></div>
    <h2 class='popover-title'></h2>
    <div class='popover-content'></div>
    <div class='popover-navigation'>
        <button class='btn btn-default' data-role='prev'>« Prev</button>
        <span data-role='separator'>|</span>
        <button class='btn btn-default' data-role='next'>Next »</button>
    </div>
  </div>`
});

tour.init();
var tut = localStorage.getItem(tutorial_key);
if (tut==1) {
tour.start();
          // localStorage.setItem(tutorial_key, 0);
}

      // Or with jQuery

            $(document).ready(function(){
              $('.invitationmodal').modal();
            });

// Close the dropdown menu if the user clicks outside of it
// window.onclick = function(event) {
//
//   if (event.target.matches('.procard')) {
//     return;
//    }
// // }
  //email
  // const addBtn1=document.querySelector('#additembtn');
  // addBtn1.addEventListener('click', (e) =>{
  //   e.preventDefault();
  // })
}//vineEnd

const invitebtn=document.getElementById('sendInvitation');
invitebtn.addEventListener('click', (e) =>{
  e.preventDefault();
// function sendInvitation(){
//   e.preventDefault();
  var company = localStorage.getItem(company_key);
  var location = localStorage.getItem(location_key);
  const email=document.getElementById("emailinvi").value;
  console.log(company+location+email);
  var url="https://chocolate-cosmos.web.app/invitation.html?email="+email
  +"&company="+company
  +"&location="+location;
  console.log(url);
  window.open(`mailto:${email}?subject=Choclolate Cosmos Invitation&body=Please follow the link to sign up for Chocolate Cosmos. ${url}`);

  // return url;
})
