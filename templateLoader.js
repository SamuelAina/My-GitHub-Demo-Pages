function loadTemplate(templateName, targetElementId) {
    fetch(templateName)
        .then((response) => response.text())
        .then((html) => {
            document.getElementById(targetElementId).innerHTML = html;
        })
        .catch((error) => {
            console.warn('Something went wrong while loading the template:', error);
        });
}



window.addEventListener('DOMContentLoaded', () => {
    loadTemplate('header.html', 'header');
    //loadTemplate('footer.html', 'footer');
});



window.onload = function(){
    closeMenu();
}

function openMenu() {
    document.getElementById("menu").style.left = "0";
    document.getElementById("menu").style.width ="200px";
    document.getElementById("menu").style.display="block";
}

function closeMenu() {
    document.getElementById("menu").style.width = "200px";
    document.getElementById("menu").style.left = "200px";
    document.getElementById("menu").style.display="none"
}
