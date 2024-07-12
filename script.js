document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('more-info-btn');
    const moreInfo = document.getElementById('more-info');

    button.addEventListener('click', function () {
        if (moreInfo.style.display === 'none') {
            moreInfo.style.display = 'block';
        } else {
            moreInfo.style.display = 'none';
        }
    });
});
