// project-improvements.js
// Enhancement for UX, feature tracking and profile-boosting metrics
document.addEventListener('DOMContentLoaded', function () {
    // Load per-page metrics in local storage
    const metrics = JSON.parse(localStorage.getItem('ShowtimeHubMetrics') || '{}');
    metrics.visits = (metrics.visits || 0) + 1;
    metrics.lastVisit = new Date().toISOString();
    localStorage.setItem('ShowtimeHubMetrics', JSON.stringify(metrics));

    if (window.performance && performance.timing) {
        window.addEventListener('load', function () {
            const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart;
            console.log('ShowtimeHub load time: ' + loadTime + 'ms');
            document.documentElement.style.setProperty('--page-load-time', loadTime + 'ms');
        });
    }

    // Improve anchor link focus for accessibility
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', function (e) {
            const target = document.querySelector(this.hash);
            if (target) {
                setTimeout(() => target.setAttribute('tabindex', '-1'), 0);
            }
        });
    });

    // Feature toggles: show a tiny quality badge
    const badge = document.createElement('div');
    badge.textContent = 'Improved UI + SEO';
    badge.style.position = 'fixed';
    badge.style.bottom = '12px';
    badge.style.right = '12px';
    badge.style.padding = '8px 12px';
    badge.style.background = 'rgba(14,122,254,.95)';
    badge.style.color = '#fff';
    badge.style.fontSize = '0.8rem';
    badge.style.borderRadius = '6px';
    badge.style.zIndex = 9999;
    document.body.appendChild(badge);

    setTimeout(() => badge.remove(), 6000);
});
