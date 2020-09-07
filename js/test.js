var xreference;
var ocpKey="1deae1372c5c45ed946ab8d1bde2a5d5";

// 11111111111111111111111
// var settings = {
//   "url": "https://www.uuidgenerator.net/api/version4",
//   "method": "GET",
//   "timeout": 0,
// };
//
// $.ajax(settings).done(function (response) {
//   console.log(response);
//     document.getElementById('outtext').innerHTML=response;
//     xreference=response;
// });
    // 222222222222222222
// var settings = {
// "url": "https://sandbox.momodeveloper.mtn.com/v1_0/apiuser",
// "method": "POST",
// "timeout": 0,
// "headers": {
// "X-Reference-Id": "bdb68ad9-0da6-4eee-95d1-3ffa14e259bb",
// "Ocp-Apim-Subscription-Key": "1deae1372c5c45ed946ab8d1bde2a5d5",
// "Content-Type": "application/json"
// },
// "data": JSON.stringify({"providerCallbackHost":"https://webhook.site/a9cf8d07-003b-4ae2-ad7c-6c97eec4d460"}),
// };
//
// $.ajax(settings).done(function (response) {
// console.log("api user"+response);
// });
// var requestOptions = {
//   method: 'GET',
//   redirect: 'follow'
// };
//111111111111111111111111
fetch("https://www.uuidgenerator.net/api/version4", requestOptions)
  .then(response => response.text())
  .then(
    result => console.log(result)
  )
  .catch(error => console.log('error', error));
// 222222222222222222
var myHeaders = new Headers();
myHeaders.append("X-Reference-Id", "4d2abe6a-06fe-4782-a181-9a1a9e96bfa9");
myHeaders.append("Ocp-Apim-Subscription-Key", "1deae1372c5c45ed946ab8d1bde2a5d5");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({"providerCallbackHost":"webhook.site/a9cf8d07-003b-4ae2-ad7c-6c97eec4d460"});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://sandbox.momodeveloper.mtn.com/v1_0/apiuser", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

// function pageload(){
//     // const modal = document.querySelector('.modal-financialyear');
//     // M.Modal.getInstance(modal).open();
//             // alert('ok');
//             //
//             // $(document).ready(function(){
//             // $('#mofinancialyear').modal('open');
//             // });
//           }
//
//            // $(window).load(function(){
//            //     $('#modal-financialyear').modal('show');
//            // });
//
//            jQuery(document).ready(function(){
//                  jQuery('#mofinancialyear').modal();
//                  jQuery(document).ready(function(){
//                      jQuery('#mofinancialyear').modal('open');
//                  });
//            });
//   // Or with jQuery
//
//   // $(document).ready(function(){
//   //   $('.modal-financialyear').modal();
//   // });
//
//     window.onload=pageload();
// //signup form
// const signupFormee=document.querySelector('#testt');
// const signupBtn=document.querySelector('#signupBtn');
// signupBtn.addEventListener('click', (e) =>{
//   e.preventDefault();
//
// })
// var Harvard=sanitizeSlash("45/85/5");
// // console.log(Harvard);
// function sanitizeSlash(str){
//   // console.log("sani1",str);
//   str = str.replace(/[^a-z0-9,_-]/gim,"");
//     return str;//.trim();
// }
//
// db.collection("USERS").where("email", "==", "a@gmail.com")
//     .get()
//     .then(function(querySnapshot) {
//         querySnapshot.forEach(function(doc) {
//             // doc.data() is never undefined for query doc snapshots
//             console.log(doc.id, " => ", doc.data());
//         });
//     })
//     .catch(function(error) {
//         console.log("Error getting documents: ", error);
//     });
