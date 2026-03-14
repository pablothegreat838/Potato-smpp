const reportForm = document.getElementById('reportForm');
const successMessage = document.getElementById('successMessage');

reportForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = {
        reporterName: document.getElementById('reporterName').value,
        reportedPlayer: document.getElementById('reportedPlayer').value,
        reason: document.getElementById('reason').value,
        details: document.getElementById('details').value,
        date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        })
    };
    
    const reports = JSON.parse(localStorage.getItem('reports') || '[]');
    reports.push(formData);
    localStorage.setItem('reports', JSON.stringify(reports));
    
    reportForm.style.display = 'none';
    successMessage.style.display = 'block';
});
