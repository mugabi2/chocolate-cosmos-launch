function setupInterface(){
  const queryString = window.location.search;
console.log(queryString);
// ?product=shirt&color=blue&newuser&size=m
const urlParams = new URLSearchParams(queryString);
const email = urlParams.get('email')
console.log(email);
const company = urlParams.get('company')
console.log(company);
const location = urlParams.get('location')
console.log(location);

document.getElementById('userCompanysu').innerHTML=company;
document.getElementById('userEmailsu').innerHTML=email;
document.getElementById('userLocation').innerHTML=location;

}
              // var up = document.getElementById('honey');
              // // up.innerHTML = url;
              // // var down = document.getElementById('GFG_DOWN');
              // function seturl(emailinvi,companyinvi,locationinvi) {
              // var url = new URL("https://chocolate-cosmos.web.app/");
              //     url.searchParams.set('one', 'val_1');
              //     url.searchParams.set('two', 'val_2');
              //     url.searchParams.set('three', 'val3');
              //     // up.innerHTML = url;
              //     console.log(url);
              //     return url;
              // }
// ttps://chocolate-cosmos.web.app/?one=val_1&two=val_2&three=val3"
