// get acc data
var account_key="account";
var items_key="items";
var suppliers_key="suppliers";
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
console.log("here"+list);
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
            <li class="entry blue lighten-4">
            <div class=" valign-wrapper left">
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
data.forEach(doc=>{
  const acc=doc.data();
  list+=doc.id+" "+"<br/>";
});
// console.log("list"+list);
// data.forEach(doc=>{
//   const acc=doc.data();
  const li=`
  <li>
  <h6 class="center">SUPPLIERS</h6>
  <div class="white"><span>${list}</span></div>
  </li>
  `;
  html+=li;
  // console.log(doc.id,acc);
// });
suppliersList.innerHTML=html;
// console.log("here"+html);
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
      db.collection(dbitacc).doc(itAcc).update({
             [itName]: 0
           })
          // Retrieve
          var dbit = localStorage.getItem(items_key);
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
  db.collection(dbsu).doc(supName).set({
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

function deleteItem(event){
  var ideas=event.target.id;
  var namesir= ideas.substring(0, ideas.length - 1);
  var txt;
  if (confirm("Do you want to delete "+namesir+" from your items!")) {
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
