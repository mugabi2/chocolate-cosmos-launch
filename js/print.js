var identity;
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

// GETTING
var total,icamount,icitem,icsupplier,icdate;
const docRef = db.collection('TRANSACTIONS').doc(identity);
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
