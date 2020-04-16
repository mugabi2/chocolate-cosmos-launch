var totalitems,totalaccounts,itemaccount;
var fuel=0;
// listen for authentication
auth.onAuthStateChanged(user=>{
  if(user){
  console.log("user logged in");
}else {
  document.location.replace("index.html");
  console.log("loged out");
}
})

function generator(str){
  var string=sanitizeString(str);
  var execute=0;

  db.collection("USERS").where("code", "==",string)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          execute=1;
            // doc.data() is never undefined for query doc snapshots
            console.log("inside");
            console.log(doc.id, " => ", doc.data());
              fuel=parseInt(fuel)+parseInt(1);
              string=string+fuel;
                generator(string);
                console.log("fuel:",fuel);
                // return true;
                // console.log("exists:", doc.data());

        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
    execute(execute);
    // if (execute==0) {
      db.collection('USERS').doc(string).set({
          code: string
        });

      // doc.data() will be undefined in this case
      console.log("doesent doesent doesint");
    // }else {
    // }
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
  generator(coname);
  // console.log("sani2",sani);
  data.forEach(doc=>{
    const acc=doc.data();
    // list+=doc.id+" "+"<br/>";
    // //////////////////

          const docReft = db.collection('TRANSACTIONS').doc(doc.id);
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
      // console.log("kkkkk:",k);
      if(k==30){return true;}
      // console.log(liste);
     // console.log("html1:",html);
                 })
            var li;
            y++;
            // console.log(y);
                 if(y%2==1){
             li=`
                <li class="entry ">
                <div class="orange lighten-4 entry valign-wrapper left">${liste}
                <i class="small material-icons right">print</i>
                <i class="small material-icons right">delete_forever</i>
                </div>
                </li>
            `;
          }else {
              // console.log("2");
              li=`
           <li class="entry ">
           <div class="entry valign-wrapper ">${liste}
             <i class="small material-icons right">print</i>
             <i class="small material-icons right">delete_forever</i>
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
}
//accounts
const accountsForm=document.querySelector('#accounts-form');
const createAccBtn=document.querySelector('#createAccBtn');
createAccBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const accountName=accountsForm['account_name'].value;

  db.collection('ACCOUNTS').doc(accountName).set({
      total: 0
    }).then(() => {
      // close the create modal & reset form
      const modal = document.querySelector('#modal-accounts');
      M.Modal.getInstance(modal).close();
      accountsForm.reset();
    }).catch(err => {
      console.log(err.message);
    });

  // console.log(accountName);
})
// transact
const transactForm=document.querySelector('#transactform');
const transactBtn=document.querySelector('#transactbut');
transactBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const itemtrans=transactForm['trait'].value;
  const suptrans=transactForm['trasup'].value;
  const datetrans=transactForm['date'].value;
  const amounttrans=transactForm['amount'].value;
  const numbertrans = Math.round(+new Date()/1000);
  console.log("no:",numbertrans);

  var d = new Date(); // for now
  const timetransaction=d.getHours()+":"+d.getMinutes();
  // worktrans(amounttrans,datetrans,itemtrans,suptrans,timetransaction,numbertrans);
    // //////////////////

          const docRef = db.collection('ITEMS').doc(itemtrans);
  docRef.get().then(doc => {
             if (doc.exists) {
                 // console.log('Document data:', doc.data());
    jQuery.each(doc.data(), function (key, value) {
    if(key=="account"){
      var accit=value;
      totalitems=totalIt(itemtrans,amounttrans,accit);
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
  totalitems=totalitems+amounttrans;
db.collection('ITEMS').doc(itemtrans).update({
  total: totalitems
})

  let id =String(numbertrans)
  console.log(numbertrans);
    db.collection('TRANSACTIONS').doc(id).set({
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
      // adding supplier
                const docRef1 = db.collection('SUPPLIERS').doc(suptrans);
        docRef1.get().then(doc => {
                   if (doc.exists) {
                       // console.log('Document data:', doc.data());
          jQuery.each(doc.data(), function (key, value) {
          if(key=="total"){
            var cash=value;
            cash=parseInt(cash)+parseInt(amounttrans);
            console.log("cash:"+cash);
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
})
//items
const itForm=document.querySelector('#items-form');
const createItBtn=document.querySelector('#createIt');
createItBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const itName=itForm['item_name'].value;
  const itAcc=itForm['metro'].value;

  db.collection('ITEMS').doc(itName).set({
      total: 0,
      account: itAcc
    }).then(() => {
      // close the create modal & reset form
      const modal = document.querySelector('#modal-items');
      M.Modal.getInstance(modal).close();
      itForm.reset();
    }).catch(err => {
      console.log(err.message);
    });

  // console.log(itAcc);
})
//suppliers
const supForm=document.querySelector('#suppliers-form');
const createsupBtn=document.querySelector('#regsup');
createsupBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const supName=supForm['supplier_name'].value;
  const supPhone=supForm['supplier_phone'].value;

  db.collection('SUPPLIERS').doc(supName).set({
      name:supName,
      total: 0,
      phone_number:supPhone
    }).then(() => {
      // close the create modal & reset form
      const modal = document.querySelector('#modal-suppliers');
      M.Modal.getInstance(modal).close();
      supForm.reset();
    }).catch(err => {
      console.log(err.message);
    });

  // console.log(supName);
})

// log out
const logoutBtn=document.querySelector('#logout');
logoutBtn.addEventListener('click', (e) =>{
  e.preventDefault();
    auth.signOut();
      document.location.replace("index.html");
})
// dropdown
const dropdownList=document.querySelector('.one');
const dropdownListtrait=document.querySelector('.trait');
const dropdownListtrasup=document.querySelector('.trasup');

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
  let html=`
    <select class="trait" id="trait">
    <option>Item</option>`;
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
dropdownListtrait.innerHTML=html;
// console.log(html);
  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });
}
// trasup
const setupDropdowntrasup =(data)=>{
  let html=`
    <select class="trasup" id="trasup">
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
// current total items
function totalIt(item,amt,accc){
  var total;
          const docRef = db.collection('ITEMS').doc(item);
          docRef.get().then(doc => {
                     if (doc.exists) {
                         // console.log('Document data:', doc.data());
            jQuery.each(doc.data(), function (key, value) {
              if(key=="total"){
              const tot=value;
              console.log("in IT meth1:",tot);
              var total=parseInt(tot)+parseInt(amt);
              console.log("in IT meth2:",total);
              db.collection('ITEMS').doc(item).update({
                     total: total
                   })

                     var accit=value;
                     console.log("in IT meth acc total:",total);
            db.collection('ACCOUNTS').doc(accc).update({
                     [item]: total
                   })
            }
            // if(key=="account"){
            //   var accit=value;
            //   console.log("in IT meth acc total:",total);
            //   db.collection('ACCOUNTS').doc("KITCHEN").update({
            //   [item]: total
            // })
            //              }
                         })
                     } else {
                         // doc.data() will be undefined in this case
                         console.error('Please check your collection and document name in the [firestore] shortcode!');
                     }
                 }).catch(error => {
                     console.error('Please check your collection and document name in the [firestore] shortcode!', error);
                 });
                 var y=1;
                 return y;
}
// current total items
function worktrans(
  at,dt,it,st,tt,nt
){
  // console.log("in acc meth:",itemaccount);
  var tot=1;
          // const docRef = db.collection('ACCOUNTS').doc(acc);
          // docRef.get().then(doc => {
          //            if (doc.exists) {
          //                // console.log('Document data:', doc.data());
          //   jQuery.each(doc.data(), function (key, value) {
          //     if(key==item){
          //     tot=value;
          //                }
          //
            // console.log("tot acc here:",amou);
          //   console.log(totalitems,totalaccounts);
          //   })
          //            } else {
          //                // doc.data() will be undefined in this case
          //                console.error('Please check your collection and document name in the [firestore] shortcode!');
          //            }
          //        }).catch(error => {
          //            console.error('Please check your collection and document name in the [firestore] shortcode!', error);
          //        });


                 return tot;
}
// dropdown
$('.dropdown-trigger').dropdown();

// get acc data
db.collection('ACCOUNTS').onSnapshot(snapshot=>{
  setupAccounts(snapshot.docs);
  setupDropdownitacc(snapshot.docs);
})

// get item data
db.collection('ITEMS').onSnapshot(snapshot=>{
  setupDropdowntrait(snapshot.docs);
})

// get sup data
db.collection('SUPPLIERS').orderBy("name", "desc").onSnapshot(snapshot=>{
  setupDropdowntrasup(snapshot.docs);
})

// get transac data
db.collection('TRANSACTIONS').orderBy("created", "desc").onSnapshot(snapshot=>{
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

  // Or with jQuery
  //
  // $(document).ready(function(){
  //   $('.datepicker').datepicker();
  // });
