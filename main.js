const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMenu = document.querySelector('.nav-menu');

mobileMenuBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

const announcementBanner = document.getElementById('announcementBanner');
const announcementText = document.getElementById('announcementText');
const closeAnnouncement = document.getElementById('closeAnnouncement');

const savedAnnouncement = localStorage.getItem('announcement');
if (savedAnnouncement) {
    announcementText.textContent = savedAnnouncement;
}

closeAnnouncement.addEventListener('click', () => {
    announcementBanner.style.display = 'none';
    localStorage.setItem('bannerClosed', 'true');
});

if (localStorage.getItem('bannerClosed') === 'true') {
    announcementBanner.style.display = 'none';
}
