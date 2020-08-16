// get acc data
var account_key="account";
var items_key="items";
var suppliers_key="suppliers";
var tutorial_key="tutorial";
var originalAccount_key="original account";
var originalItem_key="original item";
var originalSupplier_key="original supplier";
var dbacc = localStorage.getItem(account_key);
var dbit = localStorage.getItem(items_key);
var dbsup = localStorage.getItem(suppliers_key);
console.log("itit"+dbacc);
console.log("itit"+dbit);
console.log("itit"+dbsup);
db.collection(dbacc).onSnapshot(snapshot=>{
setupAccounts(snapshot.docs);
setupDropdownitcrt(snapshot.docs);
})
db.collection(dbit).onSnapshot(snapshot=>{
setupItems(snapshot.docs);
})
db.collection(dbsup).onSnapshot(snapshot=>{
setupSuppliers(snapshot.docs);
})
  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
// items
const accountList=document.querySelector('.guidesa');
const setupAccounts =(data)=>{
  var counter=0,dog='';
  let html='';
  var list=``;
  var longnot=``;
  var compter= data.length;
  var y=0,k=0;
  var liste;
  var coname="s t.#!@#$%^&*(ar";
  var identity,identitye,identityd;
  var prints=[];
  var deletes=[];
  var identities=[];

  data.forEach(doc=>{
    const acc=doc.data();
    list+=doc.id+" "+"<br/>";
  });

  data.forEach(doc=>{
  //   const acc=doc.data();
    k++;
    identity=doc.id;
    identitye=doc.id+'e';
    identityd=doc.id+'d';
               // })
          y++;
          prints.push(identitye);
          deletes.push(identityd);
          identities.push(identity);

  var cat=doc.id;
     li=`
     <li>
    <div id="${doc.id}" class="black-text center white headsup collapsible-header">
    ${doc.id}
    <i id="${identitye}" onclick="editAccount(event)" class="center iconprint small material-icons right histicon">edit</i>
    <i id="${identityd}" onclick="deleteAccount(event)" class=" icondelete small material-icons right histicon">delete_forever</i>
    </div>
    `;

        localStorage.setItem(cat, li);
    var accsong = localStorage.getItem(items_key);
    var boutiquedt=localStorage.getItem(cat);
    // console.log("555555"+boutiquedt);
    // console.log("logogog; "+doc.id);
    db.collection(accsong).where("account", "==", doc.id)
        .get()
        .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
                console.log("wowowo: "+doc.id);
                var boutique=localStorage.getItem(cat);
                    // console.log("7777777: "+boutique);
                var stateme=`<div class="headsup collapsible-body white"><span>${doc.id}</span></div>`;
                boutique=boutique+stateme;
                localStorage.setItem(cat, boutique);
                var boutiquedt=localStorage.getItem(cat);
                // console.log(cat+"44444"+boutiquedt);
            });
            counter++;
            // console.log("!!!!!"+counter);
            var boutiquegt=localStorage.getItem(cat);
            boutiquegt=boutiquegt+`</li>`
            longnot=longnot+boutiquegt;
            console.log("after"+longnot);
            if (counter==compter) {
            accountList.innerHTML=longnot;
            }
        })
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        });
    li=li+`</li>`
    html+=li;
    // console.log("count:"+counter);
    // console.log("1111"+dogList);
  });
// accountList.innerHTML=html;
// console.log("******"+longnot);
}

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
            <i id="${identityd}" onclick="deleteItem(event)" class=" icondelete small material-icons right histicon">delete_forever</i>
            <i id="${identitye}" onclick="editItemAdapter(event)" class="center iconprint small material-icons right histicon">edit</i>
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

// suppliers
const suppliersList=document.querySelector('.guidess');
const setupSuppliers =(data)=>{
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
  // const docReftit = db.collection(dbit).doc(doc.id);
  list+=doc.id+" "+"<br/>";
    k++;
    identity=doc.id;
    identitye=doc.id+'e';
    identityd=doc.id+'d';
               // })
          y++;
          prints.push(identitye);
          deletes.push(identityd);
          identities.push(identity);
               li=`
            <li class="itemdiv entry black-text">
            <div class=" valign-wrapper ">
            <div class="divlist">${doc.id}</div>
            <div class="text-right divicon">
            <i id="${identityd}" onclick="deleteSupplier(event)" class=" icondelete small material-icons right histicon">delete_forever</i>
            <i id="${identitye}" onclick="editsupplierAdapter(event)" class="center iconprint small material-icons right histicon">edit</i>
            </div>
            </div>
            </li>
          `;
          html+=li;
});
suppliersList.innerHTML=html;
// console.log("here"+html);
// console.log("hereRERE"+prints);
}
// dropdown
const dropdownpro=document.querySelector('.crtitdrp');

const setupDropdownitcrt =(data)=>{
  let html=`
    <select class="team wonder " id="dropitcrt">
    <option>Choose Item's Account</option>`;
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
const dropdownproedt=document.querySelector('.crtitdrp');

const setupDropdownitcrtedt =(data,setacc)=>{
  let html=`
    <select class="team wonder " id="dropitcrt">
    <option>${setacc}</option>`;
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
//accounts
const accountsFormcrt=document.querySelector('#accounts-formcrt');
const createAccBtncrt=document.querySelector('#createAccBtncrt');
createAccBtncrt.addEventListener('click', (e) =>{
  e.preventDefault();
  const accountName=accountsFormcrt['account_namecrt'].value.toUpperCase();
    // document.querySelector('.error').innerHTML=err.message;
    // $('#progbarac').addClass("active");
  document.getElementById("progbaraccrt").style.visibility="visible";

  const buttonv=accountsFormcrt['createAccBtncrt'].value;
  console.log("999999 "+buttonv);
  if (buttonv=="Create Account") {
    // Retrieve
    var dbacca = localStorage.getItem(account_key);
  db.collection(dbacca).doc(accountName).set({
      total: 0
    }).then(() => {
      // close the create modal & reset form
      accountsFormcrt.reset();
        document.getElementById("progbaraccrt").style.visibility="hidden";
    }).catch(err => {
      console.log(err.message);
        // document.querySelector('.error').innerHTML=err.message;
        // $('#progbar2').removeClass("active");
          document.getElementById("progbaraccrt").style.visibility="hidden";
    });
}else {
  // Retrieve
  var dbcar = localStorage.getItem(account_key);
  var accOriginal = localStorage.getItem(originalAccount_key);
  const docRef = db.collection(dbcar).doc(accOriginal);
  docRef.get().then(doc => {
             if (doc.exists) {
console.log("8888888"+doc.data());
console.log("77777777"+accOriginal);
db.collection(dbcar).doc(accountName).set(doc.data()).then(function() {
    console.log("Document successfully written!");
});
// update itemsList
jQuery.each(doc.data(), function (key, value) {
  console.log("5555555555"+key);
  // Retrieve
  var dbcart = localStorage.getItem(items_key);
const docRef11 = db.collection(dbcart).doc(key);
docRef11.update({
  account: accountName
})
             })
// delete original
db.collection(dbcar).doc(accOriginal).delete().then(function() {
    console.log("Document successfully deleted!");
}).catch(function(error) {
    console.error("Error removing document: ", error);
});

             } else {
                 // doc.data() will be undefined in this case
                 console.error('Please check your collection and document name in the [firestore] shortcode!');
             }
         }).catch(error => {
             console.error('Please check your collection and document name in the [firestore] shortcode!', error);
         });
         location.reload();
}
  // console.log(accountName);
})

//items
const itForm=document.querySelector('#items-formcrt');
const createItBtn=document.querySelector('#createItcrt');
createItBtn.addEventListener('click', (e) =>{
  e.preventDefault();
    document.getElementById("progbaritcrt").style.visibility="visible";
  const itName=itForm['item_namecrt'].value;
  const itAcc=itForm['dropitcrt'].value;

      // Retrieve
      var dbitacc = localStorage.getItem(account_key);
      var dbit = localStorage.getItem(items_key);

        const buttonv=accountsFormcrt['createItcrt'].value;
        console.log("999999 "+buttonv);
        if (buttonv=="Create Item") {

      db.collection(dbitacc).doc(itAcc).update({
             [itName]: 0
           })
  db.collection(dbit).doc(itName).set({
      total: 0,
      account: itAcc
    }).then(() => {
      // close the create modal & reset form
        document.getElementById("progbaritcrt").style.visibility="hidden";
      itForm.reset();
    }).catch(err => {
      console.log(err.message);
        document.getElementById("progbaritcrt").style.visibility="hidden";
    });
  }else {

  }
})
//suppliers
const supForm=document.querySelector('#suppliers-formcrt');
const createsupBtn=document.querySelector('#regsupcrt');
createsupBtn.addEventListener('click', (e) =>{
  e.preventDefault();
    document.getElementById("progbarsupcrt").style.visibility="visible";
  const supName=supForm['supplier_namecrt'].value;
  const supPhone=supForm['supplier_phonecrt'].value;

    // Retrieve
    var dbsu = localStorage.getItem(suppliers_key);
  db.collection(dbsu).doc(supName).update({
      name:supName,
      total: 0,
      phone_number:supPhone
    }).then(() => {
      // close the create modal & reset form
        document.getElementById("progbarsupcrt").style.visibility="hidden";
      supForm.reset();
    }).catch(err => {
      console.log(err.message);
        document.getElementById("progbarsupcrt").style.visibility="hidden";
    });

  // console.log(supName);
})
function editItemAdapter(e){
var dropacc=editItem(e);
  // WAIT FOR THE PROMISE
  const checkIfDonede = () => {
    dropacc.then(ok => {
      dropacc=ok;
        console.log("wala",ok)
        console.log("wala",dropacc);

        db.collection(dbacc).onSnapshot(snapshot=>{
          console.log(snapshot.docs);
        setupDropdownitcrtedt(snapshot.docs,dropacc);
        })
      })
      .catch(err => {
        console.error(error)
      })

  }
  checkIfDonede();
}
async function editItem(event){
  var ideas=event.target.id;
  var returnee;
  var namesir= ideas.substring(0, ideas.length - 1);
  console.log("ididid: "+ namesir);
  // document.getElementById('item_namecrtlbl').innerHTML=namesir;
    document.getElementById('item_namecrt').setAttribute("value",namesir);
  document.getElementById("item_namecrt").focus();
  document.getElementById("createItcrt").innerHTML ="Edit "+namesir;
    document.getElementById('createItcrt').setAttribute("value","Edit "+namesir);
  localStorage.setItem(originalItem_key, namesir);

    // Retrieve
    var dbtem = localStorage.getItem(items_key);
const docRef = db.collection(dbtem).doc(namesir);
var somename =await docRef.get().then(doc => {
           if (doc.exists) {
               // console.log('Document data:', doc.data());
  jQuery.each(doc.data(), function (key, value) {
  if(key=="account"){
  returnee=value;
  }
                      })
                  } else {
                      // doc.data() will be undefined in this case
                      console.error('Please check your collection and document name in the [firestore] shortcode!');
                  }
              }).catch(error => {
                  console.error('Please check your collection and document name in the [firestore] shortcode!', error);
              });
return returnee;
}

function editsupplierAdapter(e){
var dropacc=editSupplier(e);
  // WAIT FOR THE PROMISE
  const checkIfDonede = () => {
    dropacc.then(ok => {
      dropacc=ok;
        console.log("wala",ok)
        console.log("wala",dropacc);
          document.getElementById('supplier_phonecrt').setAttribute("value",dropacc);
          document.getElementById("supplier_phonecrt").focus();
      })
      .catch(err => {
        console.error(error)
      })

  }
  checkIfDonede();
}
async function editSupplier(event){
  var ideas=event.target.id;
  var returnee;
  var namesir= ideas.substring(0, ideas.length - 1);
  console.log("ididid: "+ namesir);
  // document.getElementById('item_namecrtlbl').innerHTML=namesir;
    document.getElementById('supplier_namecrt').setAttribute("value",namesir);
  document.getElementById("supplier_namecrt").focus();

    // Retrieve
    var dbtem = localStorage.getItem(suppliers_key);
const docRef = db.collection(dbtem).doc(namesir);
var somename =await docRef.get().then(doc => {
           if (doc.exists) {
               // console.log('Document data:', doc.data());
  jQuery.each(doc.data(), function (key, value) {
  if(key=="phone_number"){
  returnee=value;
  }
                      })
                  } else {
                      // doc.data() will be undefined in this case
                      console.error('Please check your collection and document name in the [firestore] shortcode!');
                  }
              }).catch(error => {
                  console.error('Please check your collection and document name in the [firestore] shortcode!', error);
              });
return returnee;
}
function editAccount(event){
  var ideas=event.target.id;
  var returnee;
  var namesir= ideas.substring(0, ideas.length - 1);
  console.log("ididid: "+ namesir);
  // document.getElementById('item_namecrtlbl').innerHTML=namesir;
    document.getElementById('account_namecrt').setAttribute("value",namesir);
  document.getElementById("account_namecrt").focus();
  document.getElementById("createAccBtncrt").innerHTML ="Edit "+namesir;
    document.getElementById('createAccBtncrt').setAttribute("value","Edit "+namesir);
  localStorage.setItem(originalAccount_key, namesir);
return returnee;
}

function deleteItem(event){
  var ideas=event.target.id;
  var namesir= ideas.substring(0, ideas.length - 1);
  var txt;
  if (confirm("Do you want to delete "+namesir+" from your Items!")) {
  console.log(namesir+" deleted");
    // Retrieve
    var dbtra = localStorage.getItem(items_key);
  db.collection(dbtra).doc(namesir).delete().then(function() {
      console.log(namesir+"Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }
}
function deleteSupplier(event){
  var ideas=event.target.id;
  var namesir= ideas.substring(0, ideas.length - 1);
  var txt;
  if (confirm("Do you want to delete "+namesir+" from your Suppliers!")) {
  console.log(namesir+" deleted");
    // Retrieve
    var dbtra = localStorage.getItem(suppliers_key);
    console.log("****"+dbtra);
  db.collection(dbtra).doc(namesir).delete().then(function() {
      console.log(namesir+"Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }
}
function deleteAccount(event){
  var ideas=event.target.id;
  var namesir= ideas.substring(0, ideas.length - 1);
  var txt;
  if (confirm("Do you want to delete "+namesir+" from your Accounts!")) {
  console.log(namesir+" deleted");
    // Retrieve
    var dbtra = localStorage.getItem(account_key);
  db.collection(dbtra).doc(namesir).delete().then(function() {
      console.log(namesir+"Document successfully deleted!");
  }).catch(function(error) {
      console.error("Error removing document: ", error);
  });
  }
}

var tour = new Tour({
  steps: [
  {
    element: "#account_namecrt",
    title: "STEP 1",
    content: "Lets create our 1st account. Give it name: UTILITY"
  },
  {
    element: "#createAccBtncrt",
    title: "STEP 1",
    content: "Finalise with this button"
  },
  {
    element: "#item_namecrt",
    title: "STEP 2",
    content: "Lets create our 1st item. Give it name: ELECTRICITY"
  },
  {
    element: ".crtitdrp",
    title: "STEP 2",
    content: "Select Account where this item belongs"
  },
  {
    element: "#createItcrt",
    title: "STEP 2",
    content: "Finalise with this button"
  },
  {
    element: "#supplier_namecrt",
    title: "STEP 3",
    content: "Lets create our 1st Supplier. Name him: UMEME"
  },
  {
    element: "#supplier_phonecrt",
    title: "STEP 3",
    content: "Phone contact is Optional."
  },
  {
    element: "#regsupcrt",
    title: "STEP 3",
    content: "Finalise with this button"
}
,
{
  element: "#transactbut",
  title: "RECORD A TRANSACTION",
  content: "Choose an item.",
  path:'index.html'
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
// tour.start();
}

        // localStorage.setItem("login", 0);
var status = localStorage.getItem("login");
if (status=="0") {
localStorage.setItem(tutorial_key, 1);
               jQuery(document).ready(function(){
                     jQuery('#helpmodal').modal();
                     jQuery(document).ready(function(){
                         jQuery('#helpmodal').modal('open');
                     });
               });
           }

           // bring finyear modal
           const tutbtn=document.querySelector('#tutbtn');
           tutbtn.addEventListener('click', (e) =>{
             e.preventDefault();
              const modal = document.querySelector('#helpmodal');
                // document.getElementById("progbarfy").style.visibility="hidden";
              M.Modal.getInstance(modal).close();
              tour.start();
           })
