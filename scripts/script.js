document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const openBtn = document.getElementById('openModalBtn');
    const closeBtn = document.getElementById('closeModalBtn');
    const form = document.getElementById('contactForm');

    openBtn.addEventListener('click', function () {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', function () {
        modal.classList.remove('show');
        document.body.style.overflow = '';
    });

    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = '';
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault();





        modal.classList.remove('show');
        document.body.style.overflow = '';
        form.reset();
    });
});