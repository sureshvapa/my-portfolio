// script.js
function showSection(sectionId) {
    if (sectionId === 'home') {
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'block';
        });
    } else {
        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });
        document.getElementById(sectionId).style.display = 'block';
    }
}
document.addEventListener("DOMContentLoaded", function() {
    alert("Website is under construction! We are working on it.");
    showSection('home');
});
document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to Suresh Vapa's Portfolio!");
});
