var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Remove "active-link" class from all tab links
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    // Remove "active-tab" class from all tab contents
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // Add the "active-link" class to the clicked tab
    event.currentTarget.classList.add("active-link");

    // Add the "active-tab" class to the tab content with the given id (tabname)
    document.getElementById(tabname).classList.add("active-tab");
}

// side menu

var sidemenu = document.getElementById("sidemenu");

function openmenu(){
    sidemenu.style.right = "0";
}

function closemenu(){
    sidemenu.style.right = "-200px";
}