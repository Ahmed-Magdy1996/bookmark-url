

var siteNameInput = document.getElementById('siteName');
var siteUrlInput = document.getElementById('siteUrl');
var table = document.querySelector('.table');

function addSite() {
    var site = {
        address: siteNameInput.value,
        url: siteUrlInput.value,
    };

    if (!site.url.startsWith('http://')) { 
        site.url = "https://" + siteUrlInput.value       
    }
    displaySites(site);
    clearSite();
}

function displaySites(site) {
    

     
        var row = table.insertRow();
        var indexCell = row.insertCell(0);
        var siteCell = row.insertCell(1);
        var visitCell = row.insertCell(2);
        var deleteCell = row.insertCell(3);

        indexCell.textContent = row.rowIndex
        siteCell.textContent = site.address;
        visitCell.innerHTML = `<a href="${site.url}" target="_blank">Visit</a>`;
        deleteCell.innerHTML = `<button onclick="deleteSite(this)" class="btn btn-danger btn-sm">Delete</button>`;
    
   

   
    
}

function clearSite() {
    siteNameInput.value = '';
    siteUrlInput.value = '';
}

function deleteSite(button) {
    console.log('deleteSite was called');
    var row = button.closest('tr')
    table.deleteRow(row.rowIndex)
}



function kladeus(name) {
    console.log(name + "was called");
}
kladeus("ahmed");