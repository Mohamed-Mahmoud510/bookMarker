var siteName = document.getElementById("site-name");
var siteUrl = document.getElementById("site-url");
var sitesGroub = []
if( localStorage.getItem("sitesGroub") != null ){
    sitesGroub = JSON.parse(localStorage.getItem("sitesGroub"))
    displaySiteData(sitesGroub)
  }
function addsite() {
    var userSite = {
        name: siteName.value,
        url: siteUrl.value,
    }
    sitesGroub.push(userSite)
console.log(sitesGroub);
displaySiteData(sitesGroub)
localStorage.setItem("sitesGroub",JSON.stringify(sitesGroub))
clear()
}

function displaySiteData(list) {
   var cartona = ``
    for( i = 0 ; i < list.length ; i++ ) {
        cartona += `<tr>
        <td>${[i]}</td>
        <td>${list[i].name}</td>
        <td><a href="https://${list[i].url}" class="text-decoration-none link-light btn btn-success text-uppercase">Visit</a></td>
        <td><button class="btn btn-danger" onclick="deletesite(${i})">Remove</button></td>
    </tr>`
    }
    document.getElementById("bookmarkData").innerHTML = cartona
}

function clear() {
    siteName.value = null;
    siteUrl.value = null;
}

function deletesite(index) {
    sitesGroub.splice(index,1)
    displaySiteData(sitesGroub)
    localStorage.setItem("sitesGroub",JSON.stringify(sitesGroub))
}

