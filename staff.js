const staffLoginForm = document.getElementById('staffLoginForm');
const loginForm = document.getElementById('loginForm');
const staffPanel = document.getElementById('staffPanel');
const loginError = document.getElementById('loginError');
const logoutBtn = document.getElementById('logoutBtn');
const announcementForm = document.getElementById('announcementForm');
const announcementInput = document.getElementById('announcementInput');
const reportsList = document.getElementById('reportsList');

const CORRECT_PASSWORD = '0923';

staffLoginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const password = document.getElementById('staffPassword').value;
    
    if (password === CORRECT_PASSWORD) {
        loginForm.style.display = 'none';
        staffPanel.style.display = 'block';
        loadReports();
    } else {
        loginError.style.display = 'block';
        setTimeout(() => {
            loginError.style.display = 'none';
        }, 3000);
    }
});

logoutBtn.addEventListener('click', () => {
    staffPanel.style.display = 'none';
    loginForm.style.display = 'block';
    document.getElementById('staffPassword').value = '';
});

function loadReports() {
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    
    if (reports.length === 0) {
        reportsList.innerHTML = '<p class="no-reports">No reports submitted yet.</p>';
        return;
    }
    
    reportsList.innerHTML = reports.map((report, index) => `
        <div class="report-item">
            <div class="report-header">
                <span class="report-reporter">Reporter: ${report.reporterName}</span>
                <span class="report-date">${report.date}</span>
            </div>
            <div class="report-player">Reported: ${report.reportedPlayer}</div>
            <div class="report-reason">Reason: ${report.reason}</div>
            <div class="report-details">${report.details}</div>
        </div>
    `).join('');
}

announcementForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const newAnnouncement = announcementInput.value;
    
    localStorage.setItem('announcement', newAnnouncement);
    document.getElementById('announcementText').textContent = newAnnouncement;
    
    const btn = announcementForm.querySelector('.submit-btn');
    const originalText = btn.textContent;
    btn.textContent = 'Updated!';
    btn.style.background = '#4caf50';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
});

const savedAnnouncement = localStorage.getItem('announcement');
if (savedAnnouncement) {
    announcementInput.value = savedAnnouncement;
}
