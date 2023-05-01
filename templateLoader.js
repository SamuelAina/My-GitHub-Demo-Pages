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
    loadTemplate('footer.html', 'footer');
});
