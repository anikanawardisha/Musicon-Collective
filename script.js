const menuToggle = document.querySelector('#menuToggle');
const mainNav = document.querySelector('#mainNav');
menuToggle.addEventListener('click', () => { const open = mainNav.classList.toggle('open'); menuToggle.setAttribute('aria-expanded', String(open)); menuToggle.textContent = open ? '×' : '☰'; });
document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => { mainNav.classList.remove('open'); menuToggle.setAttribute('aria-expanded', 'false'); menuToggle.textContent = '☰'; document.querySelectorAll('.nav-link').forEach(x => x.classList.remove('active')); link.classList.add('active'); }));
const bookingDialog = document.querySelector('#bookingDialog');
const bookingForm = document.querySelector('#bookingForm');
const bookingFeedback = document.querySelector('#bookingFeedback');
document.querySelectorAll('[data-open-booking],[data-room]').forEach(button => button.addEventListener('click', () => { bookingForm.reset(); bookingFeedback.textContent = ''; const room = button.dataset.room; if (room) document.querySelector('#roomSelect').value = room; bookingDialog.showModal(); }));
const today = new Date(); const localDate = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().slice(0, 10); document.querySelector('#bookingDate').min = localDate;
bookingForm.addEventListener('submit', event => { event.preventDefault(); if (!bookingForm.reportValidity()) return; bookingFeedback.textContent = 'Demo: Din booking er vist som bekræftet. Ingen reservation er oprettet.'; });
const infoDialog = document.querySelector('#infoDialog');
document.querySelectorAll('[data-event]').forEach(button => button.addEventListener('click', () => { document.querySelector('#infoTitle').textContent = button.dataset.event; document.querySelector('#infoText').textContent = 'Dette er et eksempelarrangement til Musicon Collectives fiktive hjemmeside. Her kan I senere tilføje program, pris, pladser og tilmelding.'; infoDialog.showModal(); }));
document.querySelector('#shareDemo').addEventListener('click', () => { document.querySelector('#infoTitle').textContent = 'ShareBox – sådan fungerer det'; document.querySelector('#infoText').textContent = '1. Vælg et værktøj. 2. Scan QR-koden på boksen. 3. Registrér udlån. 4. Aflever værktøjet igen. Dette er en demo uden reel QR-scanning eller udlån.'; infoDialog.showModal(); });
document.querySelectorAll('[data-close]').forEach(button => button.addEventListener('click', () => button.closest('dialog').close()));
document.querySelectorAll('.filter').forEach(button => button.addEventListener('click', () => { document.querySelectorAll('.filter').forEach(x => x.classList.remove('active')); button.classList.add('active'); document.querySelectorAll('.event-card').forEach(card => card.hidden = button.dataset.filter !== 'alle' && card.dataset.category !== button.dataset.filter); }));
document.querySelector('#contactForm').addEventListener('submit', event => { event.preventDefault(); document.querySelector('#contactFeedback').textContent = 'Tak! Dette er en demo, så din besked er ikke sendt eller gemt.'; event.target.reset(); });
document.querySelector('#year').textContent = new Date().getFullYear();



// Register service worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker.register("./service-worker.js")
            .then(() => {
                console.log("Musicon app is ready!");
            })
            .catch(error => {
                console.log("Service worker error:", error);
            });
    });
}
