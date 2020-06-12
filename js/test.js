function pageload(){
    // const modal = document.querySelector('.modal-financialyear');
    // M.Modal.getInstance(modal).open();
            // alert('ok');
            //
            // $(document).ready(function(){
            // $('#mofinancialyear').modal('open');
            // });
          }

           // $(window).load(function(){
           //     $('#modal-financialyear').modal('show');
           // });

           jQuery(document).ready(function(){
                 jQuery('#mofinancialyear').modal();
                 jQuery(document).ready(function(){
                     jQuery('#mofinancialyear').modal('open');
                 });
           });
  // Or with jQuery

  // $(document).ready(function(){
  //   $('.modal-financialyear').modal();
  // });

    window.onload=pageload();
//signup form
const signupFormee=document.querySelector('#testt');
const signupBtn=document.querySelector('#signupBtn');
signupBtn.addEventListener('click', (e) =>{
  e.preventDefault();

})
var Harvard=sanitizeSlash("45/85/5");
// console.log(Harvard);
function sanitizeSlash(str){
  // console.log("sani1",str);
  str = str.replace(/[^a-z0-9,_-]/gim,"");
    return str;//.trim();
}

db.collection("USERS").where("email", "==", "a@gmail.com")
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
