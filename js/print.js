var fuel=0,
zero=0,one=1,two=2,three=3,four=4;
var identity;
var userid_key="userid";
var account_key="account";
var items_key="items";
var suppliers_key="suppliers";
var transactions_key="transactions";
var company_key="company";
var surname_key="surname";
var firstname_key="firstname";
var phone_key="phone";
var email_key="email";
var logo_key="imagelogo";
var changedlogo_key="changedlogo";

  var change = localStorage.getItem(changedlogo_key);
  if(change==one){
    var image64 = localStorage.getItem(logo_key);
    // console.log("6464"+image64);
  var output = document.getElementById('imagebox');
    output.src=image64;
  }

        var el_down = document.getElementById("companynameid");
        setext();
        function setext() {
            var inpu = localStorage.getItem(company_key);
            console.log("dfg",inpu);

            el_down.innerHTML =inpu;
        }

var queryString = decodeURIComponent(window.location.search); //parsing
queryString = queryString.substring(1);
var queries = queryString.split("&");
for (var i = 0; i < queries.length; i++)
{
// document.write(queries[i] + "<br>");
var stringer=queries[i];
var stringers=stringer.split("=");
for (var i = 0; i < stringers.length; i++)
{
identity=stringers[1];
}
}
identity=identity.substring(0, identity.length - 1);

  // Retrieve
  var trasa = localStorage.getItem(transactions_key);
// GETTING
var total,icamount,icitem,icsupplier,icdate;
const docRef = db.collection(trasa).doc(identity);
docRef.get().then(doc => {
         if (doc.exists) {
             // console.log('Document data:', doc.data());
jQuery.each(doc.data(), function (key, value) {
if(key=="amount"){
icamount=value;
console.log("here:",icamount);
}else if (key=="item") {
icitem=value;
console.log("here:",icitem);
}else if (key=="supplier") {
icsupplier=value;
console.log("here:",icsupplier);
}else if (key=="date") {
icdate=value;
console.log("here:",icdate);
}
             })
             document.getElementById("init").value = icitem;
             document.getElementById("insup").value = icsupplier;
             document.getElementById("indate").value = icdate;
             document.getElementById("inam").value = icamount;
         } else {
             // doc.data() will be undefined in this case
             console.error('Please check your collection and document name in the [firestore] shortcode!');
         }
     }).catch(error => {
         console.error('Please check your collection and document name in the [firestore] shortcode!', error);
     });
// console.log("idedn",identity);
