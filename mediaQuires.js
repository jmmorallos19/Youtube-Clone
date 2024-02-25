const yourChannel = document.getElementById("yourChannel");

function checkMediaQuery() {
    if (window.matchMedia("(max-width: 1313px)").matches) {
        yourChannel.textContent = "You"
    } 
}

checkMediaQuery();