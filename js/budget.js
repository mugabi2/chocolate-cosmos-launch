
  // get acc data
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
var currentbudgetname_key="current budget name";
var dbacc = localStorage.getItem(account_key);
var dbit = localStorage.getItem(items_key);
var dbsup = localStorage.getItem(suppliers_key);
// var db = localStorage.getItem(suppliers_key);

 var currentbgt = localStorage.getItem(currentbudgetname_key);
 var bgtitup = localStorage.getItem(budgetitems_key);

db.collection(dbit).onSnapshot(snapshot=>{
window.localStorage.setItem(currentItems_key, snapshot.docs);
setupItems(snapshot.docs);
})
db.collection(dbit).onSnapshot(snapshot=>{
setupBudget(snapshot.docs);
})
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
      var bgtacc = localStorage.getItem(budgetaccounts_key);
      var bgtit = localStorage.getItem(budgetitems_key);
      console.log(bgtit);
      console.log(bgtacc);
      db.collection(bgtacc).doc(budgetN).set({

      })
      db.collection(bgtit).doc(budgetN).set({

      })
      localStorage.setItem(budgetitems_key, "32BUDGETIEMS2020");
      localStorage.setItem(budgetaccounts_key, "32BUDGETACCOUNTS2020");
      localStorage.setItem(currentbudgetname_key, budgetN);
    }) // eventlistener end

         const addbgtBtn=document.querySelector('#addToBudget');
         addbgtBtn.addEventListener('click', (e) =>{
           e.preventDefault();
     const itemAmount=document.getElementById("budgetAmount").value;
      var itemClicked = localStorage.getItem("item clicked");
       var bgtacc = localStorage.getItem(budgetaccounts_key);
       var bgtit = localStorage.getItem(budgetitems_key);
       var currentbgtname = localStorage.getItem(currentbudgetname_key);
      console.log(bgtit);
      console.log(currentbgtname);
      db.collection(bgtit).doc(currentbgtname).set({
        [itemClicked]: itemAmount
      })
    }) // eventlistener end

               $(function(){
                 $("#bottomplaceholder").load("universal/bottom.html");
               });
