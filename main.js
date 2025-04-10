
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")


document.getElementById('cv-btn').addEventListener('click', function() {
    alert("You have download the CV");
});

function opentab(tabname) {
for(tablink of tablinks) {
tablink.classList.remove("active-link");
}
for(tabcontent of tabcontents) {
tabcontent.classList.remove("active-tab");
}
event.currentTarget.classList.add("active-link");
document.getElementById(tabname).classList.add("active-tab");
}


var sidemenu = document.getElementById("sidemenu");


function openmenu() {
    sidemenu.style.right = "0";
}


function closemenu() {
    sidemenu.style.right = "-200px";
}

// Add click handler for download button
document.querySelector('.btn2').addEventListener('click', function(e) {
    // Optional: Add download tracking
    console.log('CV downloaded at:', new Date().toLocaleString());
    
    // For Cordova apps, add this:
    if(typeof cordova !== 'undefined') {
        e.preventDefault();
        const fileTransfer = new FileTransfer();
        const uri = encodeURI(this.href);
        fileTransfer.download(
            uri,
            cordova.file.externalRootDirectory + 'James_CV.pdf',
            () => alert('CV downloaded successfully!'),
            (error) => alert('Error: ' + error.source)
        );
    }
});



