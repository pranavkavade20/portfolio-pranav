function showExp(id, btn) {
    document.querySelectorAll('.exp-content-card').forEach(el => el.classList.remove('active'));
    document.querySelectorAll('.exp-tab-btn').forEach(el => el.classList.remove('active'));

    document.getElementById(id).classList.add('active');
    btn.classList.add('active');
}