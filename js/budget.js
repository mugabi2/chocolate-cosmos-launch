
  // get acc data
var userid_key="userid";
var account_key="account";
var items_key="items";
var suppliers_key="suppliers";
var tutorial_key="tutorial";
var originalAccount_key="original account";
var originalItem_key="original item";
var originalSupplier_key="original supplier";
var originalItemAcc_key="original item account";
var originalItemName_key="original item name";
var originalAccName_key="original account name";
var originalSupName_key="original supplier name";
var supplierTotal_key="supplier total";
var currentAccounts_key="current accounts";
var currentItems_key="current items";
var budgetaccounts_key="budget accounts";
var budgetitems_key="budget items";
var budgetTotal_key="budget total";
var currentbudgetname_key="current budget name";
var currentbudgetnamename_key="current budget name name";
var dbacc = localStorage.getItem(account_key);
var dbit = localStorage.getItem(items_key);
var dbbgtit = localStorage.getItem(budgetitems_key);
var bugt = localStorage.getItem(currentbudgetname_key);
var dbsup = localStorage.getItem(suppliers_key);
var bugs = localStorage.getItem(userid_key)+"BUDGETS";

 var currentbgt = localStorage.getItem(currentbudgetname_key);
 var bgtitup = localStorage.getItem(budgetitems_key);
 console.log("gologo"+dbbgtit);

db.collection(dbit).onSnapshot(snapshot=>{
window.localStorage.setItem(currentItems_key, snapshot.docs);
setupItems(snapshot.docs);
})
// var polyster=localStorage.getItem(userid_key)+bugt;
db.collection(bugt).onSnapshot(snapshot=>{
setupTotalBudge(snapshot.docs);
})
db.collection(bugt).onSnapshot(snapshot=>{
setupBudgetItems(snapshot.docs);
})
db.collection(bugs).onSnapshot(snapshot=>{
setupDropdownbgt(snapshot.docs);
})

 var mide = localStorage.getItem(userid_key);
const docReftss = db.collection("USERS").doc(mide);
docReftss.get().then(doc => {
         if (doc.exists) {
             // console.log('Document data:', doc.data());
jQuery.each(doc.data(), function (key, value) {
          if(key=="budget"){
            localStorage.setItem(currentbudgetname_key, value);
          }
})
// console.log("000001",number);
}
}).catch(error => {
console.error('Please check your collection and document name in the [firestore] shortcode!', error);
});

//////////////
// db.collection(dbbgtit)
//     .get()
//     .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             // doc.data() is never undefined for query doc snapshots
//             if (doc.id==currentbgt) {
//             console.log(doc.id, " => ", doc.data());
//             jQuery.each(doc.id, function (key, value) {
//               console.log(key+"+++++++++"+value);
//                          })
//             }
//         });
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//     });
    /////////////////
//     var doct = db.collection(dbbgtit).doc(currentbgt);
//
// doct.get().then(function(doc) {
//     if (doc.exists) {
//         console.log("Document data:", doc.data());
//     } else {
//         // doc.data() will be undefined in this case
//         console.log("No such document!");
//     }
// }).catch(function(error) {
//     console.log("Error getting document:", error);
// });
///////////////////////
// items
const itemsList=document.querySelector('.guidesi');
const setupItems =(data)=>{
let html='';
var list='';
var li;
var itd,amd,dtd,spd,tmd;
var y=0,k=0;
var liste;
var coname="s t.#!@#$%^&*(ar";
var identity,identitye,identityd;
var prints=[];
var deletes=[];
var identities=[];
data.forEach(doc=>{
  const acc=doc.data();
  // Retrieve
  const docReftit = db.collection(dbit).doc(doc.id);
  list+=doc.id+" "+"<br/>";
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
    identityd=doc.id+'d';
               })
          y++;
          prints.push(identitye);
          deletes.push(identityd);
          identities.push(identity);
               li=`
            <li class="itemdiv entry black-text">
            <div class=" valign-wrapper ">
            <div class="divlist">${doc.id}</div>
            <div class="text-right divicon">
            <i id="${doc.id}" onclick="itemClick(event)"  class=" icondelete small material-icons right histicon">add</i>
            </div>
            </div>
            </li>
          `;
          html+=li;
});
itemsList.innerHTML=html;
// console.log("here"+html);
// console.log("hereRERE"+prints);
}
// items
const budgetList=document.querySelector('.guidesb');
const setupBudgetItems =(data)=>{
let html='';
var list='';
var li;
var itd,amd,dtd,spd,tmd;
var y=0,k=0;
var liste;
var coname="s t.#!@#$%^&*(ar";
var identity,identitye,identityd;
var prints=[];
var deletes=[];
var identities=[];
data.forEach(doc=>{
  const acc=doc.data();
  // Retrieve
  const docReftit = db.collection(dbit).doc(doc.id);
  list+=doc.id+" "+"<br/>";
  jQuery.each(acc, function (key, value) {
  if(key=="item"){
     itd=value;
   }else if (key=="amount") {
     amd=addCommas(value);
   }
    liste=doc.id+" "+itd+" "+amd+" "+spd+" "+dtd+" "+tmd;
    k++;
    identity=doc.id;
    identitye=doc.id;
    identityd=doc.id;
               })
          y++;
          prints.push(identitye);
          deletes.push(identityd);
          identities.push(identity);
               li=`
            <li class="itemdiv entry black-text">
            <div class=" valign-wrapper ">
            <div class="divlist">${doc.id}</div> &ensp;
            <div class="divlist">${amd}</div>
            <div class="text-right divicon">
            <i id="${identityd}" onclick="deleteItem(event)" class=" icondelete small material-icons right histicon">delete_forever</i>
            <i id="${identitye}" onclick="editItem(event)" class="center iconprint small material-icons right histicon">edit</i>
            </div>
            </div>
            </li>
          `;
          html+=li;
});
budgetList.innerHTML=html;
// console.log("here"+html);
// console.log("hereRERE"+prints);
}//budget item setup end

  // document.addEventListener('DOMContentLoaded', function() {
  //   var elems = document.querySelectorAll('.modal');
  //   var instances = M.Modal.init(elems, options);
  // });

    // document.addEventListener('DOMContentLoaded', function() {
    //   var elems = document.getElementById('.createbudgetmodal');
    //   var instances = M.Modal.init(elems, options);
    // });

      // Or with jQuery

                  $(document).ready(function(){
                    $('.editmodal').modal();
                  });
                  $(document).ready(function(){
                    $('.createbudgetmodal').modal();
                  });
                  $(document).ready(function(){
                    $('.budgetModal').modal();
                  });
  function itemClick(event){
    var ideas=event.target.id;
    console.log(ideas);
  localStorage.setItem("item clicked", ideas);

      document.getElementById('budgetItemHead').innerHTML="Budget amount for "+ ideas;
                   jQuery(document).ready(function(){
                         jQuery('.budgetModal').modal();
                         jQuery(document).ready(function(){
                             jQuery('.budgetModal').modal('open');
                         });
                   });

                 }


         const createbBtn=document.querySelector('#createBudget');
         createbBtn.addEventListener('click', (e) =>{
           e.preventDefault();
     const budgetN=document.getElementById("budgetName").value;
      var iden = localStorage.getItem(userid_key);
      var bgtit = localStorage.getItem(budgetitems_key);
      var budge=iden+budgetN;
      var bugatti=iden+"BUDGETS"
      localStorage.setItem(currentbudgetnamename_key, budgetN);
        localStorage.setItem(currentbudgetname_key, budge);
                    db.collection(bugatti).doc(budge).set({
                      name: budgetN
                    })
          db.collection('USERS').doc(iden).update({
              budget: budge
            }).then(() => {
        location.reload();
            }).catch(err => {
              console.log("errrr");
              console.log(err.message);
            });

    })
    // eventlistener end

         const addbgtBtn=document.querySelector('#addToBudget');
         addbgtBtn.addEventListener('click', (e) =>{
           e.preventDefault();
     const itemAmount=document.getElementById("budgetAmount").value;
      var itemClicked = localStorage.getItem("item clicked");
       var bgtacc = localStorage.getItem(budgetaccounts_key);
       var bgtit = localStorage.getItem(budgetitems_key);
       var midentity = localStorage.getItem(userid_key);
       var currentbgtname = localStorage.getItem(currentbudgetname_key);
      console.log(bgtit);
      console.log(currentbgtname);
      db.collection(currentbgtname).doc(itemClicked).set({
        item: itemClicked,
        amount: itemAmount
      })
    }) // eventlistener end

               $(function(){
                 $("#bottomplaceholder").load("universal/bottom.html");
               });

               // dropdown
               const dropdownpro=document.querySelector('.bgtdrp');

               const setupDropdownbgt =(data)=>{
                var montevideo = localStorage.getItem(currentbudgetnamename_key);
                console.log("bonsoir "+montevideo);
                  document.getElementById('budhead').innerHTML="Budget name: "+montevideo;
                 let html=`
                   <select class="team wonder " id="dropitcrt"  onchange="budClick()">
                   <option>${montevideo}</option>`;
                 let htmlEnd=`
               </select>`;
                 var list='';
                 data.forEach(doc=>{
                   const drops=doc.data();
      jQuery.each(doc.data(), function (key, value) {
                if(key=="name"){
                 const li=`
                 <option id="${doc.id}">${value}</option>
                 `;
                              html+=li;
                }
      })
                 });
                 html+=htmlEnd;
               dropdownpro.innerHTML=html;
               // console.log(html);
                 // Or with jQuery

                 $(document).ready(function(){
                   $('select').formSelect();
                 });
               }
function budClick(){
  var budgetKi = document.getElementById("dropitcrt").value;
   var iden = localStorage.getItem(userid_key);
   var bgtit = localStorage.getItem(budgetitems_key);
   var budge=iden+budgetKi;
   var bugatti=iden+"BUDGETS"
     localStorage.setItem(currentbudgetname_key, budge);
       // var =event.target.id;
       console.log("!!!!"+budgetKi);
       localStorage.setItem(currentbudgetname_key, budge);
       localStorage.setItem(currentbudgetnamename_key, budgetKi);
       db.collection('USERS').doc(iden).update({
           budget: budge
         }).then(() => {
     location.reload();
         }).catch(err => {
           console.log("errrr");
           console.log(err.message);
         });
}

               const setupTotalBudge =(data)=>{
               localStorage.setItem(budgetTotal_key, 0);
                 data.forEach(doc=>{
                   const drops=doc.data();
      jQuery.each(doc.data(), function (key, value) {
                if(key=="amount"){
                  var silk = localStorage.getItem(budgetTotal_key);
                  silk=parseInt(silk)+parseInt(value);
                  localStorage.setItem(budgetTotal_key, silk);

                }
      })
                 });
                 console.log("!!!! "+localStorage.getItem(budgetTotal_key));
               document.getElementById('totalbudge').innerHTML
               ="Budget  "+addCommas(localStorage.getItem(budgetTotal_key));
               }

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


 function editItem(event){
 var ideas=event.target.id;
 console.log(ideas);
 localStorage.setItem("item clicked", ideas);

   document.getElementById('editmodal').innerHTML="Edit amount for "+ ideas;
                jQuery(document).ready(function(){
                      jQuery('.editmodal').modal();
                      jQuery(document).ready(function(){
                          jQuery('.editmodal').modal('open');
                      });
                });

              }
