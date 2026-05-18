function initStorage() {
    const info = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language
    };
    localStorage.setItem('os_info', JSON.stringify(info));
    const footer = document.querySelector('footer');
    if (footer) {
        footer.innerHTML = `<p>Інформація про систему: ${localStorage.getItem('os_info')}</p>`;
    }
}

async function loadComments() {
    try {
        // Використано варіант №11 згідно з журналом групи
        const response = await fetch('https://jsonplaceholder.typicode.com/posts/11/comments');
        const comments = await response.json();
        const container = document.getElementById('comments-container');
        comments.forEach(c => {
            const div = document.createElement('div');
            div.style.borderBottom = "1px solid #ddd";
            div.style.padding = "10px 0";
            div.innerHTML = `<strong>${c.email}</strong> ${c.name}: <p>${c.body}</p>`;
            container.appendChild(div);
        });
    } catch (error) {
        console.error("Помилка завантаження:", error);
    }
}

function initFeedbackModal() {
    setTimeout(() => {
        const modal = document.getElementById('feedback-modal');
        if (modal) modal.style.display = 'block';
    }, 60000); 
}

function initTheme() {
    const btn = document.getElementById('theme-toggle');
    const body = document.body;
    const hour = new Date().getHours();
    
    if (hour < 7 || hour >= 21) {
        body.classList.add('dark-theme');
    }

    if (btn) {
        btn.onclick = () => body.classList.toggle('dark-theme');
    }
}

window.onload = () => {
    initStorage();
    loadComments();
    initFeedbackModal();
    initTheme();
};
