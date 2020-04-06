// listen for authentication
auth.onAuthStateChanged(user=>{
  if(user){
  console.log("user logged in",user);
}else {
  document.location.replace("index.html");
  console.log("loged out");
}
})
// get acc data
db.collection('ACCOUNTS').onSnapshot(snapshot=>{
  setupAccounts(snapshot.docs);
})
const accountList=document.querySelector('.guides');

const setupAccounts =(data)=>{
  let html='';
  var list='';
  data.forEach(doc=>{
    const acc=doc.data();
    list+=doc.id+" "+"<br/>";
  });
  console.log("list"+list);
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

  console.log(accountName);
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

  console.log(supName);
})

// log out
const logoutBtn=document.querySelector('#logout');
logoutBtn.addEventListener('click', (e) =>{
  e.preventDefault();
    auth.signOut();
      document.location.replace("index.html");
})

const accountList=document.querySelector('.guides');

const setupAccounts =(data)=>{
  let html='';
  var list='';
  data.forEach(doc=>{
    const acc=doc.data();
    list+=doc.id+" "+"<br/>";
  });
  console.log("list"+list);
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
// dropdown
$('.dropdown-trigger').dropdown();
