var totalitems,totalaccounts,itemaccount;
var fuel=0;
var identitynational;
          var userid_key="userid";
          var account_key="account";
          var items_key="items";
          var suppliers_key="suppliers";
          var transactions_key="transactions";
          var company_key="company";
          var surname_key="surname";
          var firstname_key="firstname";
          var phone_key="phone";
          var email_key="email";
          var numberusers_key="usersNo";
          var financialyear_key="financial year";
          var realfinancialyear_key="real financial year";

var song = localStorage.getItem(userid_key);
console.log("song",song);
// localStorage.setItem(account_key, "ACCOUNTSblank");
// localStorage.setItem(items_key, "ITEMSblank");
// localStorage.setItem(suppliers_key, "SUPPLIERSblank");
// localStorage.setItem(transactions_key, "TRANSACTIONSblank");
// listen for authentication
auth.onAuthStateChanged(user=>{
          // console.log(user.uid);
  // .then(cred => { console.log(55555,cred);})
  if(user){

    // Store
// localStorage.setItem(userid_key, user.uid);
var statuss = localStorage.getItem(userid_key);
  console.log("user logged in:",statuss);
  identitynational=user.uid;
document.getElementById("bodey").style.visibility="visible";
var status = localStorage.getItem("login");
// $('#modal-accounts').modal({ show: false})
// openModal();
if (status=="0") {
             jQuery(document).ready(function(){
                   jQuery('#mofinancialyear').modal();
                   jQuery(document).ready(function(){
                       jQuery('#mofinancialyear').modal('open');
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
  document.location.replace("login.html");
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
  console.log("sani1",str);
str = str.replace(/[^a-z0-9\,_-]/gim,"");
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
            // console.log(y);
                 if(y%2==1){
                 li=`
              <li class="entry blue lighten-4">
              <div class=" valign-wrapper left">${liste}
                <i id="${identityp}" class="iconprint small material-icons right">print</i>
                <i id="${identityd}" class="icondelete small material-icons right">delete_forever</i>
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

console.log(identities);

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
                                var supsup;
                                const docRefts = db.collection(dbsu).doc(icsupplier);
                               docRefts.get().then(doc => {
                                        if (doc.exists) {
                                            // console.log('Document data:', doc.data());
                               jQuery.each(doc.data(), function (key, value) {
                               if(key=="total"){
                                 supsup=value;
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
  document.getElementById("progbarfy").style.visibility="visible";
  var frofro=document.getElementById("fromdate").value;
  var toto=document.getElementById("todate").value;
  frofro=sanitizeSlash(frofro);
  toto=sanitizeSlash(toto);
  finyear=frofro+toto;

  // Retrieve
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

  var companyThis=localStorage.getItem(company_key);
  db.collection(newfinyear).doc(finyear).set({
  from: frofro,
  to: toto
})

  db.collection('USERS').doc(idy).update({
      ACCOUNTS: dbacc,
          ITEMS: dbite,
              SUPPLIERS: dbsup,
                  TRANSACTIONS: dbtra,
                      from: frofro,
                          to: toto,
                          financialyear:finyear
    }).then(() => {
      // close the create modal & reset form
      const modal = document.querySelector('#modal-financialyear');
        document.getElementById("progbarfy").style.visibility="hidden";
      M.Modal.getInstance(modal).close();
      location.reload();
      // accountsForm.reset();
    }).catch(err => {
      console.log("errrr");
      console.log(err.message);
      document.getElementById("progbarfy").style.visibility="hidden";
    });

  console.log("OVER"+finyear);
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
// traing
const transactForm=document.querySelector('#transactform');
const transactBtn=document.querySelector('#transactbut');
transactBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const itemtrans=transactForm['trait'].value;
  const suptrans=transactForm['trasup'].value;
  const datetrans=transactForm['date'].value;
  const amounttrans=transactForm['amount'].value;
  const numbertrans = Math.round(+new Date()/1000);

  if (itemtrans === 'Item' || suptrans==='Supplier' || datetrans==='' || amount==='') {
      alert("Please fill in all fields");
      // $('#selBooks').focus();
      console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
      return false;
    }else {
      console.log("yyyyyyyyyyyyyyyyyyyyy");
    }
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
    var dbit = localStorage.getItem(items_key);
  db.collection(dbit).doc(itName).set({
      total: 0,
      account: itAcc
    }).then(() => {
      // close the create modal & reset form
      const modal = document.querySelector('#modal-items');
        document.getElementById("progbarit").style.visibility="hidden";
      itForm.reset();
    M.Modal.getInstance(modal).close();
    }).catch(err => {
      console.log(err.message);
        document.getElementById("progbarit").style.visibility="hidden";
    });

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

// log out
const logoutBtn=document.querySelector('#logout');
logoutBtn.addEventListener('click', (e) =>{
  e.preventDefault();
    auth.signOut();
    localStorage.clear();
      document.location.replace("login.html");
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
const dropdownList=document.querySelector('.one');
const dropdownListtrait=document.querySelector('.trait');
const dropdownListtrasup=document.querySelector('.trasup');
const dropdownListfin=document.querySelector('.finalist');

const setupDropdownfinalist =(data)=>{
  console.log("finalist222",data);
  let html=`
    <select class="team wonder" id="metropo">
    <option>Choose Financial Year</option>`;
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
// trait
const setupDropdowntrait =(data)=>{
//   let html=`
//     <select id="trait">
//     <option>Item</option>`;
//   let htmlEnd=`
// </select>`;
  let html=`
  <ul id='dropdown1' class='dropdown-content'>
    <li><a href="#!">one</a></li>`;
  let htmlEnd=`
</ul>`;
  var list='';
  data.forEach(doc=>{
    const drops=doc.data();
    // const li=`
    // <option>${doc.id}</option>
    // `;
    const li=`
    <li><a href="#!">${doc.id}</a></li>
    `;
    html+=li;
  });
  html+=htmlEnd;
  console.log(3333,html);
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

}
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
$('.procardtrigpc').dropdown();

  // Retrieve
  var dbacca = localStorage.getItem(account_key);
  console.log("song",dbacca);
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
  var dbfy= localStorage.getItem(financialyear_key);
  console.log("finalist111",dbfy);
db.collection(dbfy).onSnapshot(snapshot=>{
  setupDropdownfinalist(snapshot.docs);
  console.log("finalist",snapshot);
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
// datepicker
var currYear = (new Date()).getFullYear();

$(document).ready(function() {
  $(".datepicker").datepicker({
    defaultDate: new Date(),
    // setDefaultDate: new Date(2000,01,31),
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
        var reader = new FileReader();
        reader.onload = function(){
          var output = document.getElementById('output_image');
          output.src = reader.result;
        }
        reader.readAsDataURL(event.target.files[0]);
      }
      // const logoBtn=document.querySelector('#output_image');
      // logoBtn.addEventListener('click', (e) =>{
      //   e.preventDefault();
      // })
  //email
  // const emailForm=document.querySelector('#emailus');
  // const emailBtn=document.querySelector('#sendemail');
  // emailBtn.addEventListener('click', (e) =>{
  //   e.preventDefault();
  //   const hisemail=emailForm['emailyours'].value;
  //   const hismessage=emailForm['emailmsg'].value;
  //   send();
  //   function send() {
  //     setTimeout(function() {
  //       window.open("mailto:" + "samuelmugabi2@gmail.com" + "?subject=" + "subjecgt" + "&body=" + "body body");
  //     }, 20);
  //     console.log('sent');
  //   }
  // })
