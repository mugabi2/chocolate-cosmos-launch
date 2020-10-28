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
}else {///vine2222222222222222222222222222222222222222222222222222///////////////////////////////////////////////
  var totalitems,totalaccounts,itemaccount;
  var fuel=0,
  zero=0,one=1,two=2,three=3,four=4;
  var identitynational;
  // logmeout();
      var song = localStorage.getItem(userid_key);
      console.log("song id",song);
      var songs = localStorage.getItem("login");
      console.log("song login",songs);

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
      document.getElementById("body").style.visibility="visible";
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
        // document.location.replace("landing.html");
        console.log("loged out");
      }
      })
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
  document.getElementById("body").style.visibility="visible";
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
  // console.log(transList);
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
  function sanitizeSlash(str){
    console.log("sani1",str);
    str = str.replace(/[^a-z0-9,_-]/gim,"");
      return str;//.trim();
  }
  // traing
  // const transactForm=document.querySelector('#transactform');
  const transactBtn=document.querySelector('#transactbut');
  transactBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    const itemtrans=document.getElementById("trait").value;
    const suptrans=document.getElementById("trasup").value;
    const datetrans=document.getElementById("datepicker1").value;
    var amounttrans=document.getElementById("amount").value;
    const quantity=document.getElementById("quantity").value;
    const numbertrans = Math.round(+new Date()/1000);
    console.log(itemtrans,33333333,suptrans);
    if (itemtrans === 'Item' || suptrans==='Supplier' || datetrans==='' || amount==='' || quantity==='') {
        alert("Please fill in all fields");
        // $('#selBooks').focus();
        console.log("nnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn");
        return false;
      }else {
        console.log("yyyyyyyyyyyyyyyyyyyyy");
      }
      var monthie=whichMonth(whatMonth(datetrans));
      var amounttrans=sanitizeStringComma(amounttrans);
      amounttrans=amounttrans*quantity;
    var accit;
    var d = new Date(); // for now
    const timetransaction=d.getHours()+":"+d.getMinutes();
    // worktrans(amounttrans,datetrans,itemtrans,suptrans,timetransaction,numbertrans);
      //111111111111111111111111
            // adding supplier
              // Retrieve
              var dbsu = localStorage.getItem(suppliers_key);
              console.log(dbsu,99999999,suptrans);
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
                                           month:monthie,
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

}//vineEnd

    function whatMonth(operator){
  return operator.substring(0, 2);
}

  function whichMonth(monthNumber){
    var month;
    monthNumber=parseInt(monthNumber);
    switch (monthNumber) {
case 01:
  month = "Jan";
  return month;
  break;
case 02:
   month = "Feb";
   return month;
  break;
case 03:
  month = "Mar";
  return month;
  break;
case 04:
  month = "Apr";
  return month;
  break;
case 05:
  month = "May";
  return month;
  break;
case 06:
  month = "Jun";
  return month;
  break;
case 07:
month = "Jul";
return month;
break;
case 08:
 month = "Aug";
 return month;
break;
case 09:
month = "Sep";
return month;
break;
case 10:
month = "Oct";
return month;
break;
case 11:
month = "Nov";
return month;
break;
case 12:
month = "Dec";
return month;
break;
}
return month;
  }
