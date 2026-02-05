function showToast(message, icon = 'fa-info-circle') {
    // Проверяем, есть ли контейнер, если нет — создаем
    let container = document.getElementById('notification-container');
    if (!container) {
        container = document.createElement('div');
        container.id = 'notification-container';
        document.body.appendChild(container);
    }

    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `
        <i class="fas ${icon}"></i>
        <span>${message}</span>
    `;
    
    container.appendChild(toast);

    // Авто-удаление
    setTimeout(() => {
        toast.classList.add('hide');
        setTimeout(() => toast.remove(), 400);
    }, 4000);
}

// Перехватываем стандартный alert, чтобы он не вылезал
window.alert = function(msg) {
    showToast(msg, 'fa-exclamation-circle');
};