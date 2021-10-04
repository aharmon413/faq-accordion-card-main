const accordions = document.getElementsByClassName('accordion-title');

function openAccordion(icon, panel) {
    icon.style.transform = 'rotate(180deg)';
    panel.style.display = 'block';
    panel.style.maxHeight = panel.scrollHeight + "px";
}

function closeAccordion(icon, panel) {
    icon.style.transform = null;
    panel.style.display = 'none';
    panel.style.maxHeight = null;
}

function hideAll() {
    for (let accordion of accordions) {
        accordion.classList.remove('active');
        closeAccordion(accordion.querySelector('img'), accordion.nextElementSibling);
    }
}

for (let accordion of accordions) {
    accordion.addEventListener("click", function() {
        let icon = accordion.querySelector('img');
        let panel = accordion.nextElementSibling;
        if (panel.style.maxHeight) {
            closeAccordion(icon, panel);
            accordion.setAttribute('aria-expanded', 'false');
        } else {
            hideAll();
            openAccordion(icon, panel);
            accordion.setAttribute('aria-expanded', 'true');
        }
        accordion.classList.toggle('active');
    });
}