// get acc data
db.collection("ACCOUNTS").onSnapshot(snapshot=>{
setupAccounts(snapshot.docs);
})
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
console.log(html);
}

//accounts
const accountsForm=document.querySelector('#accounts-formcrt');
const createAccBtn=document.querySelector('#createAccBtncrt');
createAccBtn.addEventListener('click', (e) =>{
  e.preventDefault();
  const accountName=accountsForm['account_namecrt'].value.toUpperCase();
    // document.querySelector('.error').innerHTML=err.message;
    // $('#progbarac').addClass("active");
  document.getElementById("progbaraccrt").style.visibility="visible";

    // Retrieve
    var dbacca = localStorage.getItem(account_key);
  db.collection(dbacca).doc(accountName).set({
      total: 0
    }).then(() => {
      // close the create modal & reset form
      // const modal = document.querySelector('#modal-accounts');
      // M.Modal.getInstance(modal).close();
      accountsForm.reset();
        document.getElementById("progbaraccrt").style.visibility="hidden";
    }).catch(err => {
      console.log(err.message);
        // document.querySelector('.error').innerHTML=err.message;
        // $('#progbar2').removeClass("active");
          document.getElementById("progbaraccrt").style.visibility="hidden";
    });

  // console.log(accountName);
})
