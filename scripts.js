document.addEventListener('DOMContentLoaded', function () {
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');

    dropdownToggles.forEach(function (toggle) {
        toggle.addEventListener('click', function () {
            const dropdownList = toggle.nextElementSibling;
            dropdownList.style.display = dropdownList.style.display === 'block' ? 'none' : 'block';
        });
    });
});
